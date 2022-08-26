import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { Doctor } from '../models/Doctor';
import { FindService } from '../services/find.service';

@Component({
  selector: 'app-find',
  templateUrl: './find.component.html',
  styleUrls: ['./find.component.css']
})
export class FindComponent implements OnInit {

  doctors: any[] = [];
  errors: string | undefined;

  findDoctor = this.fb.group({
    speciality: new FormControl(''),
    city: new FormControl(''),
    hospital: new FormControl(''),
  });
  
  
  constructor(private fb: FormBuilder, private findService: FindService) { }


  ngOnInit(): void {
  }

  onSubmit() {
      this.findService.doctor(this.findDoctor.value).subscribe( 
        (data: any) => this.doctors = data.data,
        (error: any) => this.errors = error);
    // this.loginForm.reset();
  }
}
