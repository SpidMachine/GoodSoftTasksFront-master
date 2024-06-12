import {Component, OnInit} from '@angular/core';
import {PhoneConsultationService} from "../../../services/phoneConsultation/phone-consultation.service";
import {PhoneConsultation} from "../../../domain/PhoneConsultation";
import {Observable} from "rxjs";
import {AsyncPipe} from "@angular/common";
import {AdminMainComponent} from "../admin-main.component";

@Component({
  selector: 'app-phone-consultation',
  standalone: true,
  imports: [
    AsyncPipe,
    AdminMainComponent
  ],
  providers: [PhoneConsultationService],
  templateUrl: './phone-consultation.component.html',
  styleUrl: './phone-consultation.component.css'
})
export class PhoneConsultationComponent implements OnInit {
  public phoneConsultation$?: Observable<PhoneConsultation[]>

  constructor(private service: PhoneConsultationService) {
  }

  ngOnInit() {
    this.phoneConsultation$ = this.service.getPhoneConsultationList();
  }
}
