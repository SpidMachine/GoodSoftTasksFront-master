import {Component, OnInit} from '@angular/core';
import {GMapsComponent} from "../parts/g-maps/g-maps.component";
import {ImageModule} from "primeng/image";
import {RouterLink} from "@angular/router";
import {ModalCoachPhoneConsComponent} from "../parts/modal-coach-phone-cons/modal-coach-phone-cons.component";
import {MessageService} from "primeng/api";
import {CoachService} from "../services/coach/coach.service";
import {PhotoService} from "../services/photo/photo.service";
import {Photo} from "../domain/Photo";

@Component({
  selector: 'app-coaches',
  standalone: true,
  imports: [
    GMapsComponent,
    ImageModule,
    RouterLink,
    ModalCoachPhoneConsComponent
  ],
  providers: [MessageService, CoachService, PhotoService],
  templateUrl: './coaches.component.html',
  styleUrl: './coaches.component.css'
})
export class CoachesComponent implements OnInit {
  coaches!: any[];

  constructor(private service: CoachService) {
  }

  ngOnInit() {
    this.service.getCoaches().subscribe((res: any[]) => {
      this.coaches = res;
    })
  }
}
