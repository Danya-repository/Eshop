import {Injectable} from '@angular/core';
import {IButtonState} from "../models/buttonState.interface";
import {Subject} from "rxjs";
import {TabsState} from "../../user/components/plugins/tabs/tabs-state";

@Injectable()
export class TabMenuService {

  $stream: Subject<IButtonState> = new Subject<IButtonState>();
  private _state: TabsState = new TabsState([]);

  constructor() {}

  initialize(buttons: IButtonState[], indexOfActivateButton: number) {
    this._state = new TabsState(buttons, indexOfActivateButton)
    this.$stream.next(<IButtonState>this.getActiveButton())
  }

  get state() {
    return this._state.getState;
  }

  getActiveButton(): IButtonState {
    return <IButtonState>this._state.getActiveButton;
  }

  setActiveButton(button: IButtonState) {
    this._state.activateTab(button)
    this.$stream.next(button)
  }
}

