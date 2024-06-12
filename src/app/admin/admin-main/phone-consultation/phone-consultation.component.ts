import {Component, OnInit} from '@angular/core';
import {PhoneConsultationService} from "../../../services/phoneConsultation/phone-consultation.service";
import {PhoneConsultation} from "../../../domain/PhoneConsultation";
import {Observable} from "rxjs";
import {AsyncPipe} from "@angular/common";
import {AdminMainComponent} from "../admin-main.component";
import {TableModule} from "primeng/table";
import {FormsModule} from "@angular/forms";
import {ChipsModule} from "primeng/chips";

@Component({
  selector: 'app-phone-consultation',
  standalone: true,
  imports: [
    AsyncPipe,
    AdminMainComponent,
    TableModule,
    FormsModule,
    ChipsModule
  ],
  providers: [PhoneConsultationService],
  templateUrl: './phone-consultation.component.html',
  styleUrl: './phone-consultation.component.css'
})
export class PhoneConsultationComponent implements OnInit {
  public phoneConsultation$!: any[];

  searchValue: string | undefined;

  constructor(private service: PhoneConsultationService) {
  }

  ngOnInit() {
    this.service.getPhoneConsultationList().subscribe((res: any[]) => {
      this.phoneConsultation$ = res;
    })
  }
}
