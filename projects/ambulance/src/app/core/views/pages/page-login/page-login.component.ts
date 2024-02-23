import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { ConfigService } from 'projects/ambulance/src/app/config/services/config.service';

import { Auth, AuthNode } from '../../../domain/auth';
import { Token, TokenNode } from '../../../domain/token';
import { AuthUseCase } from '../../../application/auth.usecase';

@Component({
  selector: 'amb-page-login',
  templateUrl: './page-login.component.html',
  styleUrls: ['./page-login.component.css']
})
export class PageLoginComponent implements OnInit {

  subscription !: Subscription;

  constructor(
    private configService: ConfigService,
    private authUseCase: AuthUseCase,
    private router: Router
  ) {
    this.configService.configuration = {
      layout: {
        header: {
          hidden: true
        },
        menu: {
          hidden: true
        }
      }
    }
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    this.configService.configuration = {
      layout: {
        header: {
          hidden: false
        },
        menu: {
          hidden: false
        }
      }
    };
  }

  login(auth: Auth) {
    // this.subscription = this.authUseCase.login(auth).subscribe((response: Token) => {
    //   console.log(response);
    //   this.authUseCase.setStorage('accessToken', response.accessToken);
    //   this.authUseCase.setStorage('refreshToken', response.refreshToken);
    //   this.router.navigate(['/dashboard']);
    // });

    const authNode: AuthNode = {
      correo: auth.correo,
      password: auth.password
    }
    this.subscription = this.authUseCase.loginNode(authNode).subscribe((response: TokenNode) => {
      console.log(response);
      this.authUseCase.setStorage('x-token', response.token);
      // this.authUseCase.setStorage('refreshToken', response.refreshToken);
      this.router.navigate(['/dashboard']);
    });
  }
}
