import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';

import { DriversRoutingModule } from './drivers-routing.module';
import { ListDriversComponent } from './list-drivers/list-drivers.component';
import { SharedModule } from '../shared/shared.module';
import { FormDriverComponent } from './form-driver/form-driver.component';

import { DriverRepository } from './aplication/driver-repository';
import { DriversService } from './infraestructure/drivers.service';
import { DriverUsecase } from './aplication/driver-usecase';


@NgModule({
  declarations: [
    ListDriversComponent,
    FormDriverComponent
  ],
  imports: [
    CommonModule,
    DriversRoutingModule,
    SharedModule,
    MatIconModule,
    MatTableModule,
    MatButtonModule,
    MatTooltipModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    FlexLayoutModule,
    ReactiveFormsModule
  ],
  providers: [
    { provide: DriverRepository, useClass: DriversService },
    DriverUsecase
  ]
})
export class DriversModule { }
