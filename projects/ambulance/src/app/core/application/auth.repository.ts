import { Observable } from "rxjs";
import { Auth, AuthNode } from "../domain/auth";
import { Token, TokenNode } from "../domain/token";

export abstract class AuthRepository {
  abstract login(auth: Auth): Observable<Token>;
  abstract loginNode(auth: AuthNode): Observable<TokenNode>;
  abstract getNewAccesToken(refreshToken: string): Observable<Token>;
  abstract getRolesUser(): string[];
}
