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
import {Router, RouterLink} from "@angular/router";
import {ScrollTopModule} from "primeng/scrolltop";
import {ModalPhoneConsultationComponent} from "../parts/modal-phone-consultation/modal-phone-consultation.component";
import {MessageService} from "primeng/api";
import {DialogModule} from "primeng/dialog";
import {InputMaskModule} from "primeng/inputmask";
import {PaginatorModule} from "primeng/paginator";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {ToastModule} from "primeng/toast";
import {PhoneConsultationService} from "../services/phoneConsultation/phone-consultation.service";


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
        DialogModule,
        InputMaskModule,
        PaginatorModule,
        ReactiveFormsModule,
        ToastModule,
    ],
  providers: [
    UserService, MessageService
  ],
  templateUrl: './main-container.component.html',
  styleUrl: './main-container.component.css'
})
export class MainContainerComponent implements OnInit {
  public users$?: Observable<User[]>;
  visible = false;

  public showDialog() {
    this.visible = true;
  }

  constructor(private service: PhoneConsultationService, private router: Router, private messageService: MessageService) {
  }

  ngOnInit() {
    // this.users$ = this.userService.getUsers();
  }

  phoneConsultationForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    phoneNumber: new FormControl('', [Validators.required]),
    status: new FormControl("Ждет ответа"),
    timeRegistration: new FormControl(new Date()),
  })

  submitForm() {
    this.service.save(this.phoneConsultationForm.value).subscribe(res => {
      this.visible = false;
      this.messageService.add({
        severity: 'success',
        summary: 'Успешно!',
        detail: 'Вы успешно оставили заявку на нашем сайте',
        contentStyleClass: "pl-5"
      });
    })
  }

  inputStyles = {
    'background-color': '#333',
    'color': '#fff',
    'width': '100%',
    'padding': '1% 2%',
    'outline': '0',
    'font-size': '25px',
    'font-weight': 'bold',
    'border': '1px solid rgba(105, 105, 105, 0.397)',
    'border-radius': '10px',
  }
}
