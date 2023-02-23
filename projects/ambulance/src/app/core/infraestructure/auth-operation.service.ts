import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import jwt_decode from "jwt-decode";

import { Auth } from '../domain/auth';
import { Token } from '../domain/token';
import { environment } from 'projects/ambulance/src/environments/environment';
import { AuthRepository } from '../application/auth.repository';
import { StorageRepository } from '../application/storage.repository';

@Injectable({
  providedIn: 'root',
})
export class AuthOperationService extends AuthRepository{

  constructor(
    private http: HttpClient,
    private readonly storage: StorageRepository
  ) {
    super();
  }

  login(auth: Auth): Observable<Token> {
    return this.http.post<Token>(`${environment.pathAPI}/users/login`, auth);
  }

  getNewAccesToken(refreshToken: string): Observable<Token> {
    return this.http.get<Token>(`${environment.pathAPI}/users/refresh/${refreshToken}`);
  }

  getRolesUser(): any {
    const roles = this.storage.getFieldInToken('roles');
    return roles;
  }
}
