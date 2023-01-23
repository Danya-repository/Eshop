import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ProductInterface} from "../../../shared/models/product.interface";

@Component({
  selector: 'app-basket-product',
  templateUrl: './basket-product.component.html',
  styleUrls: ['./basket-product.component.scss']
})
export class BasketProductComponent implements OnInit {
  image: any;
  text: any = 'sfads'
  @Input() productData: ProductInterface = {name: "", price: 0, type: "", available: true};
  @Output() removeEmitter: EventEmitter<ProductInterface> = new EventEmitter<ProductInterface>()

  constructor() { }

  ngOnInit(): void {}

  openImage($event: MouseEvent) {}

  removeFromBasket() {
    this.removeEmitter.emit()
  }
}
