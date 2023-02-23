import { Injectable } from '@angular/core';
import { CanLoad, Router } from '@angular/router';
import { AuthUseCase } from '../../core/application/auth.usecase';
import { UtilService } from '../services/util.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuardService implements CanLoad {

  constructor(
    private authUseCase: AuthUseCase,
    private utilService: UtilService,
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
