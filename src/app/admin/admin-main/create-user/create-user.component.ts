import { Component } from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {User} from "../../../domain/User";
import {UserService} from "../../../services/user/user.service";
import {Router, RouterLink} from "@angular/router";
import {HttpClient, HttpClientModule} from "@angular/common/http";

@Component({
  selector: 'app-create-user',
  standalone: true,
  imports: [
    FormsModule, HttpClientModule, ReactiveFormsModule, RouterLink
  ],
  providers: [UserService],
  templateUrl: './create-user.component.html',
  styleUrl: './create-user.component.css'
})
export class CreateUserComponent {
  createUserForm: FormGroup = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    password: new FormControl(''),
    email: new FormControl(''),
    birthday: new FormControl(''),
    gender: new FormControl(''),
    phoneNumber: new FormControl('')
  })

  constructor(private userService: UserService, private router: Router) {
  }

  onSubmit() {
    const obj = this.createUserForm.value;
    this.userService.save(obj).subscribe(res => {
      this.toGoUserList();
    })
  }

  toGoUserList() {
    this.router.navigate(['admin'])
  }
}
