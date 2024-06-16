import {Component, OnInit} from '@angular/core';
import {GMapsComponent} from "../parts/g-maps/g-maps.component";
import {ImageModule} from "primeng/image";
import {Router, RouterLink} from "@angular/router";
import {ModalCoachPhoneConsComponent} from "../parts/modal-coach-phone-cons/modal-coach-phone-cons.component";
import {MessageService} from "primeng/api";
import {CoachService} from "../services/coach/coach.service";
import {PhotoService} from "../services/photo/photo.service";
import {Photo} from "../domain/Photo";
import {ButtonModule} from "primeng/button";
import {DialogModule} from "primeng/dialog";
import {InputMaskModule} from "primeng/inputmask";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {ToastModule} from "primeng/toast";
import {PhoneConsultationService} from "../services/phoneConsultation/phone-consultation.service";

@Component({
  selector: 'app-coaches',
  standalone: true,
    imports: [
        GMapsComponent,
        ImageModule,
        RouterLink,
        ModalCoachPhoneConsComponent,
        ButtonModule,
        DialogModule,
        InputMaskModule,
        ReactiveFormsModule,
        ToastModule
    ],
  providers: [MessageService, CoachService, PhotoService],
  templateUrl: './coaches.component.html',
  styleUrl: './coaches.component.css'
})
export class CoachesComponent implements OnInit {
  coaches!: any[];
  visible = false;
  nameOfCoach = "";

  constructor(
    private service: PhoneConsultationService,
    private router: Router,
    private messageService: MessageService,
    private coachService: CoachService) {
  }

  ngOnInit() {
    this.coachService.getCoaches().subscribe((res: any[]) => {
      this.coaches = res;
    })
  }

  public showDialog() {
    this.visible = true;
  }

  phoneConsultationForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    phoneNumber: new FormControl('', [Validators.required]),
    coachName: new FormControl('asdd'),
    status: new FormControl("Ждет ответа")
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
