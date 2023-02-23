import { Component, OnInit } from '@angular/core';
import { Color, ScaleType } from '@swimlane/ngx-charts';
import { AtmosfericaUseCaseService } from '../application/atmosferica-use-case.service';
import { AtmosfericasResultModel } from '../models/atmosfericas-model';

@Component({
  selector: 'amb-atmosferica',
  templateUrl: './atmosferica.component.html',
  styleUrls: ['./atmosferica.component.css']
})
export class AtmosfericaComponent implements OnInit {

  dataAtmosferica: AtmosfericasResultModel[] = [];

  single = [
    {
      "name": "Germany",
      "value": 8940000
    },
    {
      "name": "USA",
      "value": 5000000
    },
    {
      "name": "France",
      "value": 7200000
    }
  ];

  view: any = [700, 450];
  colorScheme: Color = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA'],
    group: ScaleType.Ordinal,
    selectable: true,
    name: 'Customer Usage',
  };
  xAxis = true;
  yAxis = true;
  showXAxisLabel = true;
  showYAxisLabel = true;
  xAxisLabel = '_id';
  yAxisLabel = 'Probabilidad de precipitación';
  yScaleMin = 0;
  yScaleMax = 2500;
  showGridLines = true;
  legend = true;
  legendPosition = ['right', 'below'];
  legendTitle = '';

  constructor(private readonly atmosfericaUseCaseService: AtmosfericaUseCaseService) { }

  ngOnInit(): void {
    this.atmosfericaUseCaseService.getAllData().subscribe(data => {
      this.dataAtmosferica = data.results.slice(0, 20);
    })
  }

}
