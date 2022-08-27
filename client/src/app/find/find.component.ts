import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
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
  pacient: string | undefined;
  cities: string[] = [];
  specialities: string[] = [];
  hospitals: string[] = [];
  
  findDoctor = this.fb.group({
    speciality: new FormControl(''),
    city: new FormControl(''),
    hospital: new FormControl(''),
  });
  
  

  constructor(private fb: FormBuilder, private findService: FindService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.specialities = ['orl', 'oftalmologie', 'chirurgie', 'ginecologie'];
    this.cities = ['Botosani', 'Bucuresti', 'Craiova', 'Timisoara', 'Cluj', 'Iasi'];
    this.hospitals = ['Spitalul nr 1', 'Spitalul nr 2', 'Spitalul nr 3'];
    
    this.findService.info(this.route.snapshot.paramMap.get('id')).subscribe( (response: any) => {
      this.pacient = response.data
    })
  }
  
  onSubmit() {
      this.findService.doctor(this.findDoctor.value).subscribe( 
        (data: any) => this.doctors = data.data,
        (error: any) => this.errors = error);
    // this.loginForm.reset();
  }
}
