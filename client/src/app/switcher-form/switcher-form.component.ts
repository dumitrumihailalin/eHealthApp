import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-switcher-form',
  templateUrl: './switcher-form.component.html',
  styleUrls: ['./switcher-form.component.css']
})
export class SwitcherFormComponent implements OnInit {

  doctor: boolean = false;
  pacient: boolean = false;

  constructor(public router: Router, public location: Location) {

  }

  ngOnInit(): void {
    if (this.location.path() == '/pacient') {
      this.pacient = true;
    } else {
      this.pacient = false;
    }

    if (this.location.path() == '/doctor') {
      this.doctor = true;
    } else {
      this.doctor = false;
    }
  }

}
