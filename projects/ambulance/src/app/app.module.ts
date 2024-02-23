import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';

import { AppComponent } from './app.component';
import { LoginModule } from '../../../login/src/lib/login.module';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { CommonModule } from '@angular/common';
import { IconService } from './shared/services/icon.service';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { MatPaginatorIntl } from '@angular/material/paginator';
import { Paginator } from './shared/class/paginator';
import { ConfigModule } from './config/modules/config.module';
import { AMB_CONFIG } from './config/constants/config.constant';
import { TokenInterceptor } from './shared/interceptor/token-interceptor';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    CommonModule,
    HttpClientModule,
    LoginModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatSidenavModule,
    MatIconModule,
    NgScrollbarModule,
    ConfigModule.forRoot(AMB_CONFIG),
    SharedModule
  ],
  providers: [
    { provide: MatPaginatorIntl, useClass: Paginator },
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private iconService: IconService) {}
}
