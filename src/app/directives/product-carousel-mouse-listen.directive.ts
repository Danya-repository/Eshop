import {Directive, ElementRef, HostListener} from '@angular/core';
import {ProductCarouselService} from "../services/product-carousel.service";
import {Target} from "@angular/compiler";

@Directive({
  selector: '[productCarouselMouseListen]'
})
export class ProductCarouselMouseListenDirective {

  constructor(
    private el: ElementRef,
    private productCarouselService: ProductCarouselService
  ) { }

  @HostListener('mouseup', ['$event'])
  onMouseUp(event: MouseEvent) {
    if (!this.productCarouselService.mouseIsDown) return
    this.productCarouselService.mouseSetUp();
    this.productCarouselService.setMouseEndPosition = event.clientX;

    this.productCarouselService.dragChangeSlide();

    this.productCarouselService.enableTransition();
    this.productCarouselService.resetMousePosition();
  }

  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    if (this.productCarouselService.mouseIsDown) {
      this.productCarouselService.dragTrack(event.clientX);
    }
  }

  @HostListener('mousedown', ['$event', '$event.target'])
  onMouseDown(event: MouseEvent, target: Target) {
    if (!this.productCarouselService.isTrack(target)) return
    this.productCarouselService.mouseSetDown()
    this.productCarouselService.updateStartDragTrackPosition()
    this.productCarouselService.setMouseStartPosition = event.clientX;
    this.productCarouselService.disableTransition();
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.productCarouselService.mouseSetUp();

    this.productCarouselService.dragChangeSlide();
    this.productCarouselService.resetTrackPositionToActualSlide();
    this.productCarouselService.resetMousePosition();

    this.productCarouselService.enableTransition();
    this.productCarouselService.updateTransformTrack();
  }
}
