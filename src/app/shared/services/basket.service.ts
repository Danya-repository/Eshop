import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { BasketState } from 'src/app/user/components/plugins/basket/basket-state';
import { ProductInterface } from '../models/product.interface';

@Injectable({
  providedIn: 'root'
})
export class BasketService {

  state: BasketState = new BasketState();
  $basketStream: Subject<ProductInterface> = new Subject();

  constructor() { }

  // getProducts(): ProductInterface[] {
  //   return this.state.getProducts();
  // }

  addProduct(product: ProductInterface) {
    this.$basketStream.next(product);
  }
  //
  removeProduct(product: ProductInterface) {
    this.$basketStream.next(product);
  }
}
