import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {NotFoundComponent} from "./shared/components/not-found/not-found.component";
import {UserBaseLayoutComponent} from "./user/user-base-layout.component";
import {HomePageComponent} from "./user/components/home-page/home-page.component";
import {CatalogPageComponent} from "./user/components/catalog-page/catalog-page.component";
import {ProductPageComponent} from "./user/components/product-page/product-page.component";
import {ProductResolver} from "./shared/services/resolvers/product.resolver";
import {ProductsResolver} from "./shared/services/resolvers/products.resolver";
import {AuthGuard} from "./shared/services/guards/auth.guard";

const routes: Routes = [
  {path: '', component: UserBaseLayoutComponent,children: [
      {path: '', component: HomePageComponent, pathMatch: 'full'},
      {path: 'catalog/:productType', component: CatalogPageComponent, resolve: {products: ProductsResolver}},
      {path: 'product/:id', component: ProductPageComponent, resolve: {product: ProductResolver}},
      {path: 'about', component: HomePageComponent},
    ]
  },
  {path: 'admin', canActivate: [AuthGuard], canDeactivate: [AuthGuard], loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
