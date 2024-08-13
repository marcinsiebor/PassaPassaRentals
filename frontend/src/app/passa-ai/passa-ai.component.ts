import { Component } from '@angular/core';
import { PassaAiServiceService } from '../passa-ai-service.service';

@Component({
  selector: 'app-passa-ai',
  templateUrl: './passa-ai.component.html',
  styleUrls: ['./passa-ai.component.css']
})
export class PassaAiComponent {
  jobDescription: string = '';
  generatedPassaSuggestions: string = '';
  error: string = '';
  isPassaSuggestionsGenerated: boolean = false; // track Passa Suggestions generation status

  constructor(private passaService: PassaAiServiceService) {}

  generatePassaSuggestions() {
    if (!this.jobDescription.trim()) {
      this.error = 'Job description cannot be empty';
      return;
    }

    this.passaService.generatePassaSuggestionsWithFetchAPI({ jobDescription: this.jobDescription }).subscribe(
      (content: string) => {
        this.generatedPassaSuggestions += content;
        this.isPassaSuggestionsGenerated = true;
      },
      (error) => {
        console.error('Error:', error);
        this.error = 'Passa Suggestions generation failed';
        this.isPassaSuggestionsGenerated = false;
      }
    );
  }

  resetPassaSuggestionsGeneration() {
    this.generatedPassaSuggestions = '';
    this.isPassaSuggestionsGenerated = false;
  }
}
