import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  result: any[] = []
  doctor: any = {}

  constructor(private userService: UserService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.initResult();
  }

  initResult() {
    this.userService.show(this.route.snapshot.paramMap.get('id')).subscribe(
      (response: any)  => {
        this.doctor = response.data[0].doctor,
        this.result = response.data[0].result
      })
  }
}
