import { Component } from '@angular/core';
import { ConfigLayout } from './config/interfaces/config-layout';
import { ConfigService } from './config/services/config.service';

@Component({
  selector: 'amb-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  expanded = true;
  config!: ConfigLayout;

  constructor(private readonly configService: ConfigService) {
    this.configService.configuration.subscribe((config: ConfigLayout) => {
      this.config = config;
    });
  }
  showExpand(expanded: boolean) {
    this.expanded = expanded;
  }
}
