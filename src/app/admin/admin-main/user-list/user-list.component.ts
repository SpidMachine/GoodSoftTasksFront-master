import {Component, OnInit} from '@angular/core';
import {AsyncPipe, DatePipe} from "@angular/common";
import {Observable} from "rxjs";
import {User} from "../../../domain/User";
import {UserService} from "../../../services/user/user.service";
import {Router, RouterLink} from "@angular/router";
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from "@angular/material/icon";
import {MatDividerModule} from "@angular/material/divider";

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
  ],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent implements OnInit {
  public users$?: Observable<User[]>;

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit() {
    this.users$ = this.userService.getUsers();
  }

  userDel(id?: string) {
    this.userService.delete(id).subscribe(res => {
      this.ngOnInit();
    });
  }

  userEdit(id?: string) {
    this.router.navigate(['admin/editUser', id])
  }

  toGoUserList() {
    this.router.navigate(['/admin'])
  }
}
