import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UserRoutingModule} from "./user-routing.module";
import { AboutPageComponent } from './about-page/about-page.component';
import {CatalogPageComponent} from "./catalog-page/catalog-page.component";
import {HomePageComponent} from "./home-page/home-page.component";
import {HeaderComponent} from "./components/header/header.component";
import {FooterComponent} from "./components/footer/footer.component";
import {MenuComponent} from "./components/menu/menu.component";
import {NotFoundComponent} from "../shared/components/not-found/not-found.component";
import {ProductComponent} from "./components/product/product.component";
import {
  ProductCarouselComponent
} from "./components/product-carousel-section/product-carousel/product-carousel.component";
import {
  ProductCarouselMenuComponent
} from "./components/product-carousel-section/product-carousel-menu/product-carousel-menu.component";
import {DecorateButtonComponent} from "./components/decorate-button/decorate-button.component";
import {
  ProductCarouselSectionComponent
} from "./components/product-carousel-section/product-carousel-section.component";
import {NextSlideDirective} from "./directives/next-slide.directive";
import {PrevSlideDirective} from "./directives/prev-slide.directive";
import {ProductCarouselMouseListenDirective} from "./directives/product-carousel-mouse-listen.directive";
import {HeadHomeCarouselComponent} from "./components/head-home-carousel/head-home-carousel.component";
import {CarouselDotsComponent} from "./components/carousel-dots/carousel-dots.component";
import {TilesComponent} from "./components/tiles/tiles.component";
import {ProductPageComponent} from "./product-page/product-page.component";
import {RouterModule} from "@angular/router";


@NgModule({
  declarations: [
    AboutPageComponent,
    ProductPageComponent,
    HomePageComponent,
    CatalogPageComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    NotFoundComponent,
    ProductComponent,
    ProductCarouselComponent,
    ProductCarouselMenuComponent,
    DecorateButtonComponent,
    ProductCarouselSectionComponent,
    NextSlideDirective,
    PrevSlideDirective,
    ProductCarouselMouseListenDirective,
    HeadHomeCarouselComponent,
    CarouselDotsComponent,
    TilesComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    UserRoutingModule
  ],
  exports: [
    HeaderComponent,
    MenuComponent,
    FooterComponent
  ]
})
export class UserModule { }
