import {ITabs} from "./interface/tabs.interface";
import {ButtonStateInterface} from "../../../../shared/models/buttonState.interface";

export class TabsState implements ITabs {
  tabs: ButtonStateInterface[]= [];

  constructor(state: ButtonStateInterface[], indexActivatedButton: number = 0) {
    this.tabs = state;
    this.activateTab(this.tabs[indexActivatedButton])
  }

  public activateTab(button: ButtonStateInterface) {
      this.tabs.map(buttonInState => buttonInState.active = buttonInState.identifier === button.identifier)
  }

  get getState(): ButtonStateInterface[] {
    return this.tabs
  }

  get getActiveButton(): ButtonStateInterface | undefined {
    return this.tabs.find(btn => btn.active)
  }
}
