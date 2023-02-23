import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../../config/services/config.service';
import { LayoutAbstract } from '../../shared/class/layout-abstract';
import { AtmosfericaUseCaseService } from '../application/atmosferica-use-case.service';
import { Atmosferica } from '../domain/atmosferica';

@Component({
  selector: 'amb-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit  {

  constructor() {

  }

  ngOnInit(): void {
  }

}
