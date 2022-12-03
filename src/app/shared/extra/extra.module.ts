import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ExtraRoutingModule} from "./extra-routing.module";
import {RouterModule} from "@angular/router";
import {ExtraBaseLayoutComponent} from "./components/extra-base-layout/extra-base-layout.component";

@NgModule({
  declarations: [
    ExtraBaseLayoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ExtraRoutingModule
  ],
  exports: []
})
export class ExtraModule {}
