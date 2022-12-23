import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IProduct } from 'src/app/shared/models/product.interface';
import { BasketService } from 'src/app/shared/services/basket.service';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit, OnDestroy {

  totalSumm: number = 0;
  basketOpen: boolean = true;
  products: IProduct[] = [];

  sub: Subscription = new Subscription()

  constructor(
    protected basketService: BasketService
  ) { }

  ngOnInit(): void {
    this.sub = this.basketService.$basketStream.subscribe(state => {
        this.totalSumm = state.getTotalPrice();
        this.products = state.getProducts();
        this.basketOpen = state.open;
    })
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  buyProducts() {
    console.log('Ура! Поздравляем с покупкой!');
  }

  basketToggle() {
    this.basketService.basketToggle();
  }

}
 