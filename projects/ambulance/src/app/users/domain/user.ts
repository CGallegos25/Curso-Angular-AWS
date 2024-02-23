export interface User {
  id: number;
  nombre: string;
  correo: string;
  password: string;
  refreshToken: string;
  activo: boolean;
  roles: Roles[]
}

interface Roles {
  id: number;
  rol: Rol;
  activo: boolean;
}

export enum Rol {
  Admin = "ADMIN",
  Medic = "MEDIC",
  Operator = "OPERATOR",
}

export interface UserNode {
  nombre: string,
  correo: string,
  rol: string,
  estado: boolean,
  google: boolean,
  uid: string
}
