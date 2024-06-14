import {Component, OnInit} from '@angular/core';
import {UserService} from "../services/user/user.service";
import {ActivatedRoute} from "@angular/router";
import {Observable} from "rxjs";
import {User} from "../domain/User";

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [],
  providers: [UserService],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit {

  constructor(private service: UserService, private activatedRoute: ActivatedRoute) {
  }

  userId: string | null = '';
  user!: any;

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((data:any) => {
      this.userId = data.get("id");
      this.user = this.service.getUser(this.userId);
      this.user.subscribe((res: any) => {
        this.user = res;
      });
    })
  }
}
