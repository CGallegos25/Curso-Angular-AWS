import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Route } from '@angular/router';

import { AuthUseCase } from '../../core/application/auth.usecase';
import { UtilService } from '../services/util.service';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationGuard implements CanActivate {
  constructor(private authUseCase: AuthUseCase, private utilService: UtilService) {}

  canActivate(
    route: ActivatedRouteSnapshot): boolean {
      const rolesAllowed = route.data?.rolesAllowed;
      const rolesUser = this.authUseCase.getRolesUser();
      const lenghtRolesAllowed = rolesAllowed.length;
      let userAuthorized = false;
      for (let i = 0; i < lenghtRolesAllowed; i++) {
          if(rolesUser.indexOf(rolesAllowed[i]) > -1){
            userAuthorized = true;
            break;
          }
      };

      if (!userAuthorized){
        this.utilService.notifier('No tiene permisos para este módulo');
      }
    return userAuthorized;
  }
}
