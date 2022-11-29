import {Directive, ElementRef, HostListener, Input, Renderer2} from '@angular/core';
import {ProductCarouselService} from "../services/product-carousel.service";

@Directive({
  selector: '[appNextSlide]'
})
export class NextSlideDirective {

  constructor(
    private productCarouselService: ProductCarouselService
  ) {}

  @HostListener('click')
  onClick() {
    this.productCarouselService.nextSlide();
  }
}
