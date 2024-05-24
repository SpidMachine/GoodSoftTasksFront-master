import {Component, OnInit} from '@angular/core';
import {ToolbarModule} from "primeng/toolbar";
import {AvatarModule} from "primeng/avatar";
import {MenuItem, SharedModule} from "primeng/api";
import {NgOptimizedImage, NgStyle} from "@angular/common";
import {ButtonModule} from "primeng/button";
import {ImageModule} from "primeng/image";
import {RouterLink} from "@angular/router";
import {TabMenuModule} from "primeng/tabmenu";
import {RippleModule} from "primeng/ripple";

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
  templateUrl: './top-bar.component.html',
  styleUrl: './top-bar.component.css'
})
export class TopBarComponent implements OnInit{

  ngOnInit() {
  }
}
