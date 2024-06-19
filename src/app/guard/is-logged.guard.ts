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
export class IsLoggedGuardService implements  CanActivate {
  constructor(private service: UserService, private router: Router) {
  }


  // adminCheck() {
  //   let adminRole = false;
  //
  //   this.service.getUser(sessionStorage.getItem("userId")).subscribe(res => {
  //     adminRole = res.role == "ADMIN";
  //   })
  //   return adminRole;
  // }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): MaybeAsync<GuardResult> {
    if (!this.service.isLoggedIn()) {
      this.router.navigate(['/sign-in']).then(r => r)
      return false;
    }

    return true;
  }
}
