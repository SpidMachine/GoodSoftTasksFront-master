import {Component, OnInit} from '@angular/core';
import {ImageModule} from "primeng/image";
import {CarouselModule} from "primeng/carousel";
import {CarouselPhoto} from "../domain/CarouselPhoto";
import {ProductService} from "../services/product.service";
import {TagModule} from "primeng/tag";
import {ButtonModule} from "primeng/button";
import {AnimateOnScrollModule} from "primeng/animateonscroll";

@Component({
  selector: 'app-main-container',
  standalone: true,
    imports: [
        ImageModule,
        CarouselModule,
        TagModule,
        ButtonModule,
        AnimateOnScrollModule
    ],
  templateUrl: './main-container.component.html',
  styleUrl: './main-container.component.css'
})
export class MainContainerComponent implements OnInit {
  products: CarouselPhoto[] | any;

  responsiveOptions: any[] | undefined;

  constructor(private productService: ProductService) {
  }

  ngOnInit() {
    this.productService.getProductsSmall().then((products) => {
      this.products = products;
    });

    this.responsiveOptions = [
      {
        breakpoint: '1199px',
        numVisible: 1,
        numScroll: 1
      },
      {
        breakpoint: '991px',
        numVisible: 2,
        numScroll: 1
      },
      {
        breakpoint: '767px',
        numVisible: 1,
        numScroll: 1
      }
    ];
  }
}
