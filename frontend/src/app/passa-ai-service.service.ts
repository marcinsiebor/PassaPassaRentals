import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { finalize } from 'rxjs/operators'; 

@Injectable({
  providedIn: 'root'
})
export class PassaAiServiceService {
  private apiUrl = 'https://passarentalbackend.azurewebsites.net/';


  private getOpenaiApiKey(): Observable<any> {
    const openaiApiKeyUrl = `${this.apiUrl}/openai-api-key`;
    return this.http.get(openaiApiKeyUrl);
  }

  //setup
  public generatePassaSuggestionsWithFetchAPI(jobData: any): Observable<string> {
    const resultSubject = new Subject<string>();
    const controller = new AbortController();
    const signal = controller.signal;

    // Fetch the OpenAI API key from your backend before making the request
    const keySubscription = this.getOpenaiApiKey().subscribe(
      (response: any) => {
        const frontendApiKey = response.openai_api_key;
        const frontendApiUrl = 'https://api.openai.com/v1/chat/completions';

        //Make Fetch Request
        fetch(frontendApiUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${frontendApiKey}`
          },
          body: JSON.stringify({
            model: 'gpt-3.5-turbo',
            messages: [{ role: 'user', content: jobData.jobDescription }],
            max_tokens: 2000,
            stream: true
          }),
          signal
        })
        .then(response => {

          //Handle Response
          if (response.ok) {
            const reader = response.body?.getReader(); 
            const decoder = new TextDecoder('utf-8');

            //Read Chunks Asynchronously
            let accumulatedChunks = '';
            const readChunk = async () => {
              try {
                const result = await reader?.read();

                if (result?.done) {
                  resultSubject.complete();
                  return;
                }

                accumulatedChunks += decoder.decode(result?.value || new Uint8Array());
                const lines = accumulatedChunks.split('\n');
                accumulatedChunks = lines.pop() || '';

                lines.forEach(line => {
                  if (line.trim() !== '') {
                    try {
                      const parsedLine = JSON.parse(line.replace(/^data: /, '').trim());
                      const { choices } = parsedLine;
                      const { delta } = choices[0];
                      const { content } = delta;

                      if (content) {
                        resultSubject.next(content);
                      }
                    } catch (error) {
                      console.error('Error parsing JSON:', error);
                    }
                  }
                });

                readChunk(); // Continue reading chunks asynchronously
              } catch (error) {
                console.error('Error reading chunk:', error);
                resultSubject.error('CV generation failed');
                resultSubject.complete();
              }
            };

            readChunk();

            //Handle Errors
          } else {
            console.error(`Error: ${response.status} - ${response.statusText}`);
            resultSubject.error('CV generation failed');
            resultSubject.complete();
          }
        })  //Handle Fetch Errors
        .catch(error => {
          console.error('Error:', error);
          resultSubject.error('CV generation failed');
          resultSubject.complete();
        });
      }, //Cleanup Subscriptions
      error => {
        console.error('Error fetching OpenAI API key:', error);
        resultSubject.error('CV generation failed');
        resultSubject.complete();
      }
    );

    // Cleanup subscriptions when the observable is unsubscribed
    return resultSubject.asObservable().pipe(
      finalize(() => {
        controller.abort(); // Abort the fetch request
        keySubscription.unsubscribe(); // Unsubscribe from the OpenAI API key subscription
      })
    );
  }

  constructor(private http: HttpClient) {}

}
