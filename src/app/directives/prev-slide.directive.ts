import {Directive, ElementRef, HostListener} from '@angular/core';
import {ProductCarouselService} from "../services/product-carousel.service";

@Directive({
  selector: '[appPrevSlide]'
})
export class PrevSlideDirective {

  constructor(
    private productCarouselService: ProductCarouselService
  ) { }

  @HostListener('click')
  onClick() {
    this.productCarouselService.prevSlide();
  }
}
