import { Injectable } from '@angular/core';
import {Tabs} from "./tabs";
import {SliderMenuEnum} from "../enums/slider-menu.enum";

@Injectable({
  providedIn: 'root'
})
export class ProductSliderMenuService extends Tabs{

  constructor() {
    super(SliderMenuEnum);
  }
}
