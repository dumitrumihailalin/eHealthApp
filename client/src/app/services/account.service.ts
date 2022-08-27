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

  store(model: any): void { 
    this.httpClient.post(this.baseUrl + 'pacient/store', model).subscribe((result: any) => { 
      console.log(result)    
    })
  }

  pacientList(id: any) {
    return this.httpClient.get(this.baseUrl + 'pacient/list/'+ id);
  }

  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user')!);
    return user !== null ? true : false;
  }

  isDoctor() {
    const user = JSON.parse(localStorage.getItem('user')!);
    if (!user) {
      this.router.navigateByUrl('/login');
      return false;
    } else {
      return user.user.role === 'doctor' ? true : false;
    }
  }

  _userId() {
    const user = JSON.parse(localStorage.getItem('user')!);
    if (user) {
      return user.user._id; 
    } else {
      return null;
    }
  }

  role() {
    const user = JSON.parse(localStorage.getItem('user')!);
    if (user) {
      return user.user.role;  
    }
  }

  isCompleted() {
    const user = JSON.parse(localStorage.getItem('user')!);
    return user.user.completed === false ? false : true;
  }

  logout() {
    localStorage.removeItem('user');
    this.router.navigateByUrl('/login');
  }
}
