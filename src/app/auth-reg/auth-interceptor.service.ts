import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (sessionStorage.getItem("jwt")) {
      const reqWithHeader = req.clone({
        headers: req.headers.set('Authorization', 'Bearer ' + sessionStorage.getItem("jwt")),
      });
      return next.handle(reqWithHeader);
    }
    return next.handle(req);
  }
}
