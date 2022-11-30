import {Directive, ElementRef, HostListener, Input, Renderer2} from '@angular/core';
import {CarouselService} from "../services/carousel.service";

@Directive({
  selector: '[appNextSlide]'
})
export class NextSlideDirective {

  constructor(
    private carouselService: CarouselService
  ) {}

  @HostListener('click')
  onClick() {
    this.carouselService.nextSlide();
  }
}
