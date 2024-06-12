import { Component } from '@angular/core';
import {GMapsComponent} from "../parts/g-maps/g-maps.component";
import {ImageModule} from "primeng/image";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-coaches',
  standalone: true,
  imports: [
    GMapsComponent,
    ImageModule,
    RouterLink
  ],
  templateUrl: './coaches.component.html',
  styleUrl: './coaches.component.css'
})
export class CoachesComponent {

}
