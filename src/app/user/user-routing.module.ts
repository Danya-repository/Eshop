import {NgModule} from '@angular/core';
import {RouterModule} from "@angular/router";
import {UserBaseLayoutComponent} from "./user-base-layout.component";
import {HomePageComponent} from "./home-page/home-page.component";
import {CatalogPageComponent} from "./catalog-page/catalog-page.component";
import {ProductPageComponent} from "./product-page/product-page.component";
import {ProductResolver} from "../shared/services/resolvers/product.resolver";

const routes = [
      {path: '', component: UserBaseLayoutComponent, children: [
          {path: '', component: HomePageComponent},
          {path: 'catalog/:id', component: CatalogPageComponent},
          {path: 'product/:id', component: ProductPageComponent, resolve: [ProductResolver]},
          {path: 'about', component: HomePageComponent},
        ]
      }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
