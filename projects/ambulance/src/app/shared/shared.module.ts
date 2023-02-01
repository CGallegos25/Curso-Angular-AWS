import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialogModule } from '@angular/material/dialog';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatListModule } from '@angular/material/list';

import { FlexLayoutModule } from '@angular/flex-layout';

import { NgScrollbarModule } from 'ngx-scrollbar';

import { TitleComponent } from './components/title/title.component';
import { ContainerComponent } from './components/container/container.component';
import { TableComponent } from './components/table/table.component';
import { PaginatorComponent } from './components/paginator/paginator.component';
import { KeypadComponent } from './components/keypad/keypad.component';
import { ConfirmComponent } from './components/confirm/confirm.component';
import { UtilService } from './services/util.service';
import { DescargarComponent } from './components/descargar/descargar.component';
import { PhotoComponent } from './components/photo/photo.component';
import { UploadDirective } from './directives/upload.directive';
import { PropertiesComponent } from './components/properties/properties.component';

@NgModule({
  declarations: [
    TitleComponent,
    ContainerComponent,
    TableComponent,
    PaginatorComponent,
    KeypadComponent,
    ConfirmComponent,
    DescargarComponent,
    PhotoComponent,
    UploadDirective,
    PropertiesComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule,
    MatButtonModule,
    MatTooltipModule,
    MatDialogModule,
    MatBottomSheetModule,
    MatListModule,
    FlexLayoutModule,
    NgScrollbarModule
  ],
  exports: [TitleComponent, ContainerComponent, TableComponent, NgScrollbarModule, PaginatorComponent, KeypadComponent, MatDialogModule, ConfirmComponent, DescargarComponent, PhotoComponent, PropertiesComponent],
  providers: [
    UtilService
  ]
})
export class SharedModule { }
