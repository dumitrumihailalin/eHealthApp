import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-pacient',
  templateUrl: './pacient.component.html',
  styleUrls: ['./pacient.component.css']
})
export class PacientComponent implements OnInit {

  constructor(private fb: FormBuilder, private accountService: AccountService) { }

  pacientForm = this.fb.group({
    name: new FormControl(''),
    city: new FormControl(''),
    phone: new FormControl(''),
    completed: new FormControl(true),
    _userId: new FormControl()
  });

  ngOnInit(): void {
  }

  onSubmit() {
    this.accountService.pacient(this.pacientForm.value);
    this.pacientForm.reset();
  }
}
