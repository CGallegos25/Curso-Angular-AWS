import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import jwt_decode from "jwt-decode";

import { Auth, AuthNode } from '../domain/auth';
import { Token, TokenNode } from '../domain/token';
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

  loginNode(authNode: AuthNode): Observable<TokenNode> {
    return this.http.post<TokenNode>(`${environment.pathAPINode}/api/auth/login`, authNode);
  }

  getNewAccesToken(refreshToken: string): Observable<Token> {
    return this.http.get<Token>(`${environment.pathAPI}/users/refresh/${refreshToken}`);
  }

  getRolesUser(): any {
    console.log(this.storage.getFieldInToken('rol'));
    const roles = this.storage.getFieldInToken('rol');
    return roles;
  }
}
