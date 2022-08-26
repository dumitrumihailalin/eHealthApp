import { Component, OnInit } from '@angular/core';
import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  isDoctor: boolean = false;

  constructor(public accountService: AccountService) { }

  ngOnInit(): void {
    this.isDoctor = this.accountService.isDoctor();
  }

}
