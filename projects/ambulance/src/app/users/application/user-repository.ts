import { Observable } from "rxjs";
import { User } from "../domain/user";
import { UserModel } from "../models/user";
import { ResultPage } from "./result-page";

export abstract class UserRepository {
  abstract getPage(page: number): Observable<ResultPage>;
  abstract delete(id: number): Observable<User>;
  abstract update(id: number, user: Partial<User>): Observable<User>;
  abstract list(): Observable<User[]>;
  abstract listUserMap(): Observable<UserModel[]>;
  abstract insert(medic: Partial<User>): Observable<User>;
}
