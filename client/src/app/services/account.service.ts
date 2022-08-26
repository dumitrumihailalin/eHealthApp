import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  baseUrl = 'http://localhost:5000/api/v1/';
  constructor(private httpClient: HttpClient, private router: Router) { }

   doctor(model: any): void { 
    this.httpClient.post(this.baseUrl + 'doctor/store', model).subscribe((result: any) => { 
      console.log(result)    
    })
  }

  pacient(model: any): void { 
    this.httpClient.post(this.baseUrl + 'pacient', model).subscribe((result: any) => { 
      console.log(result)    
    })
  }

  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user')!);
    return user !== null ? true : false;
  }

  isDoctor() {
    const user = JSON.parse(localStorage.getItem('user')!);
    return user.user.role === 'doctor' ? true : false;
  }

  _userId() {
    const user = JSON.parse(localStorage.getItem('user')!);
    return user.user._id; 
  }


  isCompleted() {
    const user = JSON.parse(localStorage.getItem('user')!);
    return user.user.completed !== false ? true : false;
  }

  logout() {
    localStorage.removeItem('user');
    this.router.navigateByUrl('/login');
  }
}
