import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AccountService } from '../services/account.service';
import { FindService } from '../services/find.service';

@Component({
  selector: 'app-pacient',
  templateUrl: './pacient.component.html',
  styleUrls: ['./pacient.component.css']
})
export class PacientComponent implements OnInit {

  constructor(private fb: FormBuilder, private accountService: AccountService, private findService: FindService, private route: ActivatedRoute) { }

  pacientForm = this.fb.group({
    name: new FormControl(''),
    city: new FormControl(''),
    phone: new FormControl(''),
    completed: new FormControl(true),
    _userId: new FormControl()
  });

  ngOnInit(): void {
    this.pacient();
  }

  onSubmit() {
    this.pacientForm.value._userId = this.accountService._userId();
    this.accountService.store(this.pacientForm.value);
    this.pacientForm.reset();
    this.accountService.logout();
  }

  pacient() {
    this.findService.pacientInfo(this.route.snapshot.paramMap.get('id')).subscribe( (response: any) => {
     this.pacientForm.patchValue(response.data)
    })
  }
}
