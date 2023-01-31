import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Auth } from '../domain/auth';
import { Token } from '../domain/token';
import { environment } from 'projects/ambulance/src/environments/environment';
import { AuthRepository } from '../application/auth.repository';

@Injectable({
  providedIn: 'root',
})
export class AuthOperationService extends AuthRepository{

  constructor(
    private http: HttpClient
  ) {
    super();
  }

  login(auth: Auth): Observable<Token> {
    return this.http.post<Token>(`${environment.pathAPI}/users/login`, auth);
  }

  getNewAccesToken(refreshToken: string): Observable<Token> {
    return this.http.get<Token>(`${environment.pathAPI}/users/refresh/${refreshToken}`);
  }
}
