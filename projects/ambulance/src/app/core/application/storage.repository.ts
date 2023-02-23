export abstract class StorageRepository {
  abstract getStorage(nameProperty: string): string | null;
  abstract setStorage(nameProperty: string, value: string): void;
  abstract clearStorage(): void;
  abstract logout(): void;
  abstract getFieldInToken(fieldName: string): any;

}
