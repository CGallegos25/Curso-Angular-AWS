import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import * as io from 'socket.io-client';

import { SocketRepository } from '../application/socket-repository';
import { Entity } from '../domain/entity';

@Injectable()
export class SocketService extends SocketRepository {

  socket: any;

  constructor() {
    super();
  }

  listen(eventName: string): Observable<Entity[]> {
    this.socket = io.connect('https://p7inv.sse.codesandbox.io/');
    return new Observable((observer) => {
      this.socket.on(eventName, (result: any) => {
        observer.next(result);
      });
    });
  }
}
