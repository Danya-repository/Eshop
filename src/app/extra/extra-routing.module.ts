import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {ExtraBaseLayoutComponent} from "./components/extra-base-layout/extra-base-layout.component";

const routes: Routes = [
  {path: 'extra', component: ExtraBaseLayoutComponent}
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class ExtraRoutingModule {

}
