import {Component} from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from "primeng/inputtext";
import {FormsModule} from "@angular/forms";
import {TopBarComponent} from "./toolBars/top-bar/top-bar.component";
import {MainContainerComponent} from "./main-container/main-container.component";
import {FooterBarComponent} from "./toolBars/footer-bar/footer-bar.component";
import {GoogleMapsModule} from '@angular/google-maps';
import {AnimateOnScrollModule} from 'primeng/animateonscroll';
import {UserService} from "./services/user/user.service";
import {HttpClientModule} from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    ButtonModule,
    InputTextModule,
    FormsModule,
    TopBarComponent,
    MainContainerComponent,
    FooterBarComponent,
    GoogleMapsModule,
    AnimateOnScrollModule,
    HttpClientModule,

  ],
  providers: [UserService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'GoodSoftTasksFront';
}
