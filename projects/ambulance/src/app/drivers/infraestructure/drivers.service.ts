import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from 'projects/ambulance/src/environments/environment';
import { DriverRepository } from '../aplication/driver-repository';
import { ResultPage } from '../aplication/result-page';
import { Driver } from '../domain/driver';

@Injectable({
  providedIn: 'root',
})
export class DriversService extends DriverRepository {
  constructor(private http: HttpClient) {
    super();
  }

  getPage(page: number): Observable<ResultPage> {
    return this.http
      .get<ResultPage>(
        `${environment.pathAPI}/drivers/page/${page}/${environment.pageSize}`
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

  delete(id: number): Observable<Driver> {
    return this.http
      .delete<Driver>(`${environment.pathAPI}/drivers/${id}`)
      .pipe(
        map((el: any) => {
          return el;
        })
      );
  }

  update(id: number, driver: Driver): Observable<Driver> {
    return this.http
      .put<Driver>(`${environment.pathAPI}/drivers/${id}`, driver)
      .pipe(
        map((el: any) => {
          return el;
        })
      );
  }

  list(): Observable<Driver[]> {
    return this.http.get<Driver>(`${environment.pathAPI}/drivers`).pipe(
      map((el: any) => {
        return el;
      })
    );
  }

  insert(driver: Driver): Observable<Driver> {
    return this.http
      .post<Driver>(`${environment.pathAPI}/drivers`, driver)
      .pipe(
        map((el: any) => {
          return el;
        })
      );
  }
}
