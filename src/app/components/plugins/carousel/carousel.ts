// import {ElementRef, QueryList, Renderer2} from "@angular/core";
// import {Target} from "@angular/compiler";
// import {CarouselState} from "./CarouselState";
//
// export class Carousel {
//
//   private state: CarouselState = new CarouselState()
//
//
//   protected window: ElementRef | undefined;
//   protected carouselTrack: ElementRef | undefined;
//   protected carouselSlides: QueryList<any> = new QueryList<any>();
//   protected countSlidesToDisplay: number | undefined;
//
//   constructor(
//     private renderer: Renderer2
//   ) {}
//
//   public initialize(window: ElementRef, track: ElementRef, slides: QueryList<any>, countToDisplay: number = 1) {
//     this.window = window;
//     this.carouselTrack = track;
//     this.carouselSlides = slides;
//     this.countSlidesToDisplay = countToDisplay;
//
//
//     this.state.setWindowWidth = this.window?.nativeElement.offsetWidth;
//     this.state.setCountSlides = this.carouselSlides?.length
//     this.state.setCountOfSlideToDisplay = this.countSlidesToDisplay;
//     this.state.setItemWidth = Math.round(this.state.getWindowWidth / this.state.getCountOfSlideToDisplay);
//     this.state.setTrackWidth = this.state.getItemWidth * this.state.getCountSlides;
//
//     this.setStartStyle();
//   }
//
//   public setStartStyle = () => {
//     this.renderer.setStyle(this.carouselTrack?.nativeElement, 'width', `${this.state.getTrackWidth}px`);
//     this.carouselSlides.map(carouselItem => {
//       this.renderer.setStyle(carouselItem.nativeElement, 'width', `${this.state.getItemWidth}px`);
//     })
//   }
//
//   protected updateTransformTrack = () => {
//     this.renderer?.setStyle(this.carouselTrack?.nativeElement, 'transform', `translateX(${this.state.getTrackPosition}px)`);
//   }
//
//   protected enableTransition = (seconds =  1) => {
//     this.renderer?.setStyle(this.carouselTrack?.nativeElement, 'transition', `all ${seconds}s`)
//   }
//
//   protected disableTransition = () => {
//     this.renderer?.setStyle(this.carouselTrack?.nativeElement, 'transition', 'none')
//   }
//
//   protected actualizeArrowButtons() {
//     this.state.setPossibleChangeNext = !(this.state.getCurrentSlide + this.state.getCountOfSlideToDisplay >= this.state.getCountSlides);
//     this.state.setPossibleChangePrev = !(this.state.getCurrentSlide <= 0);
//   }
//
//   protected resetTrackPositionToActualSlide() {
//     this.state.setCurrentTrackPosition = -this.state.getItemWidth * this.state.getCurrentSlide;
//   }
//
//   protected mouseSetUp() {
//     this.state.setMouseIsUp = true;
//     this.state.setMouseIsDown = false
//   }
//
//   protected mouseSetDown() {
//     this.state.setMouseIsUp = false;
//     this.state.setMouseIsDown = true;
//   }
//
//   protected updateStartDragTrackPosition() {
//     this.state.setStartDragTrackPosition = this.state.getCurrentTrackPosition;
//   }
//
//   protected resetMousePosition() {
//     this.state.setMouseEndPosition = 0;
//     this.state.setMouseStartPosition = 0;
//   }
//
//   protected updateItemWidth() {
//     this.state.setItemWidth = Math.round(this.state.getWindowWidth / this.state.getCountOfSlideToDisplay);
//   }
//
//   protected updateTrackWidth() {
//     this.state.setTrackWidth = this.state.getItemWidth * this.state.getCountSlides;
//   }
//
//   protected dragTrack(position: number) {
//     this.state.setMouseEndPosition = position;
//     this.state.setCurrentTrackPosition = this.state.getStartDragTrackPosition - this.getDeltaMousePosition;
//     this.updateTransformTrack();
//   }
//
//   protected dragChangeSlide() {
//     if(Math.abs(this.getDeltaMousePosition) > 50 && this.getDeltaMousePosition > 0) {
//       this.nextSlide();
//     } else if (Math.abs(this.getDeltaMousePosition) > 50 && this.getDeltaMousePosition < 0) {
//       this.prevSlide();
//     }
//     this.resetTrackPositionToActualSlide();
//     this.updateTransformTrack();
//   }
//
//   protected isTrack(target: Target): boolean {
//     return this.carouselTrack?.nativeElement.contains(target)
//   }
//
//   protected get getDeltaMousePosition(): number {
//     return this.state.getMouseStartPosition - this.state.getMouseEndPosition;
//   }
//
//   public onMouseUp(event: MouseEvent) {
//     if (!this.state.mouseIsDown) return
//     this.mouseSetUp();
//     this.state.setMouseEndPosition = event.clientX;
//
//     this.dragChangeSlide();
//
//     this.enableTransition();
//     this.resetMousePosition();
//   }
//
//   public onMouseMove(event: MouseEvent) {
//     if (this.state.mouseIsDown) {
//       this.dragTrack(event.clientX);
//     }
//   }
//
//   public onMouseDown(event: MouseEvent, target: Target) {
//     if (!this.isTrack(target)) return
//     this.mouseSetDown()
//     this.updateStartDragTrackPosition()
//     this.state.setMouseStartPosition = event.clientX;
//     this.disableTransition();
//   }
//
//   public onMouseLeave() {
//     this.mouseSetUp();
//
//     this.dragChangeSlide();
//     this.resetTrackPositionToActualSlide();
//     this.resetMousePosition();
//
//     this.enableTransition();
//     this.updateTransformTrack();
//   }
//
//   public nextSlide() {
//     if (!this.state.getPossibleChange.next) return
//     this.state.currentSlideIncrement();
//     this.actualizeArrowButtons();
//
//     this.resetTrackPositionToActualSlide();
//     this.updateTransformTrack();
//   }
//
//   public prevSlide() {
//     if (!this.state.getPossibleChange.prev) return
//     this.state.currentSlideDecrement();
//     this.actualizeArrowButtons();
//
//     this.resetTrackPositionToActualSlide();
//     this.updateTransformTrack();
//   }
// }
