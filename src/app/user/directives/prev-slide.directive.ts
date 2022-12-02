import {Directive, ElementRef, HostListener} from '@angular/core';
import {CarouselService} from "../../shared/services/carousel.service";

@Directive({
  selector: '[appPrevSlide]',
  providers: [CarouselService]
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
