import {ScrollWindowInterface} from "../interface/scroll-window.interface";

export class ScrollWindowState implements ScrollWindowInterface {

  public canDown: boolean = true;
  public canUp: boolean  = true;
  public containerHeight: number = 0;
  public containerPosition: number = 0;
  public disableStripOpacityTransitionTimeout: any;
  public draggable: boolean = false;
  public handleHeight: number = 40;
  public handlePosition: number = 0;
  public scrollPercentage: number = 0;
  public slowdown: number = 1.7;
  public startMouseHandlePosition: number = 0;
  public stripOpacityTransition: boolean = false;
  public transition: boolean  = true;
  public visible: boolean = false;
  public visibleTimeout: any;
  public windowHeight: number = 0;

  get getCanDown(): boolean {
    return this.canDown;
  }

  set setCanDown(value: boolean) {
    this.canDown = value;
  }

  get getCanUp(): boolean {
    return this.canUp;
  }

  set setCanUp(value: boolean) {
    this.canUp = value;
  }

  get getContainerHeight(): number {
    return this.containerHeight;
  }

  set setContainerHeight(value: number) {
    this.containerHeight = value;
  }

  get getContainerPosition(): number {
    return this.containerPosition;
  }

  set setContainerPosition(value: number) {
    this.containerPosition = value;
  }

  get getDisableStripOpacityTransitionTimeout(): any {
    return this.disableStripOpacityTransitionTimeout;
  }

  set setDisableStripOpacityTransitionTimeout(value: any) {
    this.disableStripOpacityTransitionTimeout = value;
  }

  get getDraggable(): boolean {
    return this.draggable;
  }

  set setDraggable(value: boolean) {
    this.draggable = value;
  }

  get getHandleHeight(): number {
    return this.handleHeight;
  }

  set setHandleHeight(value: number) {
    this.handleHeight = value;
  }

  get getHandlePosition(): number {
    return this.handlePosition;
  }

  set setHandlePosition(value: number) {
    this.handlePosition = value;
  }

  get getScrollPercentage(): number {
    return this.scrollPercentage;
  }

  set setScrollPercentage(value: number) {
    this.scrollPercentage = value;
  }

  get getSlowdown(): number {
    return this.slowdown;
  }

  set setSlowdown(value: number) {
    this.slowdown = value;
  }

  get getStartMouseHandlePosition(): number {
    return this.startMouseHandlePosition;
  }

  set setStartMouseHandlePosition(value: number) {
    this.startMouseHandlePosition = value;
  }

  get getStripOpacityTransition(): boolean {
    return this.stripOpacityTransition;
  }

  set setStripOpacityTransition(value: boolean) {
    this.stripOpacityTransition = value;
  }

  get getTransition(): boolean {
    return this.transition;
  }

  set setTransition(value: boolean) {
    this.transition = value;
  }

  get getVisible(): boolean {
    return this.visible;
  }

  set setVisible(value: boolean) {
    this.visible = value;
  }

  get getVisibleTimeout(): any {
    return this.visibleTimeout;
  }

  set setVisibleTimeout(value: any) {
    this.visibleTimeout = value;
  }

  get getWindowHeight(): number {
    return this.windowHeight;
  }

  set setWindowHeight(value: number) {
    this.windowHeight = value;
  }

}
