import {Directive, ElementRef, HostListener} from '@angular/core';
import {Target} from "@angular/compiler";
import {CarouselService} from "../services/carousel.service";

@Directive({
  selector: '[productCarouselMouseListen]',
  providers: [CarouselService]
})
export class ProductCarouselMouseListenDirective {

  constructor(
    private el: ElementRef,
    private carouselService: CarouselService
  ) { }

  @HostListener('mouseup', ['$event'])
  onMouseUp(event: MouseEvent) {
    // this.carouselService.onMouseUp(event)
  }

  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    // this.carouselService.onMouseMove(event)
  }

  @HostListener('mousedown', ['$event', '$event.target'])
  onMouseDown(event: MouseEvent, target: Target) {
    // this.carouselService.onMouseDown(event, target)
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    // this.carouselService.onMouseLeave();
  }
}
