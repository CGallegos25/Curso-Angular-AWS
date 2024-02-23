import { Component, OnInit } from '@angular/core';
import { SpinnerService } from '../../services/spinner.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'amb-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
