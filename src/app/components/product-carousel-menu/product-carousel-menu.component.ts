import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {ProductCarouselMenuService} from "../../services/product-carousel-menu.service";
import {ButtonStateInterface} from "../../models/buttonState.interface";
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
    private productCarouselMenuService: ProductCarouselMenuService
  ) { }

  ngOnInit(): void {
    this.state = this.productCarouselMenuService.getState;
    this.carouselMenuStreamSub = this.productCarouselMenuService.$carouselMenuStream.subscribe((button) => {
      this.productCarouselMenuService.activateButtonOfCarouselMenu(button)
    });
  }

  public toggleActivate(button: ButtonStateInterface): void {
    this.productCarouselMenuService.$carouselMenuStream.next(button)
  }

  ngOnDestroy(): void {
    this.carouselMenuStreamSub.unsubscribe();
  }
}
