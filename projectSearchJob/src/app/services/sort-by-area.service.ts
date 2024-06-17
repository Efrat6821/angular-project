import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Job } from '../Models/job';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SortByAreaService {

  apiUrl: string = "";

  constructor(private http: HttpClient) { }

  sortByArea(area: string, filed: string): Observable<Job[]> {

    this.apiUrl = `https://localhost:7178/api/Jobs/area?area=${area}&filed=${filed}`;

    return this.http.get<Job[]>(this.apiUrl);
  }
}
