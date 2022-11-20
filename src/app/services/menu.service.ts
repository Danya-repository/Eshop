import { Injectable } from '@angular/core';
import {Tabs} from "./tabs";
import {MenuEnum} from "../enums/menu.enum";

@Injectable({
  providedIn: 'root'
})
export class MenuService extends Tabs{

  constructor() {
    super(MenuEnum);
  }
}
