import {ElementRef, Injectable} from '@angular/core';
import {Target} from "@angular/compiler";
import {CarouselStateService} from "../components/plugins/carousel/carousel-state.service";
import {CarouselState} from "../components/plugins/carousel/carousel-state";

@Injectable({
  providedIn: 'root'
})
export class CarouselService {

  protected window: ElementRef | undefined;
  protected carouselTrack: ElementRef | undefined;

  state: CarouselState = new CarouselState();
  stateService = new CarouselStateService()

  constructor() {
    this.stateService.$carouselStateStream.subscribe((state) => {
      this.state = state;
    })
  }

  public initialize(window: ElementRef | undefined, track: ElementRef | undefined) {
    this.window = window;
    this.carouselTrack = track;

    this.stateService.setState(this.state.setWindowWidth(this.window?.nativeElement.offsetWidth));
    this.stateService.setState(this.state.setItemWidth(Math.round(this.state.windowWidth / this.state.countOfSlideToDisplay)));
    this.stateService.setState(this.state.setTrackWidth(this.state.itemWidth * this.state.countSlides));
    this.stateService.setState(this.state.setIsArrowNext(!(this.state.currentSlide + this.state.countOfSlideToDisplay >= this.state.countSlides)));
    this.stateService.setState(this.state.setIsArrowPrev(!(this.state.currentSlide <= 0)));
  }

  public actualizeArrowButtons() {
    this.stateService.setState(
      this.state
        .setIsArrowNext(!(this.state.currentSlide + this.state.countOfSlideToDisplay >= this.state.countSlides))
        .setIsArrowPrev(!(this.state.currentSlide <= 0)))
  }

  private resetTrackPositionToActualSlide() {
    this.stateService
      .setState(this.state.setCurrentTrackPosition(-this.state.itemWidth * this.state.currentSlide));
  }

  private mouseSetUp() {
    this.stateService.setState(
      this.state
        .setMouseIsUp(true)
        .setMouseIsDown(false))
  }

  private mouseSetDown() {
    this.stateService.setState(
      this.state
        .setMouseIsUp(false)
        .setMouseIsDown(true)
    )
  }

  private updateStartDragTrackPosition() {
    this.stateService.setState(
      this.state.setStartDragTrackPosition(this.state.currentTrackPosition)
    )
  }

  private resetMousePosition() {
    this.stateService.setState(
      this.state
        .setMouseEndPosition(0)
        .setMouseStartPosition(0));
  }

  private dragTrack(position: number) {
    this.stateService
      .setState(
        this.state
          .setMouseEndPosition(position)
          .setCurrentTrackPosition(this.state.startDragTrackPosition - this.getDeltaMousePosition));
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

  protected enableTransition () {
    this.stateService
      .setState(this.state.setTransition(true));
  }

  protected disableTransition () {
    this.stateService
      .setState(this.state.setTransition(false));
  }

  public onMouseUp(event: MouseEvent) {
    if (!this.state.mouseIsDown) return
    this.mouseSetUp();
    this.stateService
      .setState(
        this.state.setMouseEndPosition(event.clientX));
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
    this.stateService.setState(
      this.state.setMouseStartPosition(event.clientX));
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
    this.stateService
      .setState(this.state.setCurrentSlide(this.state.currentSlide + 1));
    this.actualizeArrowButtons();

    this.resetTrackPositionToActualSlide();
  }

  public prevSlide() {
    if (!this.state.isArrowPrev) return
    this.stateService
      .setState(this.state.setCurrentSlide(this.state.currentSlide - 1));
    this.actualizeArrowButtons();
    this.resetTrackPositionToActualSlide();
  }
}



