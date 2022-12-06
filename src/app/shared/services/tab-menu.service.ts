import {Injectable} from '@angular/core';
import {ButtonStateInterface} from "../models/buttonState.interface";
import {Subject} from "rxjs";
import {TabsState} from "../../user/components/plugins/tabs/tabs-state";

@Injectable()
export class TabMenuService {

  $stream: Subject<ButtonStateInterface> = new Subject<ButtonStateInterface>();
  private _state: TabsState = new TabsState([]);

  constructor() {}

  initialize(buttons: ButtonStateInterface[], indexOfActivateButton: number) {
    this._state = new TabsState(buttons, indexOfActivateButton)
    this.$stream.next(<ButtonStateInterface>this.getActiveButton())
  }

  get state() {
    return this._state.getState;
  }

  getActiveButton(): ButtonStateInterface {
    return <ButtonStateInterface>this._state.getActiveButton;
  }

  setActiveButton(button: ButtonStateInterface) {
    this._state.activateTab(button)
    this.$stream.next(button)
  }
}

