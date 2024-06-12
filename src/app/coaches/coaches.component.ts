import { Component } from '@angular/core';
import {GMapsComponent} from "../parts/g-maps/g-maps.component";
import {ImageModule} from "primeng/image";
import {RouterLink} from "@angular/router";
import {ModalCoachPhoneConsComponent} from "../parts/modal-coach-phone-cons/modal-coach-phone-cons.component";
import {MessageService} from "primeng/api";

@Component({
  selector: 'app-coaches',
  standalone: true,
  imports: [
    GMapsComponent,
    ImageModule,
    RouterLink,
    ModalCoachPhoneConsComponent
  ],
  providers: [MessageService],
  templateUrl: './coaches.component.html',
  styleUrl: './coaches.component.css'
})
export class CoachesComponent {

}
