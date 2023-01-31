import { Observable } from "rxjs";
import { Driver } from "../domain/driver";
import { ResultPage } from "./result-page";

export abstract class DriverRepository {
  abstract getPage(page: number): Observable<ResultPage>;
  abstract delete(id: number): Observable<Driver>;
  abstract update(id: number, driver: Driver): Observable<Driver>;
  abstract list(): Observable<Driver[]>;
  abstract insert(driver: Driver): Observable<Driver>;
}
