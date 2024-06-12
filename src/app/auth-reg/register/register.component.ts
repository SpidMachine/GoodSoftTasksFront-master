import {Component, OnInit} from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  ValidationErrors,
  ValidatorFn,
  Validators
} from "@angular/forms";
import {JwtService} from "../jwt.service";
import {InputMaskModule} from "primeng/inputmask";
import {Router, RouterLink} from "@angular/router";
import {ToastModule} from "primeng/toast";
import {ButtonModule} from "primeng/button";
import {MessageService} from "primeng/api";
import {RippleModule} from "primeng/ripple";
import {IsLoggedGuardService} from "../../guard/is-logged.guard";

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    InputMaskModule,
    RouterLink,
    ToastModule,
    ButtonModule,
    RippleModule
  ],
  providers: [JwtService, MessageService, IsLoggedGuardService],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {
  constructor(private service: JwtService, private router: Router, private messageService: MessageService) {
  }

  registerForm: FormGroup = new FormGroup({
    phoneNumber: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    confirmPassword: new FormControl('', [Validators.required]),
  })

  ngOnInit() {
  }

  submitForm() {
    this.service.register(this.registerForm.value).subscribe(res => {
      if (res.status == 0) {
        this.router.navigate(["/sign-in"]);
      } else if (res.status == 1) {
        this.messageService.add({
          severity: 'error',
          summary: 'Ошибка!',
          detail: 'Пользователь с таким номером телефона уже существует!',
          contentStyleClass: "pl-5"
        });
      }
    })
  }

  showSuccess() {
    this.messageService.add({severity: 'success', summary: 'Регистриция', detail: 'Вы успешно зарегистрировались на сайте!'});
  }

  showError() {
    this.messageService.add({ severity: 'error', summary: 'Ошибка', detail: 'Убедитесь, что вы соблюдили все условия регистрации'});
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
