import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { MenuService } from '../../services/menu.service';

@Component({
  selector: 'amb-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit {
  path: any;

  constructor(
    private menuService: MenuService,
    private activatedRoute: ActivatedRoute
  ) {
    const currentPath = '/' + this.activatedRoute.snapshot.pathFromRoot[1].routeConfig?.path;
    this.path = this.menuService.getDataPath(currentPath);
  }

  ngOnInit(): void {
  }

}
