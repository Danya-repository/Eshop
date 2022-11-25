import {Directive, ElementRef, HostListener} from '@angular/core';
import {ProductCarouselService} from "../services/product-carousel.service";

@Directive({
  selector: '[appProductCarouselTrackMouseListen]'
})
export class ProductCarouselTrackMouseListenDirective {

  constructor(
    private el: ElementRef,
    private productCarouselService: ProductCarouselService
  ) { }

  @HostListener('mousedown', ['$event'])
  onMouseDown(event: MouseEvent) {
    this.productCarouselService.mouseDown()
    this.productCarouselService.updateStartDragTrackPosition()
    this.productCarouselService.setMouseStartPosition = event.clientX;
  }


}
