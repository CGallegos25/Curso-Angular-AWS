import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';

import { LoginModule } from 'projects/login/src/lib/login.module';
import { PageLoginComponent } from './views/pages/page-login/page-login.component';
import { HeaderComponent } from './views/components/header/header.component';
import { MenuComponent } from './views/components/menu/menu.component';
import { AuthOperationService } from './infraestructure/auth-operation.service';
import { StorageOperationService } from './infraestructure/storage-operation.service';
import { AuthRepository } from './application/auth.repository';
import { StorageRepository } from './application/storage.repository';
import { ToUpperPipe } from './pipe/to-upper.pipe';

@NgModule({
  declarations: [
    PageLoginComponent, HeaderComponent, MenuComponent, ToUpperPipe
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatMenuModule,
    MatListModule,
    RouterModule,
    LoginModule
  ],
  exports: [
    PageLoginComponent, HeaderComponent, MenuComponent
  ],
  providers: [
    { provide: AuthRepository, useClass: AuthOperationService },
    { provide: StorageRepository, useClass: StorageOperationService}
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class CoreModule { }
