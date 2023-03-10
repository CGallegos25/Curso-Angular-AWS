import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ConfigLayout } from '../interfaces/config-layout';
import { CONFIG_TOKEN } from '../tokens';
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  private configSubject: BehaviorSubject<ConfigLayout>;

  constructor(@Inject(CONFIG_TOKEN) config: ConfigLayout) {
    this.configSubject = new BehaviorSubject<ConfigLayout>(config);
  }

  set configuration(value: any) {
    let config = this.configSubject.getValue();
    config = _.merge({}, config, value);
    this.configSubject.next(config);
  }

  get configuration(): any {
    return this.configSubject.asObservable();
  }

}
