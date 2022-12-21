import {ITabs} from "./interface/tabs.interface";
import {IButtonState} from "../../../../shared/models/buttonState.interface";

export class TabsState implements ITabs {
  tabs: IButtonState[]= [];

  constructor(state: IButtonState[], indexActivatedButton: number = 0) {
    this.tabs = state;
    this.activateTab(this.tabs[indexActivatedButton])
  }

  public activateTab(button: IButtonState) {
      this.tabs.map(buttonInState => buttonInState.active = buttonInState.identifier === button.identifier)
  }

  get getState(): IButtonState[] {
    return this.tabs
  }

  get getActiveButton(): IButtonState | undefined {
    return this.tabs.find(btn => btn.active)
  }
}
