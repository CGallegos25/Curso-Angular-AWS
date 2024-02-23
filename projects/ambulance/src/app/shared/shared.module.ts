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
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { FlexLayoutModule } from '@angular/flex-layout';

import { NgScrollbarModule } from 'ngx-scrollbar';

import { WebcamModule } from 'ngx-webcam';

import { TitleComponent } from './components/title/title.component';
import { ContainerComponent } from './components/container/container.component';
import { TableComponent } from './components/table/table.component';
import { PaginatorComponent } from './components/paginator/paginator.component';
import { KeypadComponent } from './components/keypad/keypad.component';
import { ConfirmComponent } from './components/confirm/confirm.component';
import { DescargarComponent } from './components/descargar/descargar.component';
import { PhotoComponent } from './components/photo/photo.component';
import { UploadDirective } from './directives/upload.directive';
import { RolesAllowedDirective } from './directives/roles-allowed.directive';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';


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
    RolesAllowedDirective,
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
    MatSlideToggleModule,
    MatSnackBarModule,
    FlexLayoutModule,
    NgScrollbarModule,
    WebcamModule,
    MatProgressSpinnerModule
  ],
  exports: [
    TitleComponent,
    ContainerComponent,
    TableComponent,
    NgScrollbarModule,
    PaginatorComponent,
    KeypadComponent,
    MatDialogModule,
    ConfirmComponent,
    DescargarComponent,
    PhotoComponent,
    MatSnackBarModule,
    RolesAllowedDirective
  ],
})
export class SharedModule {}
