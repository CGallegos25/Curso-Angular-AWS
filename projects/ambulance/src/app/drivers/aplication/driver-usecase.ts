import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { DriverRepository } from './driver-repository';

import { Driver } from "../domain/driver";
import { ResultPage } from './result-page';

@Injectable()
export class DriverUsecase {
  constructor(private driverRepository: DriverRepository) { }

  list(): Observable<Driver[]> {
    return this.driverRepository.list();
  }

  getPage(page: number): Observable<ResultPage> {
    return this.driverRepository.getPage(page);
  }

  update(id: number, driver: Driver): Observable<Driver> {
    return this.driverRepository.update(id, driver);
  }

  delete(id: number): Observable<Driver> {
    return this.driverRepository.delete(id);
  }

  insert(driver: Driver): Observable<Driver> {
    return this.driverRepository.insert(driver);
  }
}
