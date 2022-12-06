import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserRoutingModule} from "./user-routing.module";
import {HeaderComponent} from "./components/header/header.component";
import {FooterComponent} from "./components/footer/footer.component";
import {MenuComponent} from "./components/menu/menu.component";
import {ProductPageModule} from "./product-page/product-page.module";
import {AboutPageModule} from "./about-page/about-page.module";
import {CatalogPageModule} from "./catalog-page/catalog-page.module";
import {HomePageModule} from "./home-page/home-page.module";
import {UserSharedModule} from "./shared/user-shared.module";


@NgModule({
  declarations: [
    HeaderComponent,
    MenuComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    AboutPageModule,
    ProductPageModule,
    CatalogPageModule,
    HomePageModule,
    UserRoutingModule,
    UserSharedModule
  ],
  exports: [
    HeaderComponent,
    MenuComponent,
    FooterComponent
  ]
})
export class UserModule { }
