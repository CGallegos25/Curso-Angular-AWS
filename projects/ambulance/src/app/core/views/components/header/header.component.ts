import { Component, OnInit } from '@angular/core';

import { AuthUseCase } from '../../../application/auth.usecase';

@Component({
  selector: 'amb-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  userName: string | null;

  constructor(
    private authUseCase: AuthUseCase
  ) {
    this.userName = this.authUseCase.getFieldInToken('name');
   }

  ngOnInit(): void {
  }

  logout() {
    this.authUseCase.logout();
  }

}
