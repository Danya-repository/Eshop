import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomePageComponent} from "./home-page.component";
import {HomePageRoutingModule} from "./home-page-routing.module";
import {HeadHomeCarouselComponent} from "./components/head-home-carousel/head-home-carousel.component";
import {TilesComponent} from "./components/tiles/tiles.component";
import {UserSharedModule} from "../shared/user-shared.module";
import {HomeSearchComponent} from './components/search/home-search.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { SearchTabsComponent } from './components/search-tabs/search-tabs.component';


@NgModule({
  declarations: [
    HomePageComponent,
    HeadHomeCarouselComponent,
    TilesComponent,
    HomeSearchComponent,
    SearchTabsComponent,
  ],
  imports: [
    CommonModule,
    HomePageRoutingModule,
    UserSharedModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class HomePageModule { }
