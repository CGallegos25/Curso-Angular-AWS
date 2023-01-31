import { Component, OnInit } from '@angular/core';
import { environment } from 'projects/ambulance/src/environments/environment';
import { MetaDataColumns } from '../../shared/interfaces/meta-data-columns';

@Component({
  selector: 'amb-list-histories',
  templateUrl: './list-histories.component.html',
  styleUrls: ['./list-histories.component.css']
})
export class ListHistoriesComponent implements OnInit {

  dataOriginal: any = [
    { id: 1, nombrePaciente: 'Carlos Aguirre', nombreMedico: 'Juan Garcia', fecha: new Date()},
    { id: 2, nombrePaciente: 'Pedro Perez', nombreMedico: 'Armando Gomez', fecha: new Date()},
    { id: 3, nombrePaciente: 'Alejandro Ramirez', nombreMedico: 'Carlos Guitierrez', fecha: new Date()},
    { id: 4, nombrePaciente: 'Carlos Aguirre', nombreMedico: 'Juan Garcia', fecha: new Date()},
    { id: 5, nombrePaciente: 'Pedro Perez', nombreMedico: 'Armando Gomez', fecha: new Date()},
    { id: 6, nombrePaciente: 'Alejandro Ramirez', nombreMedico: 'Carlos Guitierrez', fecha: new Date()},
    { id: 7, nombrePaciente: 'Carlos Aguirre', nombreMedico: 'Juan Garcia', fecha: new Date()},
    { id: 8, nombrePaciente: 'Pedro Perez', nombreMedico: 'Armando Gomez', fecha: new Date()},
    { id: 9, nombrePaciente: 'Alejandro Ramirez', nombreMedico: 'Carlos Guitierrez', fecha: new Date()},
    { id: 10, nombrePaciente: 'Carlos Aguirre', nombreMedico: 'Juan Garcia', fecha: new Date()},
    { id: 11, nombrePaciente: 'Pedro Perez', nombreMedico: 'Armando Gomez', fecha: new Date()},
    { id: 12, nombrePaciente: 'Alejandro Ramirez', nombreMedico: 'Carlos Guitierrez', fecha: new Date()},
    { id: 13, nombrePaciente: 'Carlos Aguirre', nombreMedico: 'Juan Garcia', fecha: new Date()},
    { id: 14, nombrePaciente: 'Pedro Perez', nombreMedico: 'Armando Gomez', fecha: new Date()},
    { id: 15, nombrePaciente: 'Alejandro Ramirez', nombreMedico: 'Carlos Guitierrez', fecha: new Date()},
    { id: 16, nombrePaciente: 'Carlos Aguirre', nombreMedico: 'Juan Garcia', fecha: new Date()},
    { id: 17, nombrePaciente: 'Pedro Perez', nombreMedico: 'Armando Gomez', fecha: new Date()},
    { id: 17, nombrePaciente: 'Alejandro Ramirez', nombreMedico: 'Carlos Guitierrez', fecha: new Date()},
    { id: 18, nombrePaciente: 'Carlos Aguirre', nombreMedico: 'Juan Garcia', fecha: new Date()},
    { id: 19, nombrePaciente: 'Pedro Perez', nombreMedico: 'Armando Gomez', fecha: new Date()},
    { id: 20, nombrePaciente: 'Alejandro Ramirez', nombreMedico: 'Carlos Guitierrez', fecha: new Date()},
    { id: 1, nombrePaciente: 'Carlos Aguirre', nombreMedico: 'Juan Garcia', fecha: new Date()},
    { id: 2, nombrePaciente: 'Pedro Perez', nombreMedico: 'Armando Gomez', fecha: new Date()},
    { id: 3, nombrePaciente: 'Alejandro Ramirez', nombreMedico: 'Carlos Guitierrez', fecha: new Date()},
    { id: 1, nombrePaciente: 'Carlos Aguirre', nombreMedico: 'Juan Garcia', fecha: new Date()},
    { id: 2, nombrePaciente: 'Pedro Perez', nombreMedico: 'Armando Gomez', fecha: new Date()},
    { id: 3, nombrePaciente: 'Alejandro Ramirez', nombreMedico: 'Carlos Guitierrez', fecha: new Date()},
    { id: 1, nombrePaciente: 'Carlos Aguirre', nombreMedico: 'Juan Garcia', fecha: new Date()},
    { id: 2, nombrePaciente: 'Pedro Perez', nombreMedico: 'Armando Gomez', fecha: new Date()},
    { id: 3, nombrePaciente: 'Alejandro Ramirez', nombreMedico: 'Carlos Guitierrez', fecha: new Date()},
    { id: 1, nombrePaciente: 'Carlos Aguirre', nombreMedico: 'Juan Garcia', fecha: new Date()},
    { id: 2, nombrePaciente: 'Pedro Perez', nombreMedico: 'Armando Gomez', fecha: new Date()},
    { id: 3, nombrePaciente: 'Alejandro Ramirez', nombreMedico: 'Carlos Guitierrez', fecha: new Date()},
    { id: 1, nombrePaciente: 'Carlos Aguirre', nombreMedico: 'Juan Garcia', fecha: new Date()},
    { id: 2, nombrePaciente: 'Pedro Perez', nombreMedico: 'Armando Gomez', fecha: new Date()},
    { id: 3, nombrePaciente: 'Alejandro Ramirez', nombreMedico: 'Carlos Guitierrez', fecha: new Date()},
    { id: 1, nombrePaciente: 'Carlos Aguirre', nombreMedico: 'Juan Garcia', fecha: new Date()},
    { id: 2, nombrePaciente: 'Pedro Perez', nombreMedico: 'Armando Gomez', fecha: new Date()},
    { id: 3, nombrePaciente: 'Alejandro Ramirez', nombreMedico: 'Carlos Guitierrez', fecha: new Date()},
    { id: 1, nombrePaciente: 'Carlos Aguirre', nombreMedico: 'Juan Garcia', fecha: new Date()},
    { id: 2, nombrePaciente: 'Pedro Perez', nombreMedico: 'Armando Gomez', fecha: new Date()},
    { id: 3, nombrePaciente: 'Alejandro Ramirez', nombreMedico: 'Carlos Guitierrez', fecha: new Date()},
    { id: 1, nombrePaciente: 'Carlos Aguirre', nombreMedico: 'Juan Garcia', fecha: new Date()},
    { id: 2, nombrePaciente: 'Pedro Perez', nombreMedico: 'Armando Gomez', fecha: new Date()},
    { id: 3, nombrePaciente: 'Alejandro Ramirez', nombreMedico: 'Carlos Guitierrez', fecha: new Date()},
    { id: 1, nombrePaciente: 'Carlos Aguirre', nombreMedico: 'Juan Garcia', fecha: new Date()},
    { id: 2, nombrePaciente: 'Pedro Perez', nombreMedico: 'Armando Gomez', fecha: new Date()},
    { id: 3, nombrePaciente: 'Alejandro Ramirez', nombreMedico: 'Carlos Guitierrez', fecha: new Date()},
    { id: 1, nombrePaciente: 'Carlos Aguirre', nombreMedico: 'Juan Garcia', fecha: new Date()},
    { id: 2, nombrePaciente: 'Pedro Perez', nombreMedico: 'Armando Gomez', fecha: new Date()},
    { id: 3, nombrePaciente: 'Alejandro Ramirez', nombreMedico: 'Carlos Guitierrez', fecha: new Date()},
  ];

  data: any;
  pageCurrent = 0;
  pageSize !: number;

  metadataColumns: MetaDataColumns[] = [
    { field: 'id', title: "ID" },
    { field: 'nombrePaciente', title:'Nombre Completo del Paciente'},
    { field: 'nombreMedico', title: 'Nombre del Médico'}
  ];

  constructor() { }

  ngOnInit(): void {
    this.loadDataByPage();
  }

  changePage(page: number) {
    this.pageCurrent = page;
    this.loadDataByPage();
  }

  loadDataByPage() {
    this.pageSize = environment.pageSize;
    this.data = this.dataOriginal.slice(this.pageCurrent*this.pageSize, this.pageCurrent*this.pageSize+this.pageSize);
  }
}
