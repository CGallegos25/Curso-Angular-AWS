import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { User } from '../domain/user';
import { UserModel } from '../models/user';
import { ResultPage, ResultPageNode } from './result-page';
import { UserRepository } from './user-repository';

@Injectable()
export class UserUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  list(): Observable<User[]> {
    return this.userRepository.list();
  }

  listUserMap(): Observable<UserModel[]> {
    return this.userRepository.listUserMap();
  }

  getPage(page: number): Observable<ResultPageNode> {
    return this.userRepository.getPage(page);
  }

  update(id: number, user: Partial<User>): Observable<User> {
    return this.userRepository.update(id, user);
  }

  delete(id: number): Observable<User> {
    return this.userRepository.delete(id);
  }

  insert(user: Partial<User>): Observable<User> {
    return this.userRepository.insert(user);
  }
}
