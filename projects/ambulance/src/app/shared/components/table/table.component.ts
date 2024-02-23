import { Component, OnInit, Input, ViewChild, QueryList, ContentChildren, SimpleChanges } from '@angular/core';
import { MatColumnDef, MatTable, MatTableDataSource } from '@angular/material/table';
import { MetaDataColumns } from '../../interfaces/meta-data-columns';
import { SpinnerService } from '../../services/spinner.service';

@Component({
  selector: 'amb-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  @Input() data: any = [];
  @Input() metadataColumns: MetaDataColumns[] = [];
  @ViewChild(MatTable, { static: true }) table!: MatTable<any>;
  @ContentChildren(MatColumnDef, { descendants: true })
  columnsDef!: QueryList<MatColumnDef>;

  dataSource: any;
  listFields: string[] = [];
  isLoading = this.spinnerService.isLoading;

  constructor(
    private spinnerService: SpinnerService
  ) { }

  ngOnChanges() {
    if (this.isLoading) {
      this.loadData();
    }
  }

  ngOnInit(): void {
    this.listFields = this.metadataColumns.map( el => el.field);
    if (this.isLoading) {
      this.loadData();
    }
  }

  loadData() {
    this.dataSource = new MatTableDataSource<any>(this.data);
  }

  ngAfterContentInit() {
    if (!this.columnsDef) {
      return;
    }
    this.columnsDef.forEach((columnDef) => {
      this.listFields.push(columnDef.name);
      this.table?.addColumnDef(columnDef);
    });
  }

}
