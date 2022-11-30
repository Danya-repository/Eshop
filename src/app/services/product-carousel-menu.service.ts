import {Injectable, OnInit} from '@angular/core';
import {ButtonStateInterface} from "../models/buttonState.interface";
import {CarouselMenuEnum} from "../enums/сarouselMenu.enum";
import {BehaviorSubject} from "rxjs";

@Injectable()
export class ProductCarouselMenuService implements OnInit{

  private buttonsState: ButtonStateInterface[] = [
    {active: false, text: 'Запчасти', identifier: CarouselMenuEnum.SPARES},
    {active: false, text: 'Моторы', identifier: CarouselMenuEnum.ENGINES},
    {active: false, text: 'Шины', identifier: CarouselMenuEnum.TIRES},
    {active: false, text: 'Электроника', identifier: CarouselMenuEnum.ELECTRONICS},
    {active: false, text: 'Инструменты', identifier: CarouselMenuEnum.TOOLS},
    {active: false, text: 'Аксессуары', identifier: CarouselMenuEnum.ACCESSORIES}
  ]

  $stream = new BehaviorSubject<ButtonStateInterface>(this.buttonsState[0]);

  constructor() {}

  public activateButtonOfCarouselMenu(button: ButtonStateInterface) {
    this.buttonsState.map(buttonInState => buttonInState.active = buttonInState.identifier === button.identifier)
    this.$stream.next(button)
  }

  get getState(): ButtonStateInterface[] {
    return this.buttonsState;
  }

  ngOnInit(): void {
  }
}

