import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {AdminBaseLayoutComponent} from "./components/admin-base-layout/admin-base-layout.component";
import {AdminDashboardComponent} from "./components/admin-dashboard/admin-dashboard.component";
import {ProductsResolver} from "../shared/services/resolvers/products.resolver";

const routes: Routes = [
  {path: '', component: AdminBaseLayoutComponent, children: [
      {path: ':productType', component: AdminDashboardComponent, resolve: {products: ProductsResolver}}
    ]
  }
]

@NgModule({
  imports:[RouterModule.forChild(routes)],
  exports:[RouterModule]
})
export class AdminRoutingModule {}
