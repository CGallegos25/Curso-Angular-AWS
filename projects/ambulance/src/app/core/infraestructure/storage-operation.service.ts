import { Injectable } from "@angular/core";
import jwt_decode from "jwt-decode";

@Injectable({
  providedIn: 'root',
})
export class StorageOperationService {

  constructor() { }

  setStorage(namePropertie: string, value: string): void {
    sessionStorage.setItem(namePropertie, value);
  }

  getStorage(namePropertie: string): string | null{
    return sessionStorage.getItem(namePropertie);
  }

  clearStorage(): void {
    sessionStorage.clear();
  }

  getFieldInToken(fieldName: string): any {
    const accessToken = this.getStorage('x-token');
    if (!accessToken) return '';

    try {
      const { usuario }: any = jwt_decode(accessToken);
      return usuario[fieldName];
    } catch (error) {
      return '';
    }
  }
}
