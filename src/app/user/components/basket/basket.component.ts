import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {Subscription} from 'rxjs';
import {ProductInterface} from 'src/app/shared/models/product.interface';
import {BasketService} from 'src/app/shared/services/basket.service';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit, OnDestroy {

  products: ProductInterface[] = [];
  totalSum: number = 0;

  sub: Subscription = new Subscription()

  @Input() basketOpen!: boolean;
  @Output() openEmitter: EventEmitter<any> = new EventEmitter<any>();
  @Output() countEmitter: EventEmitter<number> = new EventEmitter<any>();

  constructor(
    protected basketService: BasketService
  ) {
  }

  ngOnInit(): void {
    this.products = this.getBasketProductsFromCookies();
    this.countEmitter.emit(this.products.length)
    this.sub = this.basketService.$basketStream.subscribe((product: ProductInterface) => {
      if (this.products.find(item => item.id === product.id)) {
        this.removeFromBasket(product);
      } else {
        this.products.push(product);
        this.setBasketProductsInCookies(product);
      }
      this.totalSum = this.products.reduce((acc: number, current: ProductInterface) => acc + current.price, 0)
      this.countEmitter.emit(this.products.length)
    })
  }

  private setBasketProductsInCookies(product: ProductInterface) {
    let productsInCookie = this.getBasketProductsFromCookies()
    if (!productsInCookie.find(item => item.id === product.id)) productsInCookie.push(product)

    document.cookie = `basketEshop=${JSON.stringify(productsInCookie)}`
  }

  private getBasketProductsFromCookies(): ProductInterface[] {
    let productsInCookies: ProductInterface[] = [];
    let productsJson = document.cookie?.match(`basketEshop`)?.input?.split('=')[1] || []
    if (typeof productsJson === "string") {
      productsInCookies = JSON.parse(productsJson);
    }
    return productsInCookies
  }

  private removeProductFromCookie(product: ProductInterface): void {
    let productsInCookies: ProductInterface[] = [];
    let index: number;
    let productsJson = document.cookie?.match(`basketEshop`)?.input?.split('=')[1] || []
    if (typeof productsJson === "string") {
      productsInCookies = JSON.parse(productsJson);
    }
    index = productsInCookies.indexOf(product);
    productsInCookies.splice(index, 1);
    document.cookie = `basketEshop=${JSON.stringify(productsInCookies)}`
  }

  buyProducts() {
    this.products = [];
    console.log('Товар куплен, Ура ДА!!!')
  }

  removeFromBasket(product: ProductInterface) {
    let index: number = this.products.indexOf(product);
    this.products.splice(index, 1);
    this.removeProductFromCookie(product);

    this.totalSum = this.products.reduce((acc: number, current: ProductInterface) => acc + current.price, 0)
    this.countEmitter.emit(this.products.length)
  }

  closeBasket() {
    this.openEmitter.emit()
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
