import {Component, OnInit} from '@angular/core';
import {MenuService} from "../../services/menu.service";
import {ButtonStateInterface} from "../../models/buttonState.interface";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  buttons: ButtonStateInterface[] = [];

  constructor(private menuService: MenuService) {}

  ngOnInit(): void {
    this.buttons = this.menuService.getState;
  }
}
