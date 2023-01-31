import { Observable } from "rxjs";
import { Medic } from "../domain/medic";
import { ResultPage } from "./result-page";

export abstract class MedicRepository {
  abstract getPage(page: number): Observable<ResultPage>;
  abstract delete(id: number): Observable<Medic>;
  abstract update(id: number, medic: Medic): Observable<Medic>;
  abstract list(): Observable<Medic[]>;
  abstract insert(medic: Medic): Observable<Medic>;
}
