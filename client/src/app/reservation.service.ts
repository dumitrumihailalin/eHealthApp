import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Schedule } from './models/Schedule';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  baseUrl = 'http://localhost:5000/api/v1/';

  constructor(private httpClient: HttpClient) { }

  schedule(reserve: any): Observable<Schedule> { 
     return this.httpClient.post<Schedule>(this.baseUrl + 'doctor/schedule', reserve);
  }
}
