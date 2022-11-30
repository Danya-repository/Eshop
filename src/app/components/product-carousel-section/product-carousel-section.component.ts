import {Component, Input, OnDestroy, OnInit} from "@angular/core";
import {ProductInterface} from "../../models/product.interface";
import {Subscription} from "rxjs";
import {ProductService} from "../../services/product.service";
import {ButtonStateInterface} from "../../models/buttonState.interface";
import {CarouselState} from "../plugins/carousel/carousel-state";
import {ProductCarouselSectionService} from "../../services/product-carousel-section.service";
import {CarouselService} from "../../services/carousel.service";

@Component({
  selector: 'app-product-carousel-section',
  templateUrl: './product-carousel-section.component.html',
  styleUrls: ['./product-carousel-section.component.scss']
})
export class ProductCarouselSectionComponent implements OnInit, OnDestroy {

  @Input() titleSection = '';

  productService: ProductService = new ProductService()
  productCarouselSectionService: ProductCarouselSectionService = new ProductCarouselSectionService()
  products: ProductInterface[] = [];
  buttonsState: ButtonStateInterface[] = [];
  carouselState: CarouselState = new CarouselState();
  productCarouselSectionSub: Subscription = new Subscription();
  carouselService: CarouselService = new CarouselService()

  constructor() { }

  ngOnInit(): void {
    this.productCarouselSectionSub = this.productCarouselSectionService.$stream.subscribe((button: ButtonStateInterface) => {
      this.products = this.productService.getAll(button.identifier);
      this.productCarouselSectionService.buttonsState.map(buttonInState => buttonInState.active = buttonInState.identifier === button.identifier);
      this.buttonsState = this.productCarouselSectionService.buttonsState;
    })

  }

  changeGroup(event: ButtonStateInterface) {
    this.productCarouselSectionService.$stream.next(event)
  }

  ngOnDestroy(): void {
    this.productCarouselSectionSub.unsubscribe()
  }


}
