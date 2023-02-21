import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductEditorComponent} from './components/product-editor/product-editor.component';

import {AdminRoutingModule} from "./admin-routing.module";
import {AdminHeaderComponent} from './components/admin-header/admin-header.component';
import {AdminFooterComponent} from './components/admin-footer/admin-footer.component';
import {AdminDashboardComponent} from './components/admin-dashboard/admin-dashboard.component';
import {AdminBaseLayoutComponent} from "./components/admin-base-layout/admin-base-layout.component";
import { AdminProductCardComponent } from './components/admin-product-card/admin-product-card.component';
import {SharedModule} from "../shared/shared.module";

@NgModule({
  declarations: [
    AdminBaseLayoutComponent,
    ProductEditorComponent,
    AdminHeaderComponent,
    AdminFooterComponent,
    AdminDashboardComponent,
    AdminProductCardComponent
  ],
  exports: [
    AdminHeaderComponent,
    AdminFooterComponent,
    AdminDashboardComponent
  ],
    imports: [
        CommonModule,
        AdminRoutingModule,
        SharedModule
    ]
})
export class AdminModule { }
