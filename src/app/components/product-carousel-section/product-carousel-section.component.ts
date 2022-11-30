import {Component, Input, OnChanges, OnDestroy, OnInit} from "@angular/core";
import {ProductInterface} from "../../models/product.interface";
import {Subscription} from "rxjs";
import {ProductService} from "../../services/product.service";
import {ButtonStateInterface} from "../../models/buttonState.interface";
import {CarouselState} from "../plugins/carousel/carousel-state";
import {ProductCarouselSectionService} from "../../services/product-carousel-section.service";
import {CarouselService} from "../../services/carousel.service";
import {ProductCarouselMenuService} from "../../services/product-carousel-menu.service";

@Component({
  selector: 'app-product-carousel-section',
  templateUrl: './product-carousel-section.component.html',
  styleUrls: ['./product-carousel-section.component.scss'],
  providers: [ProductCarouselMenuService]
})
export class ProductCarouselSectionComponent implements OnInit, OnDestroy {

  @Input() titleSection = '';

  products: ProductInterface[] = [];
  productCarouselSectionSub: Subscription = new Subscription();

  constructor(
    protected productCarouselMenuService: ProductCarouselMenuService,
    protected productService: ProductService
  ) { }

  ngOnInit(): void {
    this.productCarouselSectionSub = this.productCarouselMenuService.$stream.subscribe((button: ButtonStateInterface) => {
      this.products = this.productService.getAll(button.identifier);
    })
  }

  ngOnDestroy(): void {
    this.productCarouselSectionSub.unsubscribe()
  }
}
