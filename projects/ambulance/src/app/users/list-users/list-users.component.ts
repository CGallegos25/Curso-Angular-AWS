import { Component, OnInit } from '@angular/core';
import { MetaDataColumns } from '../../shared/interfaces/meta-data-columns';

@Component({
  selector: 'amb-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {

  data: any = [
    { id: 1, nombre: 'Israel Perez'},
    { id: 2, nombre: 'Adriana Campos'},
    { id: 3, nombre: 'Carlos Dominguez'},
  ];

  metadataColumns: MetaDataColumns[] = [
    { field: 'id', title: "ID" },
    { field: 'nombre', title:'Nombre del Usuario'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
