import { Component, OnInit } from '@angular/core';
import {ButtonStateInterface} from "../../../shared/models/buttonState.interface";
import {CarouselMenuEnum} from "../../../shared/enums/сarouselMenu.enum";
import {TabMenuService} from "../../../shared/services/tab-menu.service";

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {

  buttons: ButtonStateInterface[] = [
    {active: false, text: 'Поиск по номеру', identifier: 'number'},
    {active: true, text: 'Поиск по марке', identifier: 'brand'},
    {active: false, text: 'Поиск по названию товара', identifier: 'name'},
  ];

  constructor(
    public tabMenuService: TabMenuService
  ) { }

  get tabs() {
    return this.tabMenuService.state;
  }

  ngOnInit(): void {
    this.tabMenuService.initialize(this.buttons)
  }

  toggleActivate(button: ButtonStateInterface) {
    this.tabMenuService.setActiveButton(button);
  }
}
