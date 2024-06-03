import {Component, Input, OnInit} from '@angular/core';
import {GoogleMap, MapMarker} from "@angular/google-maps";
import {NgForOf} from "@angular/common";
import {TableModule} from "primeng/table";
import {AnimateOnScrollModule} from "primeng/animateonscroll";
import {GMapsComponent} from "../parts/g-maps/g-maps.component";

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [
    GoogleMap,
    MapMarker,
    NgForOf,
    TableModule,
    AnimateOnScrollModule,
    GMapsComponent
  ],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css'
})
export class AboutUsComponent implements OnInit {

  ngOnInit() {
  }
}
