import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../Models/user';

@Injectable({
  providedIn: 'root'
})
export class JobsService {

  private apiUrl = '';

  constructor(private http: HttpClient) { }

  getAllJobs(): Observable<any> {

    this.apiUrl = `https://localhost:7178/api/Jobs`;

    return this.http.get<any>(this.apiUrl);
  }
}
