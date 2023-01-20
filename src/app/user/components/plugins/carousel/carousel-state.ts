import {CarouselStateInterface} from "../interface/state-carousel.interface";

export class CarouselState implements CarouselStateInterface {

  private _windowWidth: number = 0;
  private _itemWidth: number = 0;
  private _trackWidth: number = 0;
  private _currentSlide: number = 0;
  private _currentTrackPosition: number = 0;
  private _startDragTrackPosition: number = 0;
  private _countSlides: number = 0;
  private _countOfSlideToDisplay: number = 0;
  private _mouseIsDown: boolean = false;
  private _mouseIsUp: boolean = true;
  private _mouseStartPosition: number = 0;
  private _mouseEndPosition: number = 0;
  private _isArrowNext: boolean = false;
  private _isArrowPrev: boolean = false;
  private _transition: boolean = true;

  constructor() {
  }

  get windowWidth(): number {
    return this._windowWidth;
  }

  setWindowWidth(value: number) {
    this._windowWidth = value;
    return this;
  }

  get itemWidth(): number {
    return this._itemWidth;
  }

  setItemWidth(value: number) {
    this._itemWidth = value;
    return this;
  }

  get trackWidth(): number {
    return this._trackWidth;
  }

  setTrackWidth(value: number) {
    this._trackWidth = value;
    return this;
  }

  get currentSlide(): number {
    return this._currentSlide;
  }

  setCurrentSlide(value: number) {
    this._currentSlide = value;
    return this;
  }

  get currentTrackPosition(): number {
    return this._currentTrackPosition;
  }

  setCurrentTrackPosition(value: number) {
    this._currentTrackPosition = value;
    return this;
  }

  get startDragTrackPosition(): number {
    return this._startDragTrackPosition;
  }

  setStartDragTrackPosition(value: number) {
    this._startDragTrackPosition = value;
    return this;
  }

  get countSlides(): number {
    return this._countSlides;
  }

  setCountSlides(value: number) {
    this._countSlides = value;
    return this;
  }

  get countOfSlideToDisplay(): number {
    return this._countOfSlideToDisplay;
  }

  setCountOfSlideToDisplay(value: number) {
    this._countOfSlideToDisplay = value;
    return this;
  }

  get mouseIsDown(): boolean {
    return this._mouseIsDown;
  }

  setMouseIsDown(value: boolean) {
    this._mouseIsDown = value;
    return this;
  }

  get mouseIsUp(): boolean {
    return this._mouseIsUp;
  }

  setMouseIsUp(value: boolean) {
    this._mouseIsUp = value;
    return this;
  }

  get mouseStartPosition(): number {
    return this._mouseStartPosition;
  }

  setMouseStartPosition(value: number) {
    this._mouseStartPosition = value;
    return this;
  }

  get mouseEndPosition(): number {
    return this._mouseEndPosition;
  }

  setMouseEndPosition(value: number) {
    this._mouseEndPosition = value;
    return this;
  }

  get isArrowNext(): boolean {
    return this._isArrowNext;
  }

  setIsArrowNext(value: boolean) {
    this._isArrowNext = value;
    return this;
  }

  get isArrowPrev(): boolean {
    return this._isArrowPrev;
  }

  setIsArrowPrev(value: boolean) {
    this._isArrowPrev = value;
    return this;
  }

  get transition(): boolean {
    return this._transition;
  }

  setTransition(value: boolean) {
    this._transition = value;
    return this;
  }
}
