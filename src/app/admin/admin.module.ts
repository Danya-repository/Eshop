import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductEditorComponent} from './components/product-editor/product-editor.component';
import {ExtraEditorComponent} from './components/extra-editor/extra-editor.component';
import {AdminRoutingModule} from "./admin-routing.module";

@NgModule({
  declarations: [
    ProductEditorComponent,
    ExtraEditorComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
