import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { AccountService } from '../services/account.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  
  constructor(private fb: FormBuilder, private userService: UserService) { }

  userForm = this.fb.group({
    cnp: new FormControl(''),
    password: new FormControl(''),
    role: new FormControl(''),
    completed: new FormControl(false)
  });

  ngOnInit(): void {
  }

  onSubmit() {
    this.userService.store(this.userForm.value);
    this.userForm.reset();
  }
}
