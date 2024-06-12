import { Component } from '@angular/core';
import {ButtonModule} from "primeng/button";
import {DialogModule} from "primeng/dialog";
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {InputMaskModule} from "primeng/inputmask";
import {ToastModule} from "primeng/toast";
import {PhoneConsultationService} from "../../services/phoneConsultation/phone-consultation.service";
import {Router, RouterLink} from "@angular/router";
import {MessageService} from "primeng/api";

@Component({
  selector: 'app-modal-coach-phone-cons',
  standalone: true,
  imports: [
    ButtonModule,
    DialogModule,
    FormsModule,
    InputMaskModule,
    ReactiveFormsModule,
    ToastModule,
    RouterLink
  ],
  templateUrl: './modal-coach-phone-cons.component.html',
  styleUrl: './modal-coach-phone-cons.component.css'
})
export class ModalCoachPhoneConsComponent {
  visible = false;

  public showDialog() {
    this.visible = true;
  }

  constructor(private service: PhoneConsultationService, private router: Router, private messageService: MessageService) {
  }

  phoneConsultationForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    phoneNumber: new FormControl('', [Validators.required]),
  })

  submitForm() {
    this.service.save(this.phoneConsultationForm.value).subscribe(res => {
      this.visible = false;
      this.messageService.add({
        severity: 'error',
        summary: 'Ошибка!',
        detail: 'Пользователь с таким номером телефона не найден',
        contentStyleClass: "pl-5"
      });
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
