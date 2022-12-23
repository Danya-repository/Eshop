import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { BasketService } from 'src/app/shared/services/basket.service';

@Component({
  selector: 'app-basket-button',
  templateUrl: './basket-button.component.html',
  styleUrls: ['./basket-button.component.scss']
})
export class BasketButtonComponent implements OnInit {

  countItem: number = 0;
  sub: Subscription = new Subscription();

  constructor(
    protected basketService: BasketService 
  ) { }

  ngOnInit(): void {
    this.sub = this.basketService.$basketStream.subscribe(state => {
      this.countItem = state.getProducts().length;
    })
  }

}
