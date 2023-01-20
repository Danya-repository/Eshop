import {Injectable} from '@angular/core';
import {ButtonStateInterface} from "../models/buttonState.interface";
import {TabsState} from "../../user/components/plugins/tabs/tabs-state";
import {Subject} from "rxjs";

@Injectable()
export class TabMenuService {

  private _state: TabsState = new TabsState([]);
  public $stream: Subject<ButtonStateInterface> = new Subject<ButtonStateInterface>();

  constructor() {}

  initialize(buttons: ButtonStateInterface[]) {
    this._state = new TabsState(buttons)
  }

  get state() {
    return this._state.getState;
  }

  getActiveButton(): ButtonStateInterface {
    return <ButtonStateInterface>this._state.getActiveButton;
  }

  setActiveButton(button: ButtonStateInterface) {
    this._state.activateTab(button)
    this.$stream.next(button);
  }
}

