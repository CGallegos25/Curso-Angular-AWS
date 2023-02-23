import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AtmosfericaRepository } from '../application/atmosferica-repository';
import { Observable } from 'rxjs';
import { AtmosfericasResultModel } from '../models/atmosfericas-model';
import { map } from 'rxjs/operators';
import { Atmosferica, Result } from '../domain/atmosferica';

@Injectable({
  providedIn: 'root'
})
export class AtmosfericaService extends AtmosfericaRepository{

  constructor(private http: HttpClient) {
    super();
  }

  getAll(): Observable<AtmosfericasResultModel[]>{
    return this.http.get<Atmosferica>
    (`https://api.datos.gob.mx/v1/condiciones-atmosfericas`)
    .pipe(map(( res => {
      return res['results'].map(atmos => AtmosfericasResultModel.AtmosfericaP(atmos));
    })));
  }

  getAllData(): Observable<Atmosferica> {
    return this.http.get<Atmosferica>(`https://api.datos.gob.mx/v1/condiciones-atmosfericas`);
  }

}
