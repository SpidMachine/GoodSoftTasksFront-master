import {Component} from '@angular/core';
import {TableModule} from "primeng/table";
import {UserService} from "../../services/user/user.service";
import {AsyncPipe, DatePipe} from "@angular/common";
import {UserListComponent} from "./user-list/user-list.component";
import {RouterLink} from "@angular/router";
import {CreateUserComponent} from "./create-user/create-user.component";

@Component({
  selector: 'app-admin-main',
  standalone: true,
  imports: [
    TableModule,
    AsyncPipe,
    DatePipe,
    UserListComponent,
    RouterLink,
    CreateUserComponent
  ],
  providers:[UserService],
  templateUrl: './admin-main.component.html',
  styleUrl: './admin-main.component.css'
})
export class AdminMainComponent {

}
