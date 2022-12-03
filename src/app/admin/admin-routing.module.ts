import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {AdminBaseLayoutComponent} from "./components/admin-base-layout/admin-base-layout.component";
import {ExtraBaseLayoutComponent} from "../shared/extra/components/extra-base-layout/extra-base-layout.component";

const routes: Routes = [
  {path: 'admin', component: AdminBaseLayoutComponent, children: [
      {path: 'extra', component: ExtraBaseLayoutComponent}
    ]}
]

@NgModule({
  imports:[RouterModule.forChild(routes)],
  exports:[RouterModule]
})
export class AdminRoutingModule {

}
