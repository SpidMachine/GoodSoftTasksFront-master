import {Component} from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {JwtService} from "../jwt.service";
import {Router, RouterLink} from "@angular/router";
import {InputMaskModule} from "primeng/inputmask";

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    InputMaskModule,
    RouterLink
  ],
  providers: [JwtService],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})
export class AuthComponent {
  constructor(private service: JwtService, private router: Router) {
  }

  loginForm: FormGroup = new FormGroup({
    phoneNumber: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  })

  submitForm() {
    this.service.login(this.loginForm.value).subscribe(res => {
      if (res.jwtToken != null) {
        const jwt = res.jwtToken;
        console.log(jwt);
        sessionStorage.setItem('jwt', jwt);
        this.router.navigate(["/admin"]);
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
