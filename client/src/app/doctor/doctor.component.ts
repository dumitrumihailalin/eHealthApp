import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AccountService } from '../services/account.service';
import { FindService } from '../services/find.service';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent implements OnInit {
  pacient: any;

  constructor(private fb: FormBuilder, private accountService: AccountService, private findService: FindService, private route: ActivatedRoute) { }

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
    this.doctor();
  }

  onSubmit() {
    this.doctorForm.value._userId = this.accountService._userId();
    this.accountService.doctor(this.doctorForm.value);
    this.doctorForm.reset();
    this.accountService.logout();
  }
  
  doctor() {
    this.findService.info(this.route.snapshot.paramMap.get('id')).subscribe( (response: any) => {
      this.doctorForm.patchValue(response.data);
    })
  }
}
