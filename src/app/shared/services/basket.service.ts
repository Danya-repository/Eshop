import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { BasketState } from 'src/app/user/components/plugins/basket/basket-state';
import { IProduct } from '../models/product.interface';

@Injectable({
  providedIn: 'root'
})
export class BasketService {

  state: BasketState = new BasketState();
  $basketStream: Subject<BasketState> = new Subject();

  constructor() { }

  getProducts(): IProduct[] {
    return this.state.getProducts();
  }

  basketToggle() {
    this.state.toggleBasket();
    this.$basketStream.next(this.state);
  }

  addProduct(product: IProduct) {
    this.state.addProduct(product);
    this.$basketStream.next(this.state);
  }

  removeProduct(product: IProduct) {
    this.state.removeProduct(product);
    this.$basketStream.next(this.state);
  }
}
