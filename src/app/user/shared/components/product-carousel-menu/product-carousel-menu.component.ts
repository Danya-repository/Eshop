import {Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output} from '@angular/core';
import {ProductCarouselMenuService} from "../../../../shared/services/product-carousel-menu.service";
import {ButtonStateInterface} from "../../../../shared/models/buttonState.interface";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-product-carousel-menu',
  templateUrl: './product-carousel-menu.component.html',
  styleUrls: ['./product-carousel-menu.component.scss']
})
export class ProductCarouselMenuComponent implements OnInit, OnDestroy {

  state: ButtonStateInterface[] = [];
  carouselMenuStreamSub: Subscription = new Subscription();
  @Input() isLoad: boolean = false;

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
    if (this.isLoad) return
    this.productCarouselMenuService.$stream.next(button);
  }

  ngOnDestroy(): void {
    this.carouselMenuStreamSub.unsubscribe();
  }
}
