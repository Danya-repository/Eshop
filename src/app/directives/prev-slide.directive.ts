import {Directive, ElementRef, HostListener} from '@angular/core';
import {CarouselService} from "../services/carousel.service";

@Directive({
  selector: '[appPrevSlide]'
})
export class PrevSlideDirective {

  constructor(
    private carouselService: CarouselService
  ) { }

  @HostListener('click')
  onClick() {
    this.carouselService.prevSlide();
  }
}
