import { Component, OnInit } from '@angular/core';
import {MenuService} from "../../services/menu.service";
import {TabStateInterface} from "../../models/tab-state.interface";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  state = [];

  constructor(private menuService: MenuService) { }

  ngOnInit(): void {
    this.state = this.menuService.getState;
  }

  toggleActivate(button: TabStateInterface): void {
    this.menuService.setActiveButton(button);
  }
}
