import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomePageComponent} from "./home-page.component";
import {HomePageRoutingModule} from "./home-page-routing.module";
import {HeadHomeCarouselComponent} from "./components/head-home-carousel/head-home-carousel.component";
import {TilesComponent} from "./components/tiles/tiles.component";
import {CarouselDotsComponent} from "../shared/components/carousel-dots/carousel-dots.component";
import {UserSharedModule} from "../shared/user-shared.module";
import { HomeSearchComponent } from './components/search/home-search.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    HomePageComponent,
    HeadHomeCarouselComponent,
    TilesComponent,
    HomeSearchComponent,
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
