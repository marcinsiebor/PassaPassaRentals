import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {
  private apiUrl = 'https://passarentalbackend.azurewebsites.net/';

  private user: any = { id: null, firstname: '', lastname: '', email: '' }; 
  private logged = false;
  private signedUp = false;

  get isLoggedIn(): boolean {
    return this.logged;
  }

  hasSignedUp(): boolean {
    return this.signedUp;
  }

  loginUser(loginData: any): Observable<any> {
    const url = `${this.apiUrl}/login`;
    return this.http.post(url, loginData).pipe(
      tap((user) => {
        this.user = user;
        this.logged = true;
      }),
      catchError((error) => {
        this.logged = false;
        return throwError(error);
      })
    );
  }

  logout(): Observable<any> {
    const url = `${this.apiUrl}/logout`;
    return this.http.post(url, {}).pipe(
      tap(() => {
        this.user = { id: null, firstname: '', lastname: '', email: '' }; 
        this.logged = false;
        this.router.navigate(['/login']);
      })
    );
  }

  registerUser(formData: any): Observable<any> {
    const url = `${this.apiUrl}/register`;
    return this.http.post(url, formData).pipe(
      tap((user) => {
        this.user = user;
        this.signedUp = true;
      }),
      catchError((error) => {
        this.signedUp = false;
        return throwError(error);
      })
    );
  }

  getUserId(): number | null {
    return this.user.id ?? null;
  }

  constructor(private router: Router, private http: HttpClient) {}
}
