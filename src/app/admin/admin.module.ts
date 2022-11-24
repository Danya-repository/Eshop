import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductEditorComponent} from './components/product-editor/product-editor.component';
import {ExtraEditorComponent} from './components/extra-editor/extra-editor.component';
import {AdminBaseLayoutComponent} from './components/admin-base-layout/admin-base-layout.component';
import {AdminRoutingModule} from "./admin-routing.module";
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    ProductEditorComponent,
    ExtraEditorComponent,
    AdminBaseLayoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
