import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { PageLoginComponent } from './core/views/pages/page-login/page-login.component';
import { AuthenticationGuardService } from './shared/guards/authentication-guard.service';

const routes: Routes = [
  { path: '', component: PageLoginComponent },
  {
    path: 'dashboard',
    canLoad: [AuthenticationGuardService],
    loadChildren: () =>
      import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
  },
  {
    path: 'drivers',
    canLoad: [AuthenticationGuardService],
    loadChildren: () =>
      import('./drivers/drivers.module').then((m) => m.DriversModule),
  },
  {
    path: 'histories',
    canLoad: [AuthenticationGuardService],
    loadChildren: () =>
      import('./histories/histories.module').then((m) => m.HistoriesModule)
  },
  {
    path: 'medics',
    canLoad: [AuthenticationGuardService],
    loadChildren: () =>
      import('./medics/medics.module').then((m) => m.MedicsModule)
  },
  {
    path: 'users',
    canLoad: [AuthenticationGuardService],
    loadChildren: () =>
      import('./users/users.module').then((u) => u.UsersModule)
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
