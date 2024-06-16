import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

 

  private apiUrl = 'https://localhost:7178/api/Users/authenticate';


  constructor(private http: HttpClient) {}

  authenticate(username: string, password: string): Observable<any> {
    this.apiUrl+=`?username=${username}&password=${password}`;
    return this.http.get<any>(this.apiUrl);
  }
}
