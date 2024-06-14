import {Component, OnInit} from '@angular/core';
import {ToolbarModule} from "primeng/toolbar";
import {AvatarModule} from "primeng/avatar";
import {MenuItem, SharedModule} from "primeng/api";
import {NgOptimizedImage, NgStyle} from "@angular/common";
import {ButtonModule} from "primeng/button";
import {ImageModule} from "primeng/image";
import {Router, RouterLink} from "@angular/router";
import {TabMenuModule} from "primeng/tabmenu";
import {RippleModule} from "primeng/ripple";
import {JwtService} from "../../auth-reg/jwt.service";
import {AuthInterceptorService} from "../../auth-reg/auth-interceptor.service";

@Component({
  selector: 'app-top-bar',
  standalone: true,
  imports: [
    ToolbarModule,
    AvatarModule,
    SharedModule,
    NgOptimizedImage,
    ButtonModule,
    NgStyle,
    ImageModule,
    RouterLink,
    TabMenuModule,
    RippleModule
  ],
  providers: [JwtService],
  templateUrl: './top-bar.component.html',
  styleUrl: './top-bar.component.css'
})
export class TopBarComponent implements OnInit {

  authorized?: boolean;
  jwt?: string | null;

  constructor(private service: JwtService, private router: Router) {
  }

  ngOnInit() {
    this.jwt = sessionStorage.getItem('jwt');
    this.authorized = this.jwt != null && this.jwt != "";
  }

  logout() {
    this.service.logout();
    sessionStorage.removeItem('jwt');
    sessionStorage.removeItem('userId');
    this.router.navigate(['']).then(r => {
      window.location.reload();
    })
  }

  userProfile() {
    this.router.navigate(['profile', sessionStorage.getItem("userId")]).then(r => r);
  }

    protected readonly AuthInterceptorService = AuthInterceptorService;
}
