import {Component, Input, OnInit} from '@angular/core';
import {ProductInterface} from "../../../shared/models/product.interface";

@Component({
  selector: 'app-admin-product-card',
  templateUrl: './admin-product-card.component.html',
  styleUrls: ['./admin-product-card.component.scss']
})
export class AdminProductCardComponent implements OnInit {

  @Input() productData!: ProductInterface

  public characteristicsIsShow: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleShowCharacteristic() {
    this.characteristicsIsShow = !this.characteristicsIsShow;
  }
}
