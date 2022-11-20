import {Component, OnInit, Output, EventEmitter, OnDestroy} from '@angular/core';
import {ProductService} from "../../services/product.service";
import {Subscription} from "rxjs";
import {ProductInterface} from "../../models/product.interface";
import {TabStateInterface} from "../../models/tab-state.interface";
import {ProductSliderMenuService} from "../../services/product-slider-menu.service";

@Component({
  selector: 'app-product-slider',
  templateUrl: './product-slider.component.html',
  styleUrls: ['./product-slider.component.scss']
})
export class ProductSliderComponent implements OnInit, OnDestroy {

  sub: Subscription | undefined;
  sliderItems: ProductInterface[] | undefined;

  constructor(
    private productService: ProductService,
    private productSliderMenuService: ProductSliderMenuService
  ) { }

  ngOnInit(): void {
    this.sub = this.productService.getAll().subscribe(response => {
      this.sliderItems = response;
    })
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe()
  }

}
