import {Directive, ElementRef, HostListener} from '@angular/core';
import {ProductCarouselService} from "../services/product-carousel.service";

@Directive({
  selector: '[productCarouselMouseListen]'
})
export class ProductCarouselMouseListenDirective {

  constructor(
    private el: ElementRef,
    private productCarouselService: ProductCarouselService
  ) { }

  @HostListener('mouseup', ['$event', '$event.target'])
  onMouseUp() {
    this.productCarouselService.mouseUp();
    this.productCarouselService.resetMousePosition();
  }

  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    if (this.productCarouselService.mouseIsDown) {
      this.productCarouselService.dragTrack(event.clientX);
    }
  }

}
