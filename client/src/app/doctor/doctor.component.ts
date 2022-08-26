import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent implements OnInit {

  constructor(private fb: FormBuilder, private accountService: AccountService) { }

  doctorForm = this.fb.group({
    name: new FormControl(''),
    hospital: new FormControl(''),
    speciality: new FormControl(''),
    city: new FormControl(''),
    phone: new FormControl(''),
    completed: new FormControl(true),
    _userId: new FormControl()
  });

  ngOnInit(): void {
  }

  onSubmit() {
    this.doctorForm.value._userId = this.accountService._userId();
    this.accountService.doctor(this.doctorForm.value);
    this.doctorForm.reset();
  }
}
