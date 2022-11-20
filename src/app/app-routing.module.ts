import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./components/home/home.component";
import {ProductPageComponent} from "./components/product-page/product-page.component";
import {CatalogComponent} from "./components/catalog/catalog.component";
import {ProductResolver} from "./services/resolvers/product.resolver";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'product/:id', component: ProductPageComponent, resolve: {product: ProductResolver}},
  {path: 'catalog/:type', component: CatalogComponent, pathMatch: 'full'},

  // {path: '**', component: NotFoundComponent}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
