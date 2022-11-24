import {Component, OnDestroy, OnInit} from "@angular/core";
import {ProductInterface} from "../../models/product.interface";
import {Subscription} from "rxjs";
import {ProductService} from "../../services/product.service";
import {ProductCarouselMenuService} from "../../services/product-carousel-menu.service";
import {ProductCarouselService} from "../../services/product-carousel.service";

@Component({
  selector: 'app-product-carousel-section',
  templateUrl: './product-carousel-section.component.html',
  styleUrls: ['./product-carousel-section.component.scss']
})

export class ProductCarouselSectionComponent implements OnInit, OnDestroy {

  products: ProductInterface[] = [];
  productCarouselMenuSub: Subscription = new Subscription();

  constructor(
    private productService: ProductService,
    private productCarouselMenuService: ProductCarouselMenuService,
    private productCarouselService: ProductCarouselService
  ) { }

  ngOnInit(): void {
    this.productCarouselMenuSub = this.productCarouselMenuService.$carouselMenuStream.subscribe((button) => {
      this.products = this.productService.getAll(button.identifier);
    })
  }

  ngOnDestroy(): void {
    this.productCarouselMenuSub.unsubscribe()
  }

}
