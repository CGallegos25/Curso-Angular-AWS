import { Injectable } from '@angular/core';
import { CanLoad, Router } from '@angular/router';
import { AuthUseCase } from '../../core/application/auth.usecase';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuardService implements CanLoad {

  constructor(
    private authUseCase: AuthUseCase,
    private readonly router: Router
  ) { }

  canLoad(): boolean {
    const status = this.authUseCase.getStatusUser();
    if (!status) {
      this.router.navigate(['/']);
    }

    return status;
  }
}
