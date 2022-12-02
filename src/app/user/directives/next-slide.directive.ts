import {Directive, ElementRef, HostListener, Input, Renderer2} from '@angular/core';
import {CarouselService} from "../../shared/services/carousel.service";

@Directive({
  selector: '[appNextSlide]',
  providers: [CarouselService]
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
