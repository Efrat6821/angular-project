import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { User } from '../Models/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private apiUrl = '';

  constructor(private http: HttpClient) { }

  authenticate(username: string, password: string): Observable<User> {
    console.log(`userName ${username} password ${password}`);

    this.apiUrl = `https://localhost:7178/api/Users/authenticate?username=${username}&password=${password}`;

    return this.http.get<User>(this.apiUrl);
  }
}
