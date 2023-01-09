import {Directive, ElementRef, HostListener, OnInit, Renderer2, ViewChild} from '@angular/core';
import {ScrollWindowService} from "../services/scroll-window.service";

@Directive({
  selector: '[appScrollVisible]'
})
export class ScrollVisibleDirective {

  constructor(
    private scrollWindowService: ScrollWindowService
  ) { }

  @HostListener('mousewheel') animateVanishStripAfterScroll() {
    this.scrollWindowService.stripOpacityTransition = false;
    this.scrollWindowService.visibleTimeoutActivate();
  }
}
