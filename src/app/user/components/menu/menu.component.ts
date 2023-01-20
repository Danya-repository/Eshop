import {Component, OnInit} from '@angular/core';
import {ButtonStateInterface} from "../../../shared/models/buttonState.interface";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  buttons: ButtonStateInterface[] = [
    {text: "Квадроциклы", identifier: "atvs"},
    {text: "Катера", identifier: "launches"},
    {text: "Гидроциклы", identifier: "jet-skins"},
    {text: "Лодки", identifier: "boats"},
    {text: "Вездеходы", identifier: "cross-country-vehicles"},
    {text: "Снегоходы", identifier: "snowmobiles"},
    {text: "Двигатели", identifier: "engines"},
    {text: "Запчасти", identifier: "spares"}
  ]

  // Двигателей нет

  constructor() {}

  ngOnInit(): void {}
}
