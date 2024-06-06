import { Component } from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {User} from "../../../domain/User";
import {UserService} from "../../../services/user/user.service";
import {Router, RouterLink} from "@angular/router";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {InputMaskModule} from "primeng/inputmask";

@Component({
  selector: 'app-create-user',
  standalone: true,
    imports: [
        FormsModule, HttpClientModule, ReactiveFormsModule, RouterLink, InputMaskModule
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

  inputStyles = {
    'background-color': '#333',
    'color': '#fff',
    'width': '100%',
    'padding': '1% 2%',
    'outline': '0',
    'font-size': '25px',
    'font-weight': 'bold',
    'border': '1px solid rgba(105, 105, 105, 0.397)',
    'border-radius': '10px',
  }
}
