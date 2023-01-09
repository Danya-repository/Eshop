import {Directive, HostListener} from '@angular/core';
import {ScrollWindowService} from "../services/scroll-window.service";

@Directive({
  selector: '[appScrollStrip]'
})
export class ScrollStripDirective {

  constructor(private scrollWindowService: ScrollWindowService) { }

  @HostListener('mouseup') animateScrollAndVanish() {
    this.scrollWindowService.visibleTimeoutActivate();
    this.scrollWindowService.stripOpacityTransition = true;
  }

  @HostListener('mouseleave') animateVanishStripAfterMouseLeave() {
    this.scrollWindowService.visibleTimeoutActivate();
  }

  @HostListener('mouseenter') disableAnimationStripBeforeEnter() {
    this.scrollWindowService.visible = true;
    this.scrollWindowService.stripOpacityTransition = false;
  }
}
