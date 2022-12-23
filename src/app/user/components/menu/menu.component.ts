import {Component, OnInit} from '@angular/core';
import {MenuService} from "../../../shared/services/menu.service";
import {IButtonState} from "../../../shared/models/buttonState.interface";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  buttons: IButtonState[] = [];

  constructor(private menuService: MenuService) {}

  ngOnInit(): void {
    this.buttons = this.menuService.getState;
  }
}
