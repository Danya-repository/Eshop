import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {ServiceWorkerModule} from '@angular/service-worker';
import {environment} from '../environments/environment';
import {HeaderComponent} from './components/header/header.component';
import {FooterComponent} from './components/footer/footer.component';
import {RouterModule} from "@angular/router";
import {MenuComponent} from './components/menu/menu.component';
import {AppRoutingModule} from './app-routing.module';
import {HomeComponent} from './components/home/home.component';
import {CatalogComponent} from './components/catalog/catalog.component';
import {ProductPageComponent} from './components/product-page/product-page.component';
import {NotFoundComponent} from './components/not-found/not-found.component';
import {ProductComponent} from "./components/product/product.component";
import {AdminModule} from "./admin/admin.module";
import {ExtraModule} from "./extra/extra.module";
import {DecorateButtonComponent} from './components/decorate-button/decorate-button.component';
import {ProductCarouselComponent} from "./components/product-carousel-section/product-carousel/product-carousel.component";
import {ProductCarouselMenuComponent} from "./components/product-carousel-section/product-carousel-menu/product-carousel-menu.component";
import {ProductCarouselSectionComponent} from "./components/product-carousel-section/product-carousel-section.component";
import {NextSlideDirective} from "./directives/next-slide.directive";
import {PrevSlideDirective} from "./directives/prev-slide.directive";
import { ProductCarouselMouseListenDirective } from './directives/product-carousel-mouse-listen.directive';
import { HeadHomeCarouselComponent } from './components/head-home-carousel/head-home-carousel.component';
import { CarouselDotsComponent } from './components/carousel-dots/carousel-dots.component';
import { TilesComponent } from './components/tiles/tiles.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    HomeComponent,
    CatalogComponent,
    ProductPageComponent,
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
    TilesComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    AdminModule,
    ExtraModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {}
