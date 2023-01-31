import { Observable } from "rxjs";
import { Auth } from "../domain/auth";
import { Token } from "../domain/token";

export abstract class AuthRepository {
  abstract login(auth: Auth): Observable<Token>;
  abstract getNewAccesToken(refreshToken: string): Observable<Token>;
}
