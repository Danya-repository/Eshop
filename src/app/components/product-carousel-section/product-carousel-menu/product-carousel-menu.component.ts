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

  @Input() public state: ButtonStateInterface[] = [];
  @Output() toggleEmitter: EventEmitter<ButtonStateInterface> = new EventEmitter<ButtonStateInterface>()
  carouselMenuStreamSub: Subscription = new Subscription();

  constructor() { }

  ngOnInit(): void {}

  public toggleActivate(button: ButtonStateInterface): void {
    this.toggleEmitter.emit(button);
  }

  ngOnDestroy(): void {
    this.carouselMenuStreamSub.unsubscribe();
  }
}
