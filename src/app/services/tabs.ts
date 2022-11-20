import {TabStateInterface} from "../models/tab-state.interface";

export class Tabs {

  private state = [];

  constructor(private enumerable: any) {
    this.createState.bind(this)
    this.createState(enumerable)
  }

  private createState(enumerable: any) {
    let firstActivate: Boolean = false;

    for (let key in this.enumerable) {
      // @ts-ignore
      let localState: TabStateInterface = {name: this.enumerable[key], active: false, key: key.toLowerCase()}

      if (!firstActivate) {
        firstActivate = true
        localState.active = true
        // @ts-ignore
        this.state.push(localState)
        continue;
      }
      // @ts-ignore
      this.state.push(localState)
    }
  }

  public get getActiveButton(): TabStateInterface {
    // @ts-ignore
    return this.state.find(item => item.active)
  }

  public setActiveButton(tabState: TabStateInterface) {
    this.state.map((tab: TabStateInterface) => {
      tab.active = tabState.name === tab.name;
    })
  }

  public get getState() {
    return this.state
  }
}
