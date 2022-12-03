import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProductPageRoutingModule} from "./product-page-routing.module";
import {ProductPageComponent} from "./product-page.component";
import {UserModule} from "../user.module";
import {UserSharedModule} from "../shared/user-shared.module";



@NgModule({
  declarations: [
    ProductPageComponent
  ],
  imports: [
    CommonModule,
    ProductPageRoutingModule,
    UserSharedModule
  ]
})
export class ProductPageModule { }
