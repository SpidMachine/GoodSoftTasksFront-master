import { Component } from '@angular/core';
import {ImageModule} from "primeng/image";
import {RouterLink} from "@angular/router";
import {ToolbarModule} from "primeng/toolbar";

@Component({
  selector: 'app-footer-bar',
  standalone: true,
  imports: [
    ImageModule,
    RouterLink,
    ToolbarModule
  ],
  templateUrl: './footer-bar.component.html',
  styleUrl: './footer-bar.component.css'
})
export class FooterBarComponent {

}
