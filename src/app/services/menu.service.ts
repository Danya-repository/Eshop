import {Injectable} from '@angular/core';
import {Subject} from "rxjs";
import {ButtonStateInterface} from "../models/buttonState.interface";

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  state = [
    {text: "Квадроциклы", identifier: "ATVS"},
    {text: "Катера", identifier: "LAUNCHES"},
    {text: "Гидроциклы", identifier: "JET_SKINS"},
    {text: "Лодки", identifier: "BOATS"},
    {text: "Вездеходы", identifier: "CROSS_COUNTRY_VEHICLE"},
    {text: "Снегоходы", identifier: "SNOWMOBILES"},
    {text: "Двигатели", identifier: "ENGINES"},
    {text: "Запчасти", identifier: "SPARES"}
  ]

  constructor() {}

  get getState(): ButtonStateInterface[] {
    return this.state
  }
}
