import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from "./components/header/header.component";
import {FooterComponent} from "./components/footer/footer.component";
import {MenuComponent} from "./components/menu/menu.component";
import {BasketComponent} from './components/basket/basket.component';
import {SharedModule} from "../shared/shared.module";
import {RouterModule} from "@angular/router";
import {ProductCarouselComponent} from "./components/product-carousel/product-carousel.component";
import {
  ProductCarouselSectionComponent
} from "./components/product-carousel-section/product-carousel-section.component";
import {DotsComponent} from "./components/dots/dots.component";
import {ProductComponent} from "./components/product/product.component";
import {ProductPageComponent} from "./components/product-page/product-page.component";
import {HomePageComponent} from "./components/home-page/home-page.component";
import {TilesComponent} from "./components/tiles/tiles.component";
import {HomeSearchComponent} from "./components/search/home-search.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CarouselComponent} from "./components/carousel/carousel.component";
import {CatalogPageComponent} from "./components/catalog-page/catalog-page.component";
import {TabsComponent} from "./components/tabs/tabs.component";
import {BasketProductComponent} from './components/basket-product/basket-product.component';

@NgModule({
    declarations: [
      HeaderComponent,
      MenuComponent,
      FooterComponent,
      BasketComponent,
      ProductCarouselComponent,
      ProductCarouselSectionComponent,
      DotsComponent,
      ProductComponent,
      ProductPageComponent,
      HomePageComponent,
      TilesComponent,
      TabsComponent,
      HomeSearchComponent,
      CarouselComponent,
      CatalogPageComponent,
      BasketProductComponent
    ],
    imports: [
      CommonModule,
      SharedModule,
      RouterModule,
      FormsModule,
      ReactiveFormsModule
    ],
    exports: [
        HeaderComponent,
        MenuComponent,
        FooterComponent,
        BasketComponent
    ]
})
export class UserModule { }
