import {Routes} from '@angular/router';
import {MainContainerComponent} from "./main-container/main-container.component";
import {AboutUsComponent} from "./about-us/about-us.component";
import {CreateUserComponent} from "./admin/admin-main/create-user/create-user.component";
import {EditUserComponent} from "./admin/admin-main/edit-user/edit-user.component";
import {RegisterComponent} from "./auth-reg/register/register.component";
import {AuthComponent} from "./auth-reg/auth/auth.component";
import {PoolMainComponent} from "./pool-main/pool-main.component";
import {IsLoggedGuardService} from "./guard/is-logged.guard";
import {CoachesComponent} from "./coaches/coaches.component";
import {PhoneConsultationComponent} from "./admin/admin-main/phone-consultation/phone-consultation.component";
import {UserListComponent} from "./admin/admin-main/user-list/user-list.component";
import {ProfileComponent} from "./profile/profile.component";
import {GymSectionComponent} from "./profile/gym-section/gym-section.component";

export const routes: Routes = [
    {
      path: "",
      component: MainContainerComponent
    },
    // {path: '**', component: MainContainerComponent},
    {
      path: 'aboutUs',
      component: AboutUsComponent
    },
    {
      path: 'admin',
      component: UserListComponent,
      canActivate: [IsLoggedGuardService]
    },
    {
      path: 'admin/saveUser',
      component: CreateUserComponent,
      canActivate: [IsLoggedGuardService]
    },
    {
      path: "admin/editUser/:id",
      component: EditUserComponent,
      canActivate: [IsLoggedGuardService]
    },
    {
      path: "register",
      component: RegisterComponent
    },
    {
      path: "sign-in",
      component: AuthComponent
    },
    {
      path: "register",
      component: RegisterComponent
    },
    {
      path: "swimming-pool",
      component: PoolMainComponent
    },
    {
      path: "coaches",
      component: CoachesComponent
    },
    {
      path: "phoneCons",
      component: PhoneConsultationComponent,
      canActivate: [IsLoggedGuardService]
    },
    {
      path: "profile/:id",
      component: ProfileComponent
    },
    {
      path: "prof/gym",
      component: GymSectionComponent
    }
  ]
;
