import { Component, OnInit } from '@angular/core';
import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  role: string | undefined;

  constructor(public accountService: AccountService) { }

  ngOnInit(): void {
    this.role = this.accountService.role();
  }

  logout() {
    this.accountService.logout();
  }
}
