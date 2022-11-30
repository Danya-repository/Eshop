import {Component, Input, OnInit} from '@angular/core';
import {ProductCarouselSectionComponent} from "../product-carousel-section/product-carousel-section.component";
import {ProductService} from "../../services/product.service";
import {ProductCarouselMenuService} from "../../services/product-carousel-menu.service";
import {ProductInterface} from "../../models/product.interface";
import {Subscription} from "rxjs";
import {ProductCarouselSectionService} from "../../services/product-carousel-section.service";
import {ButtonStateInterface} from "../../models/buttonState.interface";
import {CarouselState} from "../plugins/carousel/carousel-state";
import {CarouselService} from "../../services/carousel.service";

@Component({
  selector: 'app-classic-product-carousel',
  templateUrl: './classic-product-carousel.component.html',
  styleUrls: ['./classic-product-carousel.component.scss']
})
export class ClassicProductCarouselComponent extends ProductCarouselSectionComponent{

  override titleSection = 'Рекомендованные товары'
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
