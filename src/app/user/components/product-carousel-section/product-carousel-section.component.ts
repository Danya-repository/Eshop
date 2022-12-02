import {Component, Input, OnChanges, OnDestroy, OnInit, ViewChild} from "@angular/core";
import {ProductInterface} from "../../../shared/models/product.interface";
import {delay, interval, Subscription, timeout} from "rxjs";
import {ProductService} from "../../../shared/services/product.service";
import {ButtonStateInterface} from "../../../shared/models/buttonState.interface";
import {CarouselState} from "../plugins/carousel/carousel-state";
import {ProductCarouselSectionService} from "../../../shared/services/product-carousel-section.service";
import {CarouselService} from "../../../shared/services/carousel.service";
import {ProductCarouselMenuService} from "../../../shared/services/product-carousel-menu.service";
import {ProductCarouselMenuComponent} from "./product-carousel-menu/product-carousel-menu.component";

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
  productsSub: Subscription = new Subscription();
  isLoad: boolean = false;

  constructor(
    protected productCarouselMenuService: ProductCarouselMenuService,
    protected productService: ProductService
  ) { }

  ngOnInit(): void {
    this.productCarouselSectionSub = this.productCarouselMenuService.$stream.subscribe((button: ButtonStateInterface) => {
      this.products = [];
      this.isLoad = true;
      this.productsSub = this.productService.getAll(button.identifier)
        .pipe(
         delay(2000)
        )
        .subscribe((products) => {
          this.isLoad = false;
          this.products = products;
      });
    })
  }

  ngOnDestroy(): void {
    this.productCarouselSectionSub.unsubscribe();
    this.productsSub.unsubscribe();
  }
}
