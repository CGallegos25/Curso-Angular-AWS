import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Router } from '@angular/router';

import { AuthRepository } from './auth.repository';
import { StorageRepository } from './storage.repository';

import { Auth } from '../domain/auth';
import { Token } from '../domain/token';

@Injectable(
  { providedIn: 'root' }
)
export class AuthUseCase {
  constructor(
    private authRepository: AuthRepository,
    private storageRepository: StorageRepository,
    private router: Router){
  }

  login(auth: Auth): Observable<Token> {
    return this.authRepository.login(auth);
  }

  logout(): Observable<any> {
    this.storageRepository.clearStorage();
    this.router.navigate(['']);
    return of();
  }

  setStorage(nameProperty:  string, value: string): void {
    this.storageRepository.setStorage(nameProperty, value);
  }

  getStorage(nameProperty: string): string | null {
    return this.storageRepository.getStorage(nameProperty);
  }

  clearStorage(): void {
    this.storageRepository.clearStorage();
  }

  getStatusUser(): boolean {
    return !! this.storageRepository.getStorage('accessToken');
  }

  getFieldInToken(fieldName: string): string | null {
    return this.storageRepository.getFieldInToken(fieldName);
  }

  getNewAccesToken(refreshToken: string): Observable<Token> {
    return this.authRepository.getNewAccesToken(refreshToken);
  }
}
