import {ApplicationConfig} from '@angular/core';
import {provideRouter} from '@angular/router';

import {routes} from './app.routes';
import {provideAnimationsAsync} from '@angular/platform-browser/animations/async';
import {AuthInterceptorService} from "./auth-reg/auth-interceptor.service";
import {HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi} from "@angular/common/http";

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideAnimationsAsync(), provideHttpClient(
    withInterceptorsFromDi()
  ), {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true}]
};

