import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Doctor } from '../models/Doctor';

@Injectable({
  providedIn: 'root'
})
export class FindService {

  baseUrl = 'http://localhost:5000/api/v1/';

  constructor(private httpClient: HttpClient) { }

  doctor(doctor: any): Observable<Doctor> { 
     return this.httpClient.post<Doctor>(this.baseUrl + 'doctor/find', doctor);
  }
}
