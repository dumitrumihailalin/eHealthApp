import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ReservationService } from '../reservation.service';
import { UserService } from '../services/user.service';
import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {

  errorMesage: string |  undefined;
  
  constructor(private fb: FormBuilder, 
    private reservationService: ReservationService,
    private accountService: AccountService, 
    private route: ActivatedRoute, 
    private router: Router) { }

  reservationForm = this.fb.group({
    date: new FormControl(''),
    time: new FormControl(''),
    doctorId: new FormControl(''),
    pacientId: new FormControl('')
  });
  
  ngOnInit(): void {
  }

  onSubmit() {
    this.reservationForm.value.doctorId = this.route.snapshot.paramMap.get('id');
    this.reservationForm.value.pacientId = this.accountService._userId();
    
    this.reservationService.schedule(this.reservationForm.value).subscribe(response => {
      this.reservationForm.reset();
    }, error => {
      this.errorMesage = 'An error occured, please try again latter';
    });

  }
}
