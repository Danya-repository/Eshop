import { Component, OnInit } from '@angular/core';
import {ProductCarouselComponent} from "../product-carousel-section/product-carousel/product-carousel.component";
import {ProductCarouselSectionComponent} from "../product-carousel-section/product-carousel-section.component";
import {ProductService} from "../../services/product.service";
import {ProductCarouselMenuService} from "../../services/product-carousel-menu.service";
import {ProductInterface} from "../../models/product.interface";
import {Subscription} from "rxjs";
import {ButtonStateInterface} from "../../models/buttonState.interface";
import {CarouselState} from "../plugins/carousel/carousel-state";
import {CarouselMenuEnum} from "../../enums/сarouselMenu.enum";
import {ProductCarouselSectionService} from "../../services/product-carousel-section.service";
import {CarouselService} from "../../services/carousel.service";

@Component({
  selector: 'app-recommended-carousel',
  templateUrl: './recommended-carousel.component.html',
  styleUrls: ['./recommended-carousel.component.scss']
})
export class RecommendedCarouselComponent extends ProductCarouselSectionComponent {

  override titleSection: string = 'С этим товаром покупают';
  override productService: ProductService = new ProductService()
  override productCarouselSectionService: ProductCarouselSectionService = new ProductCarouselSectionService()
  override products: ProductInterface[] = [];
  override buttonsState: ButtonStateInterface[] = [];
  override carouselState: CarouselState = new CarouselState();

  override productCarouselSectionSub: Subscription = new Subscription();
  override carouselService: CarouselService = new CarouselService()

  constructor() {
    super();
  }

}
