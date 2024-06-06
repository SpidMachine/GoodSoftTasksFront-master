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

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    InputMaskModule,
    RouterLink
  ],
  providers: [JwtService],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {
  constructor(private service: JwtService, private router: Router) {
  }

  registerForm: FormGroup = new FormGroup({
    phoneNumber: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    confirmPassword: new FormControl('', [Validators.required]),
  })

  ngOnInit() {}

  submitForm() {
    // if (this.registerForm.value("password") != this.registerForm.value("confirmPassword")) {
    //   alert("Ошибка");
    // } else {
      console.log(this.registerForm.value);
      this.service.register(this.registerForm.value).subscribe(res => {
        // this.router.navigate(["/sign-in"]);
      })
    // }
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
