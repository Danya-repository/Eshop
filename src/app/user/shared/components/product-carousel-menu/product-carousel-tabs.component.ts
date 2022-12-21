import {Component, Input, OnInit} from '@angular/core';
import {TabMenuService} from "../../../../shared/services/tab-menu.service";
import {IButtonState} from "../../../../shared/models/buttonState.interface";
import {CarouselMenuEnum} from "../../../../shared/enums/сarouselMenu.enum";

@Component({
  selector: 'app-product-carousel-tabs',
  templateUrl: './product-carousel-tabs.component.html',
  styleUrls: ['./product-carousel-tabs.component.scss']
})
export class ProductCarouselTabsComponent implements OnInit {

  @Input() isLoad: boolean = false;

  buttons: IButtonState[] = [
    {active: false, text: 'Запчасти', identifier: CarouselMenuEnum.SPARES},
    {active: false, text: 'Моторы', identifier: CarouselMenuEnum.ENGINES},
    {active: false, text: 'Шины', identifier: CarouselMenuEnum.TIRES},
    {active: false, text: 'Электроника', identifier: CarouselMenuEnum.ELECTRONICS},
    {active: false, text: 'Инструменты', identifier: CarouselMenuEnum.TOOLS},
    {active: false, text: 'Аксессуары', identifier: CarouselMenuEnum.ACCESSORIES}
  ];

  tabs: IButtonState[] = []

  constructor(
    public tabMenuService: TabMenuService
  ) {}

  ngOnInit(): void {
    this.tabMenuService.initialize(this.buttons, 0)
    this.tabs = this.tabMenuService.state
  }

  toggleActivate(button: IButtonState) {
    if (this.isLoad) return
    this.tabMenuService.setActiveButton(button);
  }
}
