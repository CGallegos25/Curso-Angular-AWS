import { Injectable } from '@angular/core';
import { AtmosfericaRepository } from './atmosferica-repository';
import { Observable } from 'rxjs';
import { AtmosfericasResultModel } from '../models/atmosfericas-model';
import { Atmosferica } from '../domain/atmosferica';

@Injectable()
export class AtmosfericaUseCaseService {

  constructor(private readonly atmosfericaRepository: AtmosfericaRepository) { }

  getAll(): Observable<AtmosfericasResultModel[]> {
    return this.atmosfericaRepository.getAll();
  }

  getAllData(): Observable<Atmosferica> {
    return this.atmosfericaRepository.getAllData();
  }
}
