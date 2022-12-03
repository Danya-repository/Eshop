import {ElementRef, Injectable} from '@angular/core';
import {CarouselState} from "../../user/components/plugins/carousel/carousel-state";

@Injectable()
export class CarouselService {

  protected window: ElementRef | undefined;
  protected carouselTrack: ElementRef | undefined;
  state: CarouselState = new CarouselState();

  constructor() {}

  setState(state: CarouselState) {
    this.state = state;
  }

  getState() {
    return this.state;
  }

  public initialize(window: ElementRef | undefined, track: ElementRef | undefined) {
    this.window = window;
    this.carouselTrack = track;

    this.state
      .setWindowWidth(this.window?.nativeElement.offsetWidth)
      .setItemWidth(Math.round(this.state.windowWidth / this.state.countOfSlideToDisplay))
      .setTrackWidth(this.state.itemWidth * this.state.countSlides)
      .setIsArrowNext(!(this.state.currentSlide + this.state.countOfSlideToDisplay >= this.state.countSlides))
      .setIsArrowPrev(!(this.state.currentSlide <= 0));
  }

  public actualizeArrowButtons() {
    this.state
      .setIsArrowNext(!(this.state.currentSlide + this.state.countOfSlideToDisplay >= this.state.countSlides))
      .setIsArrowPrev(!(this.state.currentSlide <= 0))
  }

  private resetTrackPositionToActualSlide() {
    this.state.setCurrentTrackPosition(-this.state.itemWidth * this.state.currentSlide);
  }

  private mouseSetUp() {
    this.state
      .setMouseIsUp(true)
      .setMouseIsDown(false)
  }

  private mouseSetDown() {
    this.state
      .setMouseIsUp(false)
      .setMouseIsDown(true)
  }

  private updateStartDragTrackPosition() {
    this.state.setStartDragTrackPosition(this.state.currentTrackPosition)
  }

  private resetMousePosition() {
    this.state
      .setMouseEndPosition(0)
      .setMouseStartPosition(0);
  }

  private dragTrack(position: number) {
    this.state
      .setMouseEndPosition(position)
      .setCurrentTrackPosition(this.state.startDragTrackPosition - this.getDeltaMousePosition);
  }

  private dragChangeSlide() {
    if (Math.abs(this.getDeltaMousePosition) > 50 && this.getDeltaMousePosition > 0) {
      this.nextSlide();
    } else if (Math.abs(this.getDeltaMousePosition) > 50 && this.getDeltaMousePosition < 0) {
      this.prevSlide();
    }
    this.resetTrackPositionToActualSlide();
  }

  private isTrack(target: EventTarget | null): boolean {
    return this.carouselTrack?.nativeElement.contains(target);
  }

  private get getDeltaMousePosition(): number {
    return this.state.mouseStartPosition - this.state.mouseEndPosition;
  }

  protected enableTransition() {
    this.state.setTransition(true);
  }

  protected disableTransition() {
    this.state.setTransition(false);
  }

  public onMouseUp(event: MouseEvent) {
    if (!this.state.mouseIsDown) return
    this.mouseSetUp();
    this.state.setMouseEndPosition(event.clientX);
    this.dragChangeSlide();
    this.resetMousePosition();
    this.enableTransition();
  }

  public onMouseMove(event: MouseEvent) {
    if (this.state.mouseIsDown) {
      this.dragTrack(event.clientX);
    }
  }

  public onMouseDown(event: MouseEvent) {
    if (!this.isTrack(event.target)) return
    this.mouseSetDown()
    this.updateStartDragTrackPosition()
    this.state.setMouseStartPosition(event.clientX);
    this.disableTransition();
  }

  public onMouseLeave() {
    this.mouseSetUp();
    this.dragChangeSlide();
    this.resetTrackPositionToActualSlide();
    this.resetMousePosition();
    this.enableTransition();
  }

  public nextSlide() {
    if (!this.state.isArrowNext) return
    this.state.setCurrentSlide(this.state.currentSlide + 1);
    this.actualizeArrowButtons();

    this.resetTrackPositionToActualSlide();
  }

  public prevSlide() {
    if (!this.state.isArrowPrev) return
    this.state.setCurrentSlide(this.state.currentSlide - 1);
    this.actualizeArrowButtons();
    this.resetTrackPositionToActualSlide();
  }

  public goToSlide(numberOfSlide: number) {
    this.state.setCurrentSlide(numberOfSlide);
    this.actualizeArrowButtons();
    this.resetTrackPositionToActualSlide();
  }
}



