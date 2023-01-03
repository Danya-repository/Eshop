import { ElementRef, Injectable, Renderer2 } from '@angular/core';

@Injectable()
export class ScrollWindowService {

  container!: ElementRef;
  window!: ElementRef;
  strip!: ElementRef;

  public startMouseHandlePosition: number = 0;
  public handlePosition: number = 0;
  public containerPosition: number = 0;
  public scrollPercentage: number = 0;
  public slowdown: number = 1.7;

  public draggable: boolean = false;
  public canUp: boolean = true;
  public canDown: boolean = true;
  public transition: boolean = true;
  public visible: boolean = false;

  public windowHeight!: number;
  public containerHeight!: number;
  public handleHeight: number = 40;

  private visibleTimeout: any;
  private disableStripOpacityTransitionTimeout: any;

  constructor(private renderer: Renderer2) { }

  initialize(window: ElementRef, container: ElementRef, strip: ElementRef) {
    this.window = window;
    this.container = container;
    this.strip = strip;

    this.windowHeight = this.window.nativeElement.offsetHeight;
    this.containerHeight = this.container.nativeElement.offsetHeight;

    // this.enableTopTransition()
  }

  dragging(event: MouseEvent) {
    this.handlePosition -= this.startMouseHandlePosition - event.clientY;
    this.startMouseHandlePosition = event.clientY;
    this.setScrollPercentage();
  }

  scrolling(event: WheelEvent) {
    this.handlePosition += event.deltaY / this.slowdown;
    this.setScrollPercentage();
    this.updateContainerPosition();
  }

  mousedown(event: MouseEvent) {
    this.draggable = true;
    this.disableTopTransition();
    this.startMouseHandlePosition = event.clientY;
  }

  mousemove(event: MouseEvent) {
    if (!this.draggable) return

    // драг вниз
    if (this.startMouseHandlePosition < event.clientY) {
      this.downDragging(event);
    }

    // драг вверх
    if (this.startMouseHandlePosition > event.clientY) {
      this.upDragging(event);
    }

  }

  mouseup() {
    if (!this.draggable) return;
    this.draggable = false;
    // this.visibleTimeoutActivate();
    // this.enableStripOpacityTransition();
    // this.enableTopTransition()
    this.startMouseHandlePosition = this.handlePosition;
  }

  mouseleave() {
    this.mouseup();
  }

  downDragging(event: MouseEvent) {
    this.canUp = true;

      if (this.handlePosition > this.windowHeight - this.handleHeight) {
        this.canDown = false;
        this.handlePosition = this.windowHeight - this.handleHeight;
        this.scrollPercentage = 100;
      }

      if (this.canDown) {
        this.dragging(event)
      }
      this.updateContainerPosition();
  }

  upDragging(event: MouseEvent) {
    this.canDown = true;

      if (this.handlePosition < 0) {
        this.canUp = false;
        this.scrollPercentage = 0;
        this.handlePosition = 0;
      }

      if (this.canUp) {
        this.dragging(event)
      }
      this.updateContainerPosition();
  }

  downScrolling(event: WheelEvent) {
    this.canUp = true;

      if (this.handlePosition + event.deltaY / this.slowdown > this.windowHeight - this.handleHeight) {
        this.canDown = false;
        this.scrollPercentage = 100;
        this.handlePosition = this.windowHeight - this.handleHeight;
      }

      if (this.canDown) {
        this.scrolling(event)
      }
  }

  upScrolling(event: WheelEvent) {
    this.canDown = true;

      if (this.handlePosition + event.deltaY / this.slowdown < 0) {
        this.canUp = false;
        this.handlePosition = 0;
        this.scrollPercentage = 0;
      }

      if (this.canUp) {
        this.scrolling(event)
      }
  }



  mousescroll(event: WheelEvent) {
    event.stopPropagation();
    event.preventDefault();

    let prevHandlePosition = this.handlePosition;
    let nextHandlePosition = prevHandlePosition + event.deltaY / this.slowdown;

    // скролл вверх
    if (prevHandlePosition > nextHandlePosition) {
        this.upScrolling(event)
    }

    // Скролл вниз
    if (prevHandlePosition < nextHandlePosition) {
      this.downScrolling(event)
    }
  }

  updateContainerPosition() {
    this.containerPosition = -(this.containerHeight - this.windowHeight) / 100 * this.scrollPercentage;
  }

  enableTopTransition() {
    // this.renderer.setStyle(this.container.nativeElement, 'transition', 'top .25s');
    // if (this.handle) {
    //   this.renderer.setStyle(this.handle.nativeElement, 'transition', 'top .25s');
    // }
    // this.renderer.setStyle(this.handle.nativeElement, 'transition', 'top .25s');
    // console.log(this.handle)
  }

  visibleTimeoutActivate() {
    clearTimeout(this.visibleTimeout);
    clearTimeout(this.disableStripOpacityTransitionTimeout);

    if (this.draggable) return;

    this.visibleTimeout = setTimeout(() => {
      this.enableStripOpacityTransition();
      this.visible = false;
      this.disableStripOpacityTransitionTimeoutActivate();
    }, 4000)
    this.visible = true;
  }

  enableStripOpacityTransition() {
    this.renderer.setStyle(this.strip.nativeElement, 'transition', 'opacity 2s');
  }

  disableStripOpacityTransition() {
    this.renderer.setStyle(this.strip.nativeElement, 'transition', 'opacity 0s');
  }

  disableStripOpacityTransitionTimeoutActivate() {
    this.disableStripOpacityTransitionTimeout = setTimeout(() => {
      this.disableStripOpacityTransition();
      clearTimeout(this.disableStripOpacityTransitionTimeout);
    }, 6000)
  }

  disableTopTransition() {
    // this.renderer.setStyle(this.container.nativeElement, 'transition', 'top 0s');
    // this.renderer.setStyle(this.handle.nativeElement, 'transition', 'top 0s');
  }

  goToPercentage(event: MouseEvent, distanceToTop: number) {
    if (event.clientY < 0) {
      this.canUp = false;
      this.scrollPercentage = 0;
      this.handlePosition = 0;
    } else {
      this.handlePosition = event.clientY - distanceToTop;
    }

    if (event.clientY > this.windowHeight - this.handleHeight) {
      this.canDown = false;
      this.scrollPercentage = 100;
      this.handlePosition = this.windowHeight - this.handleHeight;
    } else {
      this.handlePosition = event.clientY - distanceToTop;
    }

    this.setScrollPercentage();
    this.updateContainerPosition();
  }

  setScrollPercentage() {
    this.scrollPercentage = Math.round(this.handlePosition * 100 / (this.windowHeight - this.handleHeight));
  }
}
