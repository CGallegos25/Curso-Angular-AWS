import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Medic } from '../domain/medic';
import { MedicRepository } from './medic-repository';
import { ResultPage } from './result-page';

@Injectable()
export class MedicUsecase {
  constructor(private readonly medicRepository: MedicRepository) {}

  list(): Observable<Medic[]> {
    return this.medicRepository.list();
  }

  getPage(page: number): Observable<ResultPage> {
    return this.medicRepository.getPage(page);
  }

  update(id: number, medic: Medic): Observable<Medic> {
    return this.medicRepository.update(id, medic);
  }

  delete(id: number): Observable<Medic> {
    return this.medicRepository.delete(id);
  }

  insert(medic: Medic): Observable<Medic> {
    return this.medicRepository.insert(medic);
  }
}
