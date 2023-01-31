import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { environment } from 'projects/ambulance/src/environments/environment';

import { KeyButton } from '../../shared/interfaces/key-button';
import { MetaDataColumns } from '../../shared/interfaces/meta-data-columns';
import { FormDriverComponent } from '../form-driver/form-driver.component';

import { DriverUsecase } from '../aplication/driver-usecase';
import { ResultPage } from '../aplication/result-page';
import { Driver } from '../domain/driver';
import { UtilService } from '../../shared/services/util.service';

@Component({
  selector: 'amb-list-drivers',
  templateUrl: './list-drivers.component.html',
  styleUrls: ['./list-drivers.component.css'],
})
export class ListDriversComponent implements OnInit {
  obsFinish = new Subject<any>();
  data: Driver[] = [];
  pageCurrent = 0;
  pageSize = environment.pageSize;
  totalRecords = 0;

  metadataColumns: MetaDataColumns[] = [
    { field: 'id', title: 'ID' },
    { field: 'nombre', title: 'Nombre del Conductor' },
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
    private readonly driverUsecase: DriverUsecase,
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

  detele(row: Driver) {
    const obsResponse: Observable<string> = this.utilService.confirm(
      '¿Estas seguro de eliminar a "' + row.nombre + '"?'
    );

    obsResponse.subscribe((response) => {
      if (!response) {
        return;
      }

      this.driverUsecase
        .delete(row.id)
        .pipe(takeUntil(this.obsFinish))
        .subscribe((data: Driver) => {
          this.loadDataByPage(this.pageCurrent);
        });
    });
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

  openForm(data?: Driver) {
    const reference: MatDialogRef<FormDriverComponent> =
      this.utilService.openModal(FormDriverComponent, {
        disableClose: true,
        panelClass: 'container-modal',
        data,
      });

    reference.afterClosed().subscribe((response) => {
      if (!response) {
        return;
      }

      if (response.id) {
        const driver = { ...response };
        delete driver.id;
        this.driverUsecase
          .update(response.id, driver)
          .pipe(takeUntil(this.obsFinish))
          .subscribe((data: Driver) => {
            this.loadDataByPage(this.pageCurrent);
          });
        // const pos = this.dataOriginal.findIndex((row: any) => row.id === response.id);
        // this.dataOriginal[pos].nombre = response.nombre;
        // this.loadDataByPage();
      } else {
        const driver = { ...response };
        delete driver.id;
        this.driverUsecase
          .insert(driver)
          .pipe(takeUntil(this.obsFinish))
          .subscribe((data: Driver) => {
            this.loadDataByPage(this.pageCurrent);
          });
        // const maxIndex = [...this.dataOriginal].sort((a: any, b:any) => b.id - a.id)[0].id + 1;
        // this.dataOriginal.push({id: maxIndex, nombre: response.nombre});
        // this.loadDataByPage();
      }
    });
  }

  download() {
    this.driverUsecase.list()
    .pipe(takeUntil(this.obsFinish))
    .subscribe((response: Driver[]) => {
      this.utilService.openSheet(response, 'Listado de pilotos', 'pilotos');
    });
  }

  loadDataByPage(page: number) {
    this.driverUsecase
      .getPage(page)
      .pipe(takeUntil(this.obsFinish))
      .subscribe((data: ResultPage) => {
        this.data = data.records;
        this.totalRecords = data.totalRecords;
      });

    // this.data = this.dataOriginal.slice(this.pageCurrent*this.pageSize, this.pageCurrent*this.pageSize+this.pageSize);
  }
}
