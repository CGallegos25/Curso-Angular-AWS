import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { KeyButton } from '../../interfaces/key-button';

@Component({
  selector: 'amb-keypad',
  templateUrl: './keypad.component.html',
  styleUrls: ['./keypad.component.css']
})
export class KeypadComponent implements OnInit {

  @Input() keypadButtons: KeyButton[] = [];
  @Output() clickButton: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  action(act: string){
    this.clickButton.emit(act);
  }

}
