import {
  ActivatedRouteSnapshot,
  CanActivate,
  GuardResult,
  MaybeAsync,
  Router,
  RouterStateSnapshot
} from '@angular/router';
import {Injectable} from "@angular/core";
import {UserService} from "../services/user/user.service";


@Injectable({
  providedIn: 'root'
})
export class IsLoggedGuardService implements CanActivate {
  constructor(private service: UserService, private router: Router) {
  }

  adminRole = false;

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): MaybeAsync<GuardResult> {
    if (!this.service.isLoggedIn()) {
      this.router.navigate(['/sign-in']).then(r => r)
      return false;
    }

    this.service.getUser(sessionStorage.getItem("userId")).subscribe(res => {
      if (res.role == "ADMIN") {
        this.adminRole = true;
      }
    })

    return this.adminRole;
  }
}
