import {Component} from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {JwtService} from "../jwt.service";
import {Router, RouterLink} from "@angular/router";
import {InputMaskModule} from "primeng/inputmask";
import {MessageService} from "primeng/api";
import {ToastModule} from "primeng/toast";
import {IsLoggedGuardService} from "../../guard/is-logged.guard";

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    InputMaskModule,
    RouterLink,
    ToastModule
  ],
  providers: [JwtService, MessageService, IsLoggedGuardService],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})
export class AuthComponent {
  constructor(private service: JwtService, private router: Router, private messageService: MessageService) {
  }

  loginForm: FormGroup = new FormGroup({
    phoneNumber: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  })

  checkJwt() {
    sessionStorage.removeItem("jwt");
  }

  submitForm() {
    this.service.login(this.loginForm.value).subscribe(res => {
      if (res.jwtToken != null && res.status == 1000) {
        const jwt = res.jwtToken;
        sessionStorage.setItem('jwt', jwt);
        sessionStorage.setItem('userId', res.userId);
        this.router.navigate(["/admin"]).then(r => {
          window.location.reload();
        });
      } else if (res.status == 1001) {
        this.messageService.add({
          severity: 'error',
          summary: 'Ошибка!',
          detail: 'Пользователь с таким номером телефона не найден',
          contentStyleClass: "pl-5"
        });
      } else if (res.status == 1002) {
        this.messageService.add({
          severity: 'error',
          summary: 'Ошибка!',
          detail: 'Неправильный логин или пароль',
          contentStyleClass: "pl-5"
        });
      }
    })
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
