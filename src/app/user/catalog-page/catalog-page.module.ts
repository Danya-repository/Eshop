import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CatalogPageRoutingModule} from "./catalog-page-routing.module";
import {CatalogPageComponent} from "./catalog-page.component";
import {UserSharedModule} from "../shared/user-shared.module";


@NgModule({
  declarations: [
    CatalogPageComponent
  ],
  imports: [
    CommonModule,
    CatalogPageRoutingModule,
    UserSharedModule
  ]
})
export class CatalogPageModule { }
