import { Component, OnInit } from '@angular/core';
import {IButtonState} from "../../../../shared/models/buttonState.interface";
import {CarouselMenuEnum} from "../../../../shared/enums/сarouselMenu.enum";
import {TabMenuService} from "../../../../shared/services/tab-menu.service";

@Component({
  selector: 'app-search-tabs',
  templateUrl: './search-tabs.component.html',
  styleUrls: ['./search-tabs.component.scss']
})
export class SearchTabsComponent implements OnInit {

  buttons: IButtonState[] = [
    {active: false, text: 'Поиск по номеру', identifier: 'number'},
    {active: false, text: 'Поиск по марке', identifier: 'brand'},
    {active: false, text: 'Поиск по названию товара', identifier: 'name'},
  ];

  tabs: IButtonState[] = []

  constructor(
    public tabMenuService: TabMenuService
  ) { }

  ngOnInit(): void {
    this.tabMenuService.initialize(this.buttons, 1)
    this.tabs = this.tabMenuService.state
  }

  toggleActivate(button: IButtonState) {
    this.tabMenuService.setActiveButton(button);
  }

}
