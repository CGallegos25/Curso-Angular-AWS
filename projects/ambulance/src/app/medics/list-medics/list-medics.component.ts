import { Component, OnInit } from '@angular/core';
import { environment } from 'projects/ambulance/src/environments/environment';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { KeyButton } from '../../shared/interfaces/key-button';
import { MetaDataColumns } from '../../shared/interfaces/meta-data-columns';
import { Medic } from '../domain/medic';
import { MedicUsecase } from '../application/medic-usecase';
import { UtilService } from '../../shared/services/util.service';
import { ResultPage } from '../application/result-page';
import { MatDialogRef } from '@angular/material/dialog';
import { FormMedicComponent } from '../form-medic/form-medic.component';

@Component({
  selector: 'amb-list-medics',
  templateUrl: './list-medics.component.html',
  styleUrls: ['./list-medics.component.css']
})
export class ListMedicsComponent implements OnInit {

  obsFinish = new Subject<any>();
  data: Medic[] = [];
  pageCurrent = 0;
  pageSize = environment.pageSize;
  totalRecords = 0;


  metadataColumns: MetaDataColumns[] = [
    { field: 'id', title: "ID" },
    { field: 'nombre', title: 'Nombre'},
    { field: 'segundo_nombre', title: 'Segundo Nombre'},
    { field: 'apellido', title: 'Apellido'},
    { field: 'cmp', title: 'CMP'},
    { field: 'correo', title: 'Correo electronico'},
    { field: 'dni', title: 'DNI'},
    { field: 'foto', title: 'Foto'},
    { field: 'activo', title: 'ACTIVO'}
  ];

  keypadButtons: KeyButton[] = [
    { icon: 'add', tooltip: 'Agregar', color: 'primary', action: 'new' },
    {
      icon: 'download',
      tooltip: 'Descargar',
      color: 'accent',
      action: 'donwload',
    },
  ];

  constructor(
    private readonly medicUsecase: MedicUsecase,
    private utilService: UtilService
  ) { }

  ngOnInit(): void {
    this.loadDataByPage(0);
  }

  ngOnDestroy(): void {
    this.obsFinish.next();
    this.obsFinish.complete();
  }

  changePage(page: number) {
    this.pageCurrent = page;
    this.loadDataByPage(page);
  }

  edit(row: any) {
    this.openForm(row);
  }

  actions(act: string) {
    switch (act) {
      case 'new':
        this.openForm();
        break;
      case 'donwload':
        this.download();
        break;
    }
  }

  openForm(data?: Medic) {
    const reference: MatDialogRef<FormMedicComponent> =
      this.utilService.openModal(FormMedicComponent, {
        disableClose: true,
        panelClass: 'container-modal',
        data,
      });

    reference.afterClosed().subscribe((response) => {
      if (!response) {
        return;
      }

      if (response.id) {
        const medic = { ...response };
        delete medic.id;
        this.medicUsecase
          .update(response.id, medic)
          .pipe(takeUntil(this.obsFinish))
          .subscribe((data: Medic) => {
            this.loadDataByPage(this.pageCurrent);
          });
      } else {
        const medic = { ...response };
        delete medic.id;
        this.medicUsecase
          .insert(medic)
          .pipe(takeUntil(this.obsFinish))
          .subscribe((data: Medic) => {
            this.loadDataByPage(this.pageCurrent);
          });
      }
    });
  }

  detele(row: Medic) {
    const obsResponse: Observable<string> = this.utilService.confirm(
      '¿Estas seguro de eliminar a "' + row.nombre + '"?'
    );

    obsResponse.subscribe((response) => {
      if (!response) {
        return;
      }

      this.medicUsecase
        .delete(row.id)
        .pipe(takeUntil(this.obsFinish))
        .subscribe((data: Medic) => {
          this.loadDataByPage(this.pageCurrent);
        });
    });
  }


  download() {
    this.medicUsecase.list()
    .pipe(takeUntil(this.obsFinish))
    .subscribe((response: Medic[]) => {
      this.utilService.openSheet(response, 'Listado de medicos', 'medicos');
    });
  }

  loadDataByPage(page: number) {
    this.medicUsecase
      .getPage(page)
      .pipe(takeUntil(this.obsFinish))
      .subscribe((data: ResultPage) => {
        this.data = data.records;
        this.totalRecords = data.totalRecords;
      });

    // this.data = this.dataOriginal.slice(this.pageCurrent*this.pageSize, this.pageCurrent*this.pageSize+this.pageSize);
  }

}
