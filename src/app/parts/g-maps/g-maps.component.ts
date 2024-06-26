import {Component, OnInit} from '@angular/core';
import {GoogleMap, MapMarker} from "@angular/google-maps";
import {NgForOf} from "@angular/common";
import {TableModule} from "primeng/table";
import {AnimateOnScrollModule} from "primeng/animateonscroll";

@Component({
  selector: 'app-g-maps',
  standalone: true,
    imports: [
      GoogleMap,
      MapMarker,
      NgForOf,
      TableModule,
      AnimateOnScrollModule
    ],
  templateUrl: './g-maps.component.html',
  styleUrl: './g-maps.component.css'
})
export class GMapsComponent implements OnInit {
  zoom = 12;
  center: google.maps.LatLngLiteral = {
    lat: 55.211360242581144,
    lng: 30.22936735277609
  };
  options: google.maps.MapOptions = {
    mapTypeId: 'hybrid',
    zoomControl: true,
    scrollwheel: false,
    center: {
      lat: 55.211360242581144,
      lng: 30.22936735277609
    },
    disableDoubleClickZoom: false,
    maxZoom: 20,
    minZoom: 1,
  };

  marker = {
    pos: {
      lng: 30.229469423235308,
      lat: 55.21131656527302
    },
    text: 'Качалка ВитГТК',
    options: {
      animation: google.maps.Animation.BOUNCE,
    },
  };

  ngOnInit() {
  }
}
