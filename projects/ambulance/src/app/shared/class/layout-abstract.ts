import { ConfigService } from '../../config/services/config.service';
import { Injectable } from '@angular/core';

export abstract class LayoutAbstract {

  constructor(private readonly configService: ConfigService) {
    this.configService.configuration = {
      layout: {
        header: { hidden: false},
        menu: { hidden: false}
      }
    }
  }
}
