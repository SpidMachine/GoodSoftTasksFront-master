import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor() { }

  getProductsData() {
    return [
      {
        image: '1.png',
      },
      {
        image: '2.png',
      },
      {
        image: '3.png',
      },
      {
        image: '4.png',
      },
      {
        image: 'z72_6773.jpg',
      },
    ]
  }

  getProductsMini() {
    return Promise.resolve(this.getProductsData().slice(0, 5));
  }

  getProductsSmall() {
    return Promise.resolve(this.getProductsData().slice(0, 10));
  }

  getProducts() {
    return Promise.resolve(this.getProductsData());
  }
}
