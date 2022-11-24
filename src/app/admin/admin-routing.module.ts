import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {ProductEditorComponent} from "./components/product-editor/product-editor.component";
import {AdminBaseLayoutComponent} from "./components/admin-base-layout/admin-base-layout.component";
import {ExtraEditorComponent} from "./components/extra-editor/extra-editor.component";

const routes: Routes = [
  {path: 'admin', component: AdminBaseLayoutComponent, children: [
      {path: 'extra', component: ExtraEditorComponent},
      {path: 'product', component: ProductEditorComponent}
    ]},
]

@NgModule({
  imports:[RouterModule.forChild(routes)],
  exports:[RouterModule]
})
export class AdminRoutingModule {

}
