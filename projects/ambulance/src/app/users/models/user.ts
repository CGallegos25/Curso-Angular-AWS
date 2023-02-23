import { User } from "../domain/user";

export class UserModel {

  static userDJ (obj: User) {
    return new UserModel(
      obj['id'],
      obj['nombre'],
      obj['correo']
    )
  }
  constructor(
    public id: number,
    public nombre: string,
    public correo: string,
  ) {}
}
