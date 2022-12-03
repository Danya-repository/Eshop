import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AboutPageRoutingModule} from "./about-page-routing.module";
import {UserSharedModule} from "../shared/user-shared.module";



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AboutPageRoutingModule,
    UserSharedModule
  ]
})
export class AboutPageModule {}
