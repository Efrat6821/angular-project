import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SendCVService {

  private apiUrl = 'https://localhost:7178/api/Users';

  constructor(private http: HttpClient) { }


  updateCountSendCV(userId: number): Observable<number> {
    const url = `${this.apiUrl}/updateCountSendCV?useId=${userId}`;

    return this.http.put<number>(url,null);
  }

  updateSendCV(userId: number, jobId: number): Observable<number> {
    const url = `${this.apiUrl}/UpdateSendCVList?useId=${userId}&jobId=${jobId}`;

    return this.http.put<number>(url,null);
  }

}
