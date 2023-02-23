import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { MedicRepository } from '../application/medic-repository';
import { Observable } from 'rxjs';
import { ResultPage } from '../application/result-page';
import { environment } from 'projects/ambulance/src/environments/environment';
import { Medic } from '../domain/medic';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MedicService extends MedicRepository {

  constructor(private http: HttpClient) {
    super();
  }

  getPage(page: number): Observable<ResultPage> {
    return this.http
      .get<ResultPage>(
        `${environment.pathAPI}/medics/page/${page}/${environment.pageSize}`
      )
      .pipe(
        map((el: any) => {
          const { records, totalRecords } = el;
          return {
            records,
            totalRecords: totalRecords,
          };
        })
      );
  }

  delete(id: number): Observable<Medic> {
    return this.http
      .delete<Medic>(`${environment.pathAPI}/medics/${id}`)
      .pipe(
        map((el: any) => {
          return el;
        })
      );
  }

  update(id: number, medic: FormData): Observable<Medic> {
    return this.http
      .put<Medic>(`${environment.pathAPI}/medics/${id}`, medic)
      .pipe(
        map((el: any) => {
          return el;
        })
      );
  }

  list(): Observable<Medic[]> {
    return this.http.get<Medic>(`${environment.pathAPI}/medics`).pipe(
      map((el: any) => {
        return el;
      })
    );
  }

  insert(driver: FormData): Observable<Medic> {
    return this.http
      .post<Medic>(`${environment.pathAPI}/medics`, driver)
      .pipe(
        map((el: any) => {
          return el;
        })
      );
  }
}
