import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl = 'http://localhost:5000/api/v1/';
  constructor(private httpClient: HttpClient) { }

   store(model: any): any { 
    this.httpClient.post<User[]>(this.baseUrl + 'users', model).subscribe((result: any) => { 
      console.log(result)    
    })
  }

  login(model: any) {
    return this.httpClient.post(this.baseUrl + 'auth/login', model).pipe(
      map( (response: any) => {
        const  user = response;   
        if ( user) {
          localStorage.setItem('user', JSON.stringify(user));
        }
      })
    )
  }

  pacients() {
    return this.httpClient.get(this.baseUrl + 'pacient/list').pipe(
      map( (response: any) => {
        return response   
      })
    )
  }

  results(model: any) {
    return this.httpClient.post(this.baseUrl + 'pacient/result', model).pipe(
      map( (response: any) => {
        return response   
      })
    )
  }
  show(id: any) {
    return this.httpClient.get(this.baseUrl + 'pacient/show/'+ id).pipe(
      map( (response: any) => {
        return response   
      })
    )
  }
}
