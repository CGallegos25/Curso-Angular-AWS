import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MedicsRoutingModule } from './medics-routing.module';
import { ListMedicsComponent } from './list-medics/list-medics.component';
import { SharedModule } from '../shared/shared.module';

import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MedicRepository } from './application/medic-repository';
import { MedicService } from './infraectructure/medic.service';
import { MedicUsecase } from './application/medic-usecase';
import { FormMedicComponent } from './form-medic/form-medic.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [
    ListMedicsComponent,
    FormMedicComponent
  ],
  imports: [
    CommonModule,
    MedicsRoutingModule,
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
    { provide: MedicRepository, useClass: MedicService },
    MedicUsecase
  ]
})
export class MedicsModule { }
