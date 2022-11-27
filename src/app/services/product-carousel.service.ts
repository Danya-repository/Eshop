import {ElementRef, Injectable, QueryList, Renderer2, RendererFactory2} from '@angular/core';
import {Carousel} from "../components/plugins/carousel/Carousel";
import {CarouselState} from "../components/plugins/carousel/interface/state-carousel.interface";
import {Target} from "@angular/compiler";

@Injectable({
  providedIn: 'root'
})
export class ProductCarouselService {

  private state = {
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

  private carouselTrack: ElementRef | undefined;
  private renderer: Renderer2;
  private carouselSlides: QueryList<any> = new QueryList<any>();

  constructor(
    protected rendererFactory: RendererFactory2,
  ) {
    this.renderer = rendererFactory.createRenderer(null, null);
  }

  initialization(window: ElementRef | undefined, track: ElementRef | undefined, carouselSlides: QueryList<any>, countSlidesToDisplay: number = 1) {
    this.state.windowWidth = window?.nativeElement.offsetWidth;
    this.state.countSlides = carouselSlides.length
    this.state.countOfSlideToDisplay = countSlidesToDisplay
    this.state.itemWidth = Math.round(this.state.windowWidth / this.state.countOfSlideToDisplay);
    this.state.trackWidth = this.state.itemWidth * this.state.countSlides;

    this.carouselSlides = carouselSlides;
    this.carouselTrack = track;

    this.setStartStyle();
  }

  public setStartStyle = () => {
    this.renderer.setStyle(this.carouselTrack?.nativeElement, 'width', `${this.getTrackWidth}px`);
    this.carouselSlides.map(carouselItem => {
      this.renderer.setStyle(carouselItem.nativeElement, 'width', `${this.getItemWidth}px`);
    })
  }

  updateTransformTrack = () => {
    this.renderer.setStyle(this.carouselTrack?.nativeElement, 'transform', `translateX(${this.getTrackPosition}px)`);
  }

  enableTransition = (seconds =  1) => {
    this.renderer.setStyle(this.carouselTrack?.nativeElement, 'transition', `all ${seconds}s`)
  }

  disableTransition = () => {
    this.renderer.setStyle(this.carouselTrack?.nativeElement, 'transition', 'none')
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

    this.resetTrackPositionToActualSlide();
    this.updateTransformTrack();
  }

  prevSlide() {
    if (!this.getPossibleChange.prev) return
    this.state.currentSlide--;
    this.state.currentTrackPosition += this.state.itemWidth;
    this.actualizeArrowButtons();

    this.resetTrackPositionToActualSlide();
    this.updateTransformTrack();
  }

  mouseSetUp() {
    this.state.mouseState.isUp = true;
    this.state.mouseState.isDown = false
  }

  mouseSetDown() {
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
    this.updateTransformTrack();
  }

  dragChangeSlide() {
    if(Math.abs(this.getDeltaMousePosition) > 50 && this.getDeltaMousePosition > 0) {
      this.nextSlide();
    } else if (Math.abs(this.getDeltaMousePosition) > 50 && this.getDeltaMousePosition < 0) {
      this.prevSlide();
    }
    this.resetTrackPositionToActualSlide();
    this.updateTransformTrack();
  }

  isTrack(target: Target): boolean {
    return this.carouselTrack?.nativeElement.contains(target)
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
    // return this.getMouseStartPosition - this.getMouseEndPosition;
    return this.getMouseStartPosition - this.getMouseEndPosition;
  }

  // public onMouseUp(event: MouseEvent) {
  //   this.mouseSetUp();
  //   this.setMouseEndPosition = event.clientX;
  //
  //   this.dragChangeSlide();
  //   this.resetTrackPositionToActualSlide();
  //   this.resetMousePosition();
  //
  //   this.enableTransition();
  //   this.updateTransformTrack();
  // }
  //
  // public onMouseMove(event: MouseEvent) {
  //   if (this.mouseIsDown) {
  //     this.dragTrack(event.clientX);
  //   }
  // }
  //
  // public onMouseDown(event: MouseEvent, target: Target) {
  //   if (!this.isTrack(target)) return
  //   this.mouseSetDown()
  //   this.updateStartDragTrackPosition()
  //   this.setMouseStartPosition = event.clientX;
  //   this.disableTransition();
  // }
  //
  // public onMouseLeave() {
  //   this.mouseSetUp();
  //
  //   this.dragChangeSlide();
  //   this.resetTrackPositionToActualSlide();
  //   this.resetMousePosition();
  //
  //   this.enableTransition();
  //   this.updateTransformTrack();
  // }
  //
  // public onNextSlide() {
  //   this.nextSlide()
  //   this.updateTransformTrack();
  // }
  //
  // public onPrevSlide() {
  //   this.prevSlide();
  //   this.updateTransformTrack();
  // }
  //
  get getPossibleChange() {
    return this.state.possibleChange;
  }
}
