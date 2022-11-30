import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {ProductCarouselMenuService} from "../../../services/product-carousel-menu.service";
import {ButtonStateInterface} from "../../../models/buttonState.interface";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-product-carousel-menu',
  templateUrl: './product-carousel-menu.component.html',
  styleUrls: ['./product-carousel-menu.component.scss']
})
export class ProductCarouselMenuComponent implements OnInit, OnDestroy {

  state: ButtonStateInterface[] = [];
  carouselMenuStreamSub: Subscription = new Subscription();

  constructor(
    protected productCarouselMenuService: ProductCarouselMenuService
  ) {}

  ngOnInit(): void {
    this.carouselMenuStreamSub = this.productCarouselMenuService.$stream.subscribe((button) => {
      this.productCarouselMenuService.activateButtonOfCarouselMenu(button)
      this.state = this.productCarouselMenuService.getState;
    })
  }

  public toggleActivate(button: ButtonStateInterface): void {
    this.productCarouselMenuService.activateButtonOfCarouselMenu(button)
  }

  ngOnDestroy(): void {
    this.carouselMenuStreamSub.unsubscribe();
  }
}
