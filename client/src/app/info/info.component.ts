import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Pacient } from '../models/Pacient';
import { AccountService } from '../services/account.service';
import { FindService } from '../services/find.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  pacient: any = {};

  resultsForm = this.fb.group({
    doctorId: new FormControl(''),
    pacientId: new FormControl(''),
    found: new FormControl(''),
    solution: new FormControl('')
  });
  
  constructor(private accountService: AccountService, private fb: FormBuilder, private findService: FindService, private userService: UserService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.findService.pacientInfo(this.route.snapshot.paramMap.get('id')).
    subscribe( (response: any) => this.pacient = response.data)
  }

  onSubmit() {
    this.resultsForm.value.pacientId = this.route.snapshot.paramMap.get('id');
    this.resultsForm.value.doctorId = this.accountService._userId();

    this.userService.results(this.resultsForm.value).subscribe();
    this.resultsForm.reset();
  }

}
