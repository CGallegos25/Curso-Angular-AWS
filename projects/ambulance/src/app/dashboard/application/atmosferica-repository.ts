import { Observable } from "rxjs";
import { Atmosferica } from "../domain/atmosferica";
import { AtmosfericasResultModel } from '../models/atmosfericas-model';

export abstract class AtmosfericaRepository {
  abstract getAll(): Observable<AtmosfericasResultModel[]>;
  abstract getAllData(): Observable<Atmosferica>;
}
