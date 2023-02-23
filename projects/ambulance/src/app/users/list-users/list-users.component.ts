import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { environment } from 'projects/ambulance/src/environments/environment';
import { MetaDataColumns } from '../../shared/interfaces/meta-data-columns';
import { User } from '../domain/user';
import { UserUseCase } from '../application/user-use-case';
import { ResultPage } from '../application/result-page';
import { KeyButton } from '../../shared/interfaces/key-button';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { FormUserComponent } from '../form-user/form-user/form-user.component';
import { UtilService } from '../../shared/services/util.service';
import { UserModel } from '../models/user';



@Component({
  selector: 'amb-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {

  data: User[] = [];
  pageCurrent = 0;
  totalRecords = 0;
  pageSize = environment.pageSize;

  obsFinish = new Subject<any>();

  metadataColumns: MetaDataColumns[] = [
    { field: 'id', title: "ID" },
    { field: 'nombre', title:'Nombre Completo'},
    { field: 'correo', title: 'Correo' },
    { field: 'activo', title: 'Activo' },
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
    private readonly dialog: MatDialog,
    private readonly userUseCase: UserUseCase,
    private readonly utilsService: UtilService
  ) {
    this.loadDataByPage(0);
  }

  ngOnInit(): void {

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

  openForm(data?: User) {
    const reference: MatDialogRef<FormUserComponent> =
      this.utilsService.openModal(FormUserComponent, {
        disableClose: true,
        panelClass: 'container-modal',
        data,
      });

    reference.afterClosed().subscribe((response) => {
      if (!response) {
        return;
      }

      if (response.id) {
        const user = { ...response };
        delete user.id;
        if (!user.password.trim()) {
          delete user.password;
        }
        this.userUseCase
          .update(response.id, user)
          .pipe(takeUntil(this.obsFinish))
          .subscribe((data: User) =>
            this.loadDataByPage(this.pageCurrent)
          );
      } else {
        const user = { ...response };
        delete user.id;
        this.userUseCase
          .insert(user)
          .pipe(takeUntil(this.obsFinish))
          .subscribe((data: User) =>
            this.loadDataByPage(this.pageCurrent)
          );
      }
    });
  }

  delete(row: User) {
    const obsResponse: Observable<string> = this.utilsService.confirm(
      '¿Está seguro de querer eliminar?'
    );

    obsResponse.subscribe((response) => {
      if (!response) {
        return;
      }

      this.userUseCase
        .delete(row.id)
        .pipe(takeUntil(this.obsFinish))
        .subscribe((data: User) => {
          this.loadDataByPage(0);
        });
    });
  }

  download() {
    this.userUseCase
      .listUserMap()
      .pipe(takeUntil(this.obsFinish))
      .subscribe((response: UserModel[]) => {
        console.log(response);
        this.utilsService.openSheet(
          response,
          'Listado de usuarios',
          'usuarios'
        );
      });
  }

  loadDataByPage(page: number) {
    this.userUseCase
      .getPage(page)
      .pipe(takeUntil(this.obsFinish))
      .subscribe((data: ResultPage) => {
        this.data = data.records as User[];
        this.totalRecords = data.totalRecords;
      });
  }

  ngOnDestroy() {
    this.obsFinish.next();
    this.obsFinish.complete();
  }
}
