import { ElementRef, Injectable, Renderer2 } from '@angular/core';

@Injectable()
export class ScrollWindowService {

  container!: ElementRef;
  handle!: ElementRef;
  window!: ElementRef;
  strip!: ElementRef;

  public startMouseHandlePosition: number = 0;
  public handlePosition: number = 0;
  public containerPosition: number = 0;
  public scrollPercentage: number = 0;
  
  public draggable: boolean = false;
  public canUp: boolean = true;
  public canDown: boolean = true;
  public transition: boolean = true;
  public visible: boolean = false;

  public windowHeight!: number;
  public containerHeight!: number;
  public handleHeight: number = 40;

  private visibleTimeout: any;

  constructor(private renderer: Renderer2) { }

  initialize(window: ElementRef, container: ElementRef, strip: ElementRef, handle: ElementRef) {
    this.window = window;
    this.container = container;
    this.handle = handle;
    this.strip = strip;    

    this.windowHeight = this.window.nativeElement.offsetHeight;
    this.containerHeight = this.container.nativeElement.offsetHeight;
    // this.enableTopTransition()
  }

  dragging(event: MouseEvent) {
    this.handlePosition -= this.startMouseHandlePosition - event.clientY;
    this.startMouseHandlePosition = event.clientY
    this.scrollPercentage = Math.round(this.handlePosition * 100 / (this.windowHeight - 40));
  }

  scrolling(event: WheelEvent) {
    this.handlePosition += event.deltaY / 5;
    this.scrollPercentage = Math.round(this.handlePosition * 100 / (this.windowHeight - 40));
    this.updateContainerPosition();
  }

  mousedown(event: MouseEvent) {
    if (!this.handle.nativeElement.contains(event.target)) return
    this.draggable = true;
    // this.disableTopTransition();
    this.startMouseHandlePosition = event.clientY;
  }

  mousemove(event: MouseEvent) {
    event.stopPropagation();
    event.preventDefault();
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
    this.visibleTimeoutActivate();
    this.enableStripOpacityTransition();
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
        this.handlePosition = 0;
        this.scrollPercentage = 0;
      }

      if (this.canUp) {
        this.dragging(event)
      }  
      this.updateContainerPosition();
  }

  downScrolling(event: WheelEvent) {
    this.canUp = true;

      if (this.handlePosition + event.deltaY / 5 > this.windowHeight - this.handleHeight) {
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

      if (this.handlePosition + event.deltaY / 5 < 0) {
        this.canUp = false;
        this.scrollPercentage = 0;
        this.handlePosition = 0;
      }


      if (this.canUp) {
        this.scrolling(event)
      }  
  }

  enableStripOpacityTransition() {
    this.renderer.setStyle(this.strip.nativeElement, 'transition', 'opacity 2s');
  }

  disableStripOpacityTransition() {
    this.renderer.setStyle(this.strip.nativeElement, 'transition', 'opacity 0s');
  }

  visibleTimeoutActivate() {
    clearTimeout(this.visibleTimeout)

    if (this.draggable) return;

    this.visibleTimeout = setTimeout(() => {
      this.enableStripOpacityTransition();
      this.visible = false;
    }, 4000)
    this.visible = true;
  }

  mousescroll(event: WheelEvent) {
    event.stopPropagation();
    event.preventDefault();
        
    this.visibleTimeoutActivate();
    this.disableStripOpacityTransition();

    let prevHandlePosition = this.handlePosition;
    let nextHandlePosition = prevHandlePosition + event.deltaY / 5;

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
    this.renderer.setStyle(this.container.nativeElement, 'transition', 'top .11s');
    // this.renderer.setStyle(this.handle.nativeElement, 'transition', 'top .11s');
  }

  disableTopTransition() {
    this.renderer.setStyle(this.container.nativeElement, 'transition', 'top 0s');
    this.renderer.setStyle(this.handle.nativeElement, 'transition', 'top 0s');
  }
}
