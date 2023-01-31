import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'amb-properties',
  templateUrl: './properties.component.html',
  styleUrls: ['./properties.component.css']
})
export class PropertiesComponent implements OnInit {

  @Input() valueOne!: number;
  @Input() valueTwo!: number;
  @Output() eventOne: EventEmitter<string> = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
    console.log(this.valueOne, this.valueTwo, this.eventOne);
  }

}
