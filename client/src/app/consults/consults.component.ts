import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-consults',
  templateUrl: './consults.component.html',
  styleUrls: ['./consults.component.css']
})
export class ConsultsComponent implements OnInit {

  pacients: any[] = [];
  errors: any;

  constructor(private accountService: AccountService, private route: ActivatedRoute,) { }
  
  ngOnInit(): void {
    const doctorId = this.route.snapshot.paramMap.get('id');
    this.accountService.pacientList(doctorId).subscribe( 
      (data: any) => this.pacients = data.data,
      (error: any) => this.errors = error);
  }

}
