import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Auth } from './core/interface/auth.interface';

@Component({
  selector: 'ambc-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  @ViewChild('email') email!: ElementRef;
  @ViewChild('password') password!: ElementRef;
  @Output() onLogin = new EventEmitter<Auth>();

  authI !: Auth ;
  hide = true;
  formGroupTS: FormGroup;

  constructor() {
    this.formGroupTS  = new FormGroup({
      correo: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
      recaptchaReactive: new FormControl('6LeRPMEbAAAAADTBlAFZKARcauOITChlVGqpCDZo', Validators.required)
    });
   }

  ngOnInit(): void {
  }

  setValueUser(): Auth {
    // this.authI = {
    //   correo: this.formGroupTS.get('correo')?.value,
    //   password: this.formGroupTS.get('password')?.value,
    //   recaptchaReactive: []
    // }
    // return this.authI;

    return this.formGroupTS.value;
  }

  submitLogin(): void {
    const objUser = this.setValueUser();
    this.onLogin.emit(objUser);
  }

}
