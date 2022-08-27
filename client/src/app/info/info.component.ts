import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FindService } from '../services/find.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  pacient: any;

  constructor(private findService: FindService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.findService.info(this.route.snapshot.paramMap.get('id')).subscribe( (response: any) => {
      this.pacient = response.data
    })
  }

}
