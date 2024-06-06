import {Routes} from '@angular/router';
import {MainContainerComponent} from "./main-container/main-container.component";
import {AboutUsComponent} from "./about-us/about-us.component";
import {AdminMainComponent} from "./admin/admin-main/admin-main.component";
import {CreateUserComponent} from "./admin/admin-main/create-user/create-user.component";
import {EditUserComponent} from "./admin/admin-main/edit-user/edit-user.component";
import {CrudAdminComponent} from "./crud-admin/crud-admin.component";
import {RegisterComponent} from "./auth-reg/register/register.component";
import {AuthComponent} from "./auth-reg/auth/auth.component";

export const routes: Routes = [
    {
      path: "",
      component: MainContainerComponent
    },
    // { path: '**', component: PageNotFoundComponent }
    {
      path: 'aboutUs',
      component: AboutUsComponent
    },
    {
      path: 'admin',
      component: AdminMainComponent,
    },
    {
      path: 'admin/saveUser',
      component: CreateUserComponent
    },
    {
      path: "admin/editUser/:id",
      component: EditUserComponent
    },
    {
      path: "adminka",
      component: CrudAdminComponent
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
    }
  ]
;
