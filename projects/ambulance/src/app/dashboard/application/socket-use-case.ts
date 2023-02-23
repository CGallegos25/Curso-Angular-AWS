import { Injectable } from '@angular/core';
import { SocketRepository } from './socket-repository';
import { Entity } from '../domain/entity';
import { Observable } from 'rxjs';

@Injectable()
export class SocketUseCase {
  constructor(private socketRepository: SocketRepository) {}

  listen(eventName: string): Observable<Entity[]> {
    return this.socketRepository.listen(eventName);
  }
}
