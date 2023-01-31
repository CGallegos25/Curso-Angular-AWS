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
    const accessToken = this.getStorage('accessToken');
    if (!accessToken) return '';

    try {
      const payload: any = jwt_decode(accessToken);
      return payload[fieldName];
    } catch (error) {
      return '';
    }
  }
}
