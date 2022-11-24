import {Injectable} from '@angular/core';
import {ButtonStateInterface} from "../models/buttonState.interface";
import {BehaviorSubject, Subject} from "rxjs";
import {CarouselMenuEnum} from "../enums/сarouselMenu.enum";

@Injectable({
  providedIn: 'root'
})
export class ProductCarouselMenuService {

  private state: ButtonStateInterface[] = [
    {active: false, text: 'Запчасти', identifier: CarouselMenuEnum.SPARES},
    {active: false, text: 'Моторы', identifier: CarouselMenuEnum.ENGINES},
    {active: false, text: 'Шины', identifier: CarouselMenuEnum.TIRES},
    {active: false, text: 'Электроника', identifier: CarouselMenuEnum.ELECTRONICS},
    {active: false, text: 'Инструменты', identifier: CarouselMenuEnum.TOOLS},
    {active: false, text: 'Аксессуары', identifier: CarouselMenuEnum.ACCESSORIES}
  ];

  $carouselMenuStream: BehaviorSubject<ButtonStateInterface> = new BehaviorSubject<ButtonStateInterface>(this.state[0]);

  constructor() {}

  public activateButtonOfCarouselMenu(button: ButtonStateInterface) {
    this.state.map(buttonInState => buttonInState.active = buttonInState.identifier === button.identifier)
  }

  get getState(): ButtonStateInterface[] {
    return this.state;
  }
}

