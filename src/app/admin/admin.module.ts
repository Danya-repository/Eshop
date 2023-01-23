import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductEditorComponent} from './components/product-editor/product-editor.component';

import {AdminRoutingModule} from "./admin-routing.module";
import {AdminHeaderComponent} from './components/admin-header/admin-header.component';
import {AdminFooterComponent} from './components/admin-footer/admin-footer.component';
import {AdminDashboardComponent} from './components/admin-dashboard/admin-dashboard.component';

@NgModule({
  declarations: [
    ProductEditorComponent,
    AdminHeaderComponent,
    AdminFooterComponent,
    AdminDashboardComponent
  ],
  exports: [
    AdminHeaderComponent,
    AdminDashboardComponent,
    AdminFooterComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
