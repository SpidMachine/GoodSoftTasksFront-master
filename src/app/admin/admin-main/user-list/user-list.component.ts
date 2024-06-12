import {Component, OnInit} from '@angular/core';
import {AsyncPipe, DatePipe} from "@angular/common";
import {Observable} from "rxjs";
import {User} from "../../../domain/User";
import {UserService} from "../../../services/user/user.service";
import {Router, RouterLink} from "@angular/router";
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from "@angular/material/icon";
import {MatDividerModule} from "@angular/material/divider";
import {IsLoggedGuardService} from "../../../guard/is-logged.guard";
import {AdminMainComponent} from "../admin-main.component";
import {Table, TableModule} from "primeng/table";
import {InputIconModule} from "primeng/inputicon";
import {IconFieldModule} from "primeng/iconfield";
import {ChipsModule} from "primeng/chips";
import {FormsModule} from "@angular/forms";
import {ButtonModule} from "primeng/button";

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [
    AsyncPipe,
    DatePipe,
    RouterLink,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    AdminMainComponent,
    TableModule,
    InputIconModule,
    IconFieldModule,
    ChipsModule,
    FormsModule,
    ButtonModule,
  ],
  providers: [IsLoggedGuardService, UserService],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent implements OnInit {
  users$!: any[];

  searchValue: string | undefined;

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit() {
    this.userService.getUsers().subscribe((res: any[]) => {
      this.users$ = res;
    })
  }

  userDel(id?: string) {
    this.userService.delete(id).subscribe(res => {
      this.ngOnInit();
    });
  }

  userEdit(id?: string) {
    this.router.navigate(['admin/editUser', id])
  }
}
