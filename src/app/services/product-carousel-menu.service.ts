import {Injectable} from '@angular/core';
import {ButtonStateInterface} from "../models/buttonState.interface";

@Injectable({
  providedIn: 'root'
})
export class ProductCarouselMenuService {

  protected state: ButtonStateInterface[] = [];

  constructor() {}

  public activateButtonOfCarouselMenu(button: ButtonStateInterface) {
    this.state.map(buttonInState => buttonInState.active = buttonInState.identifier === button.identifier)
  }

  get getState(): ButtonStateInterface[] {
    return this.state;
  }
}

