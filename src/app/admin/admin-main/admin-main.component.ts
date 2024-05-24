import {Component, OnInit, ViewChild} from '@angular/core';
import {Table, TableModule} from "primeng/table";
import {User} from "../../domain/User";
import {UserService} from "../../services/user/user.service";
import {SortEvent} from "primeng/api";

@Component({
  selector: 'app-admin-main',
  standalone: true,
  imports: [
    TableModule
  ],
  providers:[UserService],
  templateUrl: './admin-main.component.html',
  styleUrl: './admin-main.component.css'
})
export class AdminMainComponent implements OnInit {
  users!: User[];

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService
  }
}
