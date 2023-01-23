import { Component, OnInit } from '@angular/core';
import {ButtonStateInterface} from "../../../shared/models/buttonState.interface";
import {Router} from "@angular/router";

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.scss']
})
export class AdminHeaderComponent implements OnInit {

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

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  logout() {
    this.router.navigate([''])
  }
}
