import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

import { AuthUseCase } from '../../core/application/auth.usecase';

@Directive({
  selector: '[roles-allowed]',
})
export class RolesAllowedDirective {

  // Directiva estructural que nos va permite crear un contaier y un template
  // las directvas estrcutrales tienes esta estructura
  // <ng-container>
  //    <ng-template></ng-template>
  // </ng-container>
  @Input('roles-allowed') rolesAllowed: string[] = [];
  hasView = false;

  constructor(
    private readonly templateRef: TemplateRef<any>,
    private readonly viewContainerRef: ViewContainerRef,
    private readonly authUseCase: AuthUseCase
  ) { }

  ngOnInit(): void {
    console.log('Llega a la directiva y hace uso de la clase AuthUseCase  ');
    this.execute();
  }

  execute() {
    console.log('Llega a la directiva y hace uso de la clase AuthUseCase  ');
    const isUserLogged = this.authUseCase.getStatusUser();
    const rolesUser = this.authUseCase.getRolesUser();
    const lenghtRolesAllowed = this.rolesAllowed.length;
    console.log(this.rolesAllowed);

    let userAuthorized = false;

    for (let i = 0; i < lenghtRolesAllowed; i++) {
      if (rolesUser.indexOf(this.rolesAllowed[i]) > -1) {
        userAuthorized = true;
        break;
      }
    }

    if (isUserLogged && userAuthorized && !this.hasView) {
      this.viewContainerRef.createEmbeddedView(this.templateRef);
      // this.hasView = true;
    } else {
      this.viewContainerRef.clear();
      // this.hasView = false;
    }
  }
}
