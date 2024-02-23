export interface Token {
  accessToken: string;
  refreshToken: string
}

export interface TokenNode {
  usuario: Usuario,
  token: string
}

interface Usuario {
  nombre: string,
  correo: string,
  rol: string,
  estado: boolean,
  google: boolean,
  uid: string
}
