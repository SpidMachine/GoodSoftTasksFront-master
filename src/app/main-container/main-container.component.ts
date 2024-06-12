import {Component, OnInit} from '@angular/core';
import {ImageModule} from "primeng/image";
import {CarouselModule} from "primeng/carousel";
import {CarouselPhoto} from "../domain/CarouselPhoto";
import {ProductService} from "../services/product.service";
import {TagModule} from "primeng/tag";
import {ButtonModule} from "primeng/button";
import {AnimateOnScrollModule} from "primeng/animateonscroll";
import {Observable} from "rxjs";
import {User} from "../domain/User";
import {UserService} from "../services/user/user.service";
import {AboutUsComponent} from "../about-us/about-us.component";
import {GMapsComponent} from "../parts/g-maps/g-maps.component";
import {RouterLink} from "@angular/router";
import {ScrollTopModule} from "primeng/scrolltop";
import {ModalPhoneConsultationComponent} from "../parts/modal-phone-consultation/modal-phone-consultation.component";
import {MessageService} from "primeng/api";


@Component({
  selector: 'app-main-container',
  standalone: true,
  imports: [
    ImageModule,
    CarouselModule,
    TagModule,
    ButtonModule,
    AnimateOnScrollModule,
    AboutUsComponent,
    GMapsComponent,
    RouterLink,
    ScrollTopModule,
    ModalPhoneConsultationComponent,
  ],
  providers: [
    UserService, MessageService
  ],
  templateUrl: './main-container.component.html',
  styleUrl: './main-container.component.css'
})
export class MainContainerComponent implements OnInit {
  public users$?: Observable<User[]>;


  constructor(private productService: ProductService, private userService: UserService) {
  }


  ngOnInit() {
    this.users$ = this.userService.getUsers();
  }
}
