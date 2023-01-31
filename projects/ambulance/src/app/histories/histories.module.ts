import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HistoriesRoutingModule } from './histories-routing.module';
import { ListHistoriesComponent } from './list-histories/list-histories.component';
import { SharedModule } from '../shared/shared.module';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';


@NgModule({
  declarations: [
    ListHistoriesComponent
  ],
  imports: [
    CommonModule,
    HistoriesRoutingModule,
    SharedModule,
    MatIconModule,
    MatTableModule,
    MatButtonModule,
    MatTooltipModule
  ]
})
export class HistoriesModule { }
