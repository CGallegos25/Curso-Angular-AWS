import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';

import { ConfirmComponent } from '../components/confirm/confirm.component';
import { DescargarComponent } from '../components/descargar/descargar.component';
import { OptionsExport } from '../interfaces/options-export';

@Injectable()
export class UtilService {

  constructor(
    private readonly dialog: MatDialog,
    private readonly bottomSheet: MatBottomSheet
  ) { }

  confirm(message: string = ''): Observable<string> {
    const reference: MatDialogRef<ConfirmComponent> = this.dialog.open(ConfirmComponent, {
      disableClose: true,
      width: '320px'
    });

    if(message) {
      reference.componentInstance.message = message;
    }

    return reference.afterClosed()
  }

  openModal(classComponent: any, options: {[s: string]: string | boolean | number | object | null | undefined}): MatDialogRef<any>{
    return this.dialog.open(classComponent, options)
  }

  openSheet(content: any = null, title: string, fileName: string) {
    const options: OptionsExport = { content, title, fileName };
    this.bottomSheet.open(DescargarComponent, { data: options });
  }
}
