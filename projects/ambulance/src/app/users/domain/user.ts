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
