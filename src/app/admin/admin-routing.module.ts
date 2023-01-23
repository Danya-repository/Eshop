import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {AdminBaseLayoutComponent} from "./components/admin-base-layout/admin-base-layout.component";

const routes: Routes = [
  {path: 'admin/:typeProduct', component: AdminBaseLayoutComponent},
]

@NgModule({
  imports:[RouterModule.forChild(routes)],
  exports:[RouterModule]
})
export class AdminRoutingModule {

}
