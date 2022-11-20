import { Component, OnInit } from '@angular/core';
import {ProductSliderMenuService} from "../../services/product-slider-menu.service";
import {TabStateInterface} from "../../models/tab-state.interface";

@Component({
  selector: 'app-product-slider-menu',
  templateUrl: './product-slider-menu.component.html',
  styleUrls: ['./product-slider-menu.component.scss']
})
export class ProductSliderMenuComponent implements OnInit {

  public state = [];

  constructor(private productSliderMenuService: ProductSliderMenuService) { }

  ngOnInit(): void {
    this.state = this.productSliderMenuService.getState;
  }

  public toggleActivate(button: TabStateInterface): void {
    this.productSliderMenuService.setActiveButton(button);
  }
}
