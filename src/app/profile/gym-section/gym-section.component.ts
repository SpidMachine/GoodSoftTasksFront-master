import { Component } from '@angular/core';
import {PaginatorModule} from "primeng/paginator";
import {ReactiveFormsModule} from "@angular/forms";
import {Router, RouterLink} from "@angular/router";

@Component({
  selector: 'app-gym-section',
  standalone: true,
    imports: [
        PaginatorModule,
        ReactiveFormsModule,
        RouterLink
    ],
  templateUrl: './gym-section.component.html',
  styleUrl: './gym-section.component.css'
})
export class GymSectionComponent {

  constructor(private router: Router) {
  }

  userProfile() {
    this.router.navigate(['profile', sessionStorage.getItem("userId")]).then(r => r);
  }
}
