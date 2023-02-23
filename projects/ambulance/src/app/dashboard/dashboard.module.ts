import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { AtmosfericaUseCaseService } from './application/atmosferica-use-case.service';
import { AtmosfericaRepository } from './application/atmosferica-repository';
import { AtmosfericaService } from './infraestructure/atmosferica.service';
import { AtmosfericaComponent } from './atmosferica/atmosferica.component';
import { SocketComponent } from './socket/socket.component';
import { SocketUseCase } from './application/socket-use-case';
import { SocketRepository } from './application/socket-repository';
import { SocketService } from './infraestructure/socket.service';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [
    DashboardComponent,
    AtmosfericaComponent,
    SocketComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
    NgxChartsModule,
    FlexLayoutModule

  ],
  providers: [
    AtmosfericaUseCaseService,
    SocketUseCase,
    { provide: AtmosfericaRepository, useClass: AtmosfericaService },
    { provide: SocketRepository, useClass: SocketService}
  ]
})
export class DashboardModule { }
