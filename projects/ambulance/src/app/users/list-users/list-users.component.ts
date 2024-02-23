import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { environment } from 'projects/ambulance/src/environments/environment';
import { MetaDataColumns } from '../../shared/interfaces/meta-data-columns';
import { User, UserNode } from '../domain/user';
import { UserUseCase } from '../application/user-use-case';
import { ResultPage, ResultPageNode } from '../application/result-page';
import { KeyButton } from '../../shared/interfaces/key-button';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { FormUserComponent } from '../form-user/form-user/form-user.component';
import { UtilService } from '../../shared/services/util.service';
import { UserModel } from '../models/user';
import { SpinnerService } from '../../shared/services/spinner.service';



@Component({
  selector: 'amb-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {

  data: UserNode[] = [];
  pageCurrent = 0;
  totalRecords = 0;
  pageSize = environment.pageSize;

  obsFinish = new Subject<any>();

  metadataColumns: MetaDataColumns[] = [
    { field: 'uid', title: "UID" },
    { field: 'nombre', title:'Nombre Completo'},
    { field: 'correo', title: 'Correo' },
    { field: 'estado', title: 'Activo' },
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

  isLoading: Subject<boolean> = this.spinnerService.isLoading;

  public fieldSet = false;

  constructor(
    private readonly dialog: MatDialog,
    private readonly userUseCase: UserUseCase,
    private readonly utilsService: UtilService,
    private spinnerService: SpinnerService
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

  openForm(data?: UserNode) {
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
          .subscribe(() =>
            this.loadDataByPage(this.pageCurrent)
          );
      } else {
        const user = { ...response };
        delete user.id;
        this.userUseCase
          .insert(user)
          .pipe(takeUntil(this.obsFinish))
          .subscribe(() =>
            this.loadDataByPage(this.pageCurrent)
          );
      }
    });
  }

  delete(row: UserNode) {
    // const obsResponse: Observable<string> = this.utilsService.confirm(
    //   '¿Está seguro de querer eliminar?'
    // );

    // obsResponse.subscribe((response) => {
    //   if (!response) {
    //     return;
    //   }

    //   this.userUseCase
    //     .delete(row.id)
    //     .pipe(takeUntil(this.obsFinish))
    //     .subscribe((data: User) => {
    //       this.loadDataByPage(0);
    //     });
    // });
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
      .subscribe((data: ResultPageNode) => {
        this.fieldSet = true;
        this.data = data.usuarios as UserNode[];
        this.totalRecords = data.total;
      });
  }

  ngOnDestroy() {
    this.obsFinish.next();
    this.obsFinish.complete();
  }
}
