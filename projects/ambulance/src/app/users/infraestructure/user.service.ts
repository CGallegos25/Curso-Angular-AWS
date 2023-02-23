import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { ResultPage } from '../application/result-page';
import { environment } from 'projects/ambulance/src/environments/environment';
import { User } from '../domain/user';
import { UserModel } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getPage(page: number): Observable<ResultPage> {
    return this.http.get<ResultPage>
    (`${environment.pathAPI}/users/page/${page}/${environment.pageSize}`)
    .pipe(
      map((el: any) => {
        const { records, totalRecords} = el;
        return {
          records,
          totalRecords
        }
      })
    );
  }

  delete(id: number): Observable<User> {
    return this.http
      .delete<User>(`${environment.pathAPI}/users/${id}`)
      .pipe(
        map((el: any) => {
          return el as User;
        })
      );
  }

  update(id: number, user: Partial<User>): Observable<User> {
    const userResponse = user;
    return this.http
      .put<User>(`${environment.pathAPI}/users/${id}`, userResponse)
      .pipe(
        map((el: any) => {
          return el as User;
        })
      );
  }

  list(): Observable<User[]> {
    return this.http.get<User[]>(`${environment.pathAPI}/users`).pipe(
      map((el: any) => {
        return el;
      })
    );
  }

  listUserMap(): Observable<UserModel[]> {
    return this.http.get<User[]>(`${environment.pathAPI}/users`).pipe(
      map(( res => {
        return res.map( user => UserModel.userDJ(user));
      })
    ));
  }

  insert(user: Partial<User>): Observable<User> {
    const userResponse = user;
    return this.http
      .post<User>(`${environment.pathAPI}/users`, userResponse)
      .pipe(
        map((el: any) => {
          return el as User;
        })
      );
  }
}
