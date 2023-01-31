import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../../config/services/config.service';
import { LayoutAbstract } from '../../shared/class/layout-abstract';

@Component({
  selector: 'amb-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent /*extends LayoutAbstract*/ implements OnInit  {

  // constructor( configService: ConfigService) {
  //   super(configService);
  // }

  ngOnInit(): void {
  }

}
