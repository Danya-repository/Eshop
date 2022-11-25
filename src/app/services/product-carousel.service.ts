import {ElementRef, Injectable, QueryList} from '@angular/core';
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductCarouselService {

  state = {
    windowWidth: 0,
    itemWidth: 0,
    trackWidth: 0,
    currentSlide: 0,
    currentTrackPosition: 0,
    startDragTrackPosition: 0,
    countSlides: 0,
    countOfSlideToDisplay: 0,
    mouseState: {
      isDown: false,
      isUp: true,
      position: {
        start: 0,
        end: 0
      }
    },
    possibleChange: {
      next: true,
      prev: false
    }
  }

  $carouselStream: Subject<any> = new Subject<any>();

  constructor() {}

  initialization(window: ElementRef | undefined, carouselSlides: QueryList<any>, countSlidesToDisplay: number = 1) {
    this.state.windowWidth = window?.nativeElement.offsetWidth;
    this.state.countSlides = carouselSlides.length
    this.state.countOfSlideToDisplay = countSlidesToDisplay
    this.state.itemWidth = Math.round(this.state.windowWidth / this.state.countOfSlideToDisplay);
    this.state.trackWidth = this.state.itemWidth * this.state.countSlides;
  }

  actualizeArrowButtons() {
    this.state.possibleChange.next = !(this.state.currentSlide + this.state.countOfSlideToDisplay >= this.state.countSlides);
    this.state.possibleChange.prev = !(this.state.currentSlide <= 0);
  }

  nextSlide() {
    if (!this.getPossibleChange.next) return
    this.state.currentSlide++;
    this.state.currentTrackPosition -= this.state.itemWidth;
    this.actualizeArrowButtons();
  }

  prevSlide() {
    if (!this.getPossibleChange.prev) return
    this.state.currentSlide--;
    this.state.currentTrackPosition += this.state.itemWidth;
    this.actualizeArrowButtons();
  }

  mouseUp() {
    this.state.mouseState.isUp = true;
    this.state.mouseState.isDown = false

    this.resetTrackPositionToActualSlide();
    this.dragChangeSlide();
  }

  mouseDown() {
    this.state.mouseState.isUp = false;
    this.state.mouseState.isDown = true;
  }

  updateStartDragTrackPosition() {
    this.state.startDragTrackPosition = this.state.currentTrackPosition;
  }

  resetMousePosition() {
    this.state.mouseState.position.end = 0;
    this.state.mouseState.position.start = 0;
  }

  resetTrackPositionToActualSlide() {
    this.state.currentTrackPosition = -this.getItemWidth * this.getCurrentSlide;
  }

  dragTrack(position: number) {
    this.setMouseEndPosition = position;
    this.state.currentTrackPosition = this.state.startDragTrackPosition - this.getDeltaMousePosition;
  }

  dragChangeSlide() {
    if(Math.abs(this.getDeltaMousePosition) > 50 && this.getDeltaMousePosition > 0) {
      this.nextSlide()
    }
    if (Math.abs(this.getDeltaMousePosition) > 50 && this.getDeltaMousePosition < 0) {
      this.prevSlide()
    }
  }

  set setMouseEndPosition(position: number) {
    this.state.mouseState.position.end = position;
  }

  set setMouseStartPosition(position: number) {
    this.state.mouseState.position.start = position;
  }

  get getTrackPosition() {
    return this.state.currentTrackPosition;
  }

  get getCurrentSlide() {
    return this.state.currentSlide;
  }

  get getPossibleChange() {
    return this.state.possibleChange;
  }

  get getTrackWidth() {
    return this.state.trackWidth;
  }

  get getItemWidth(): number {
    return this.state.itemWidth;
  }

  get mouseIsUp(): boolean {
    return this.state.mouseState.isUp;
  }

  get mouseIsDown(): boolean {
    return this.state.mouseState.isDown;
  }

  get getMouseEndPosition(): number {
    return this.state.mouseState.position.end;
  }

  get getMouseStartPosition(): number {
    return this.state.mouseState.position.start;
  }

  get getDeltaMousePosition(): number {
    return this.getMouseStartPosition - this.getMouseEndPosition;
  }
}
