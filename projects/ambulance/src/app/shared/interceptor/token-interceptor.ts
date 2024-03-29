import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injector, Injectable, InjectionToken, Inject } from '@angular/core';
import { Observable, throwError } from "rxjs";
import { catchError, finalize, mergeMap, retry } from "rxjs/operators";
import { AuthUseCase } from "../../core/application/auth.usecase";
import { Token } from '../../core/domain/token';
import { SpinnerService } from "../services/spinner.service";


@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(
    private injector: Injector,
    private spinnerService: SpinnerService
  ) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    if (req.url.includes('/users/login')) {
      return next.handle(req);
    } else if (req.url.includes('https://api.datos.gob.mx/v1/condiciones-atmosfericas') || req.url.includes('https://p7inv.sse.codesandbox.io/')) {
      return next.handle(req);
    }

    const authUseCase = this.injector.get(AuthUseCase);
    const accesToken = authUseCase.getStorage('x-token');
    const requestCloned = req.clone({
      headers: req.headers.append('Authorization', `${accesToken}`),
    });

    this.spinnerService.show();
    return next.handle(requestCloned).pipe(
      finalize(() => {
        setTimeout(() => {
          this.spinnerService.hide();
        }, 1500)
      })
    );

    // return next.handle(requestCloned).pipe(
    //   catchError((error: HttpErrorResponse) => {
    //     if (!(error.error instanceof ErrorEvent) && error.status === 409) {
    //       const refreshToken = authUseCase.getStorage('refreshToken');
    //       return authUseCase.getNewAccesToken(refreshToken || '').pipe(
    //         retry(3),
    //         mergeMap((response: Token) =>{
    //           authUseCase.setStorage('accessToken', response.accessToken);
    //           const newRequestClone = req.clone({
    //             headers: req.headers.append('Authorization', `Bearer ${response.accessToken}`)
    //           })

    //           return next.handle(newRequestClone);
    //         })
    //       )
    //     } else if (error.status === 401){
    //       return authUseCase.logout();
    //     } else {
    //       if(error.error && error.error.result) {
    //         return throwError(error.error.result);
    //       } else {
    //         return throwError(error);
    //       }
    //     }
    //   })
    // )
  }
}
