import { Component, OnInit } from '@angular/core';
import { Color, ScaleType } from '@swimlane/ngx-charts';

import { SocketUseCase } from '../application/socket-use-case';
import { Entity } from '../domain/entity';

@Component({
  selector: 'amb-socket',
  templateUrl: './socket.component.html',
  styleUrls: ['./socket.component.css']
})
export class SocketComponent implements OnInit {

  results: Entity[] = [];
  view: any = [400, 300];
  colorScheme: Color = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA'],
    group: ScaleType.Ordinal,
    selectable: true,
    name: 'Customer Usage',
  };
  legend = true;
  legendPosition = 'above';
  legendTitle = 'Vacunas';
  gradient = true;
  doughnut = true;

  constructor(private socketUsecase: SocketUseCase) { }

  ngOnInit(): void {
    this.socketUsecase.listen('dataupdate').subscribe((results) => {
      this.results = results;
    });
  }

}
