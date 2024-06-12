import { Component } from '@angular/core';
import {ButtonModule} from "primeng/button";
import {GMapsComponent} from "../parts/g-maps/g-maps.component";
import {ImageModule} from "primeng/image";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-pool-main',
  standalone: true,
    imports: [
        ButtonModule,
        GMapsComponent,
        ImageModule,
        RouterLink
    ],
  templateUrl: './pool-main.component.html',
  styleUrl: './pool-main.component.css'
})
export class PoolMainComponent {

}
