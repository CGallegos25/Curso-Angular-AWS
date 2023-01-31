import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'amb-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css']
})
export class PaginatorComponent implements OnInit {
  @Input() pageSize!: number;
  @Input() length!: number;
  @Output() page: EventEmitter<number> = new EventEmitter<number>();

  showFirstLastButtons = true;

  constructor() { }

  ngOnInit(): void {
  }

  changePage(evt: PageEvent) {
    this.page.emit(evt.pageIndex);
  }

}
