import {Routes} from '@angular/router';
import {MainContainerComponent} from "./main-container/main-container.component";
import {AboutUsComponent} from "./about-us/about-us.component";
import {AdminMainComponent} from "./admin/admin-main/admin-main.component";

export const routes: Routes = [
  {
    path: "gym-VitGTK",
    component: MainContainerComponent
  },
  // { path: '**', component: PageNotFoundComponent }
  {
    path: '', redirectTo: '/gym-VitGTK', pathMatch: 'full'
  },
  {
    path: 'aboutUs',
    component: AboutUsComponent
  },
  {
    path: 'admin',
    component: AdminMainComponent
  }
];
