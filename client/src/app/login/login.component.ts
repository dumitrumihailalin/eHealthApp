import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  errorMesage: string = '';

  constructor(private fb: FormBuilder, private userService: UserService, private router: Router) { }

  loginForm = this.fb.group({
    cnp: new FormControl(''),
    password: new FormControl(''),
  });
  
  ngOnInit(): void {
  }

  onSubmit() {
    this.userService.login(this.loginForm.value).subscribe(response => {
      this.loginForm.reset();
      this.router.navigateByUrl('/home');
    }, error => {
      this.errorMesage = 'Invalid credentials';
    });

  }
}
