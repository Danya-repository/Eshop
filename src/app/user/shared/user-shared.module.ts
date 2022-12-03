import {NgModule} from "@angular/core";
import {DecorateButtonComponent} from "./components/decorate-button/decorate-button.component";
import {
  ProductCarouselComponent
} from "./components/product-carousel/product-carousel.component";
import {
  ProductCarouselSectionComponent
} from "./components/product-carousel-section/product-carousel-section.component";
import {
  ProductCarouselMenuComponent
} from "./components/product-carousel-menu/product-carousel-menu.component";
import {ProductComponent} from "./components/product/product.component";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {CarouselDotsComponent} from "./components/carousel-dots/carousel-dots.component";


@NgModule({
  declarations: [
    DecorateButtonComponent,
    ProductCarouselComponent,
    ProductCarouselSectionComponent,
    ProductCarouselMenuComponent,
    CarouselDotsComponent,
    ProductComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    DecorateButtonComponent,
    ProductCarouselComponent,
    ProductCarouselSectionComponent,
    ProductCarouselMenuComponent,
    CarouselDotsComponent,
    ProductComponent
  ]
})
export class UserSharedModule {}
