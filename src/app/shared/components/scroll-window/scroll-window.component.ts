import {
  AfterContentInit,
  AfterViewInit,
  Component, ComponentFactory, ComponentFactoryResolver, ComponentRef,
  ContentChildren,
  ElementRef,
  QueryList,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import {AppScrollWindowChildDirective} from "../../directives/app-scroll-window-child.directive";

@Component({
  selector: 'app-scroll-window',
  templateUrl: './scroll-window.component.html',
  styleUrls: ['./scroll-window.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class ScrollWindowComponent implements AfterViewInit {

  @ContentChildren(AppScrollWindowChildDirective, {read: AppScrollWindowChildDirective})
  children!: QueryList<AppScrollWindowChildDirective>;

  @ViewChild('container', {static: true}) container!: ElementRef;
  @ViewChild('handle', {static: false}) handle!: ElementRef;
  @ViewChild('window', {static: true}) window!: ElementRef;
  @ViewChild('strip', {static: false}) strip!: ElementRef;


  @ViewChild('ref', {read: ViewContainerRef,static: false}) ref!: ViewContainerRef;


  constructor() {}

  ngAfterViewInit(): void {
    // this.children.forEach(child => {
    //   this.ref.createEmbeddedView(child.Template)
    // })
    // console.log(this.components.get(0))
    // let f = this.resolver.resolveComponentFactory(this.components.get(0))

    // @ts-ignore
    // this.ref.createComponent(this.children.get(0))
    // console.log('Components!', typeof this.components.get(0))
  }

  private readonly _slowdown: number = 1.7;

  private visibleTimeout: any;
  private disableStripOpacityTransitionTimeout: any;

  public startMouseHandlePosition: number = 0;
  public handlePosition: number = 0;
  public containerPosition: number = 0;
  public scrollPercentage: number = 0;

  public draggable: boolean = false;
  public canUp: boolean = true;
  public canDown: boolean = true;
  public transition: boolean = true;
  public visible: boolean = true;

  public windowHeight: number = 0;
  public containerHeight: number = 0;
  public handleHeight: number = 40;

  public stripOpacityTransition: boolean = false;


  mousedown(event: MouseEvent) {
    event.stopPropagation();
    event.preventDefault();
    if (!this.handle?.nativeElement.contains(event.target)) return

    this.draggable = true;
    this.startMouseHandlePosition = event.clientY;
  }

  mousemove(event: MouseEvent) {
    event.stopPropagation();
    event.preventDefault();

    if (!this.draggable) return

    // драг вниз
    if (this.startMouseHandlePosition < event.clientY) {
      this._downDragging(event);
    }

    // драг вверх
    if (this.startMouseHandlePosition > event.clientY) {
      this._upDragging(event);
    }
  }

  mouseup() {
    this._visibleTimeoutActivate();
    this.stripOpacityTransition = true;

    if (!this.draggable) return;
    this.draggable = false;
    this._visibleTimeoutActivate();
    this.startMouseHandlePosition = this.handlePosition;
  }

  mouseleave() {
    this.mouseup();
    this._visibleTimeoutActivate();
  }

  mouseenter() {
    this.visible = true;
    this.stripOpacityTransition = false;
  }

  mousewheel(event: WheelEvent) {
    event.stopPropagation();
    event.preventDefault();

    if (this.windowHeight > this.containerHeight) return

    this.stripOpacityTransition = false;
    this._visibleTimeoutActivate();

    let prevHandlePosition = this.handlePosition;
    let nextHandlePosition = prevHandlePosition + event.deltaY / this._slowdown;

    // скролл вверх
    if (prevHandlePosition > nextHandlePosition) {
      this._upScrolling(event)
    }

    // Скролл вниз
    if (prevHandlePosition < nextHandlePosition) {
      this._downScrolling(event)
    }
  }

  goToPercentage(event: MouseEvent) {
    event.stopPropagation();
    event.preventDefault();
    if (this.handle.nativeElement.contains(event.target)) return;

    let distanceToTop = this.strip.nativeElement.getBoundingClientRect().top

    if (event.clientY < 0) {
      this.canUp = false;
      this.scrollPercentage = 0;
      this.handlePosition = 0;
    } else {
      this.canUp = true;
      this.handlePosition = event.clientY - distanceToTop;
    }

    if (event.clientY > this.windowHeight - this.handleHeight) {
      this.canDown = false;
      this.scrollPercentage = 100;
      this.handlePosition = this.windowHeight - this.handleHeight;
    } else {
      this.canDown = true;
      this.handlePosition = event.clientY - distanceToTop;
    }

    this._setScrollPercentage();
    this._updateContainerPosition();
  }

  resize() {
    this.windowHeight = this.window.nativeElement.offsetHeight;
    this.containerHeight = this.container.nativeElement.offsetHeight;
    this._setSizeHandler();
  }

  private _setSizeHandler() {
    let percentWindowOfContainer = Math.round(this.windowHeight / this.containerHeight * 100);
    let handlerSize = this.windowHeight / 100 * percentWindowOfContainer;
    this.handleHeight = handlerSize < 40 ? 40 : handlerSize;
  }

  private _dragging(event: MouseEvent) {
    this.handlePosition -= this.startMouseHandlePosition - event.clientY;
    this.startMouseHandlePosition = event.clientY;
    this._setScrollPercentage();
  }

  private _setScrollPercentage() {
    this.scrollPercentage = Math.round(this.handlePosition * 100 / (this.windowHeight - this.handleHeight));
  }

  private _updateContainerPosition() {
    this.containerPosition = -(this.containerHeight - this.windowHeight) / 100 * this.scrollPercentage;
  }

  private _upScrolling(event: WheelEvent) {
    this.canDown = true;

    if (this.handlePosition + event.deltaY / this._slowdown < 0) {
      this.canUp = false;
      this.handlePosition = 0;
      this.scrollPercentage = 0;
      this._updateContainerPosition();
    }

    if (this.canUp) {
      this._scrolling(event)
    }
  }

  private _downScrolling(event: WheelEvent) {
    this.canUp = true;

    if (this.handlePosition + event.deltaY / this._slowdown > this.windowHeight - this.handleHeight) {
      this.canDown = false;
      this.handlePosition = this.windowHeight - this.handleHeight;
      this.scrollPercentage = 100;
      this._updateContainerPosition();
    }

    if (this.canDown) {
      this._scrolling(event)
    }
  }

  private _scrolling(event: WheelEvent) {
    this.handlePosition += event.deltaY / this._slowdown;
    this._setScrollPercentage();
    this._updateContainerPosition();
  }

  private _downDragging(event: MouseEvent) {
    this.canUp = true;

    if (this.handlePosition > this.windowHeight - this.handleHeight) {
      this.canDown = false;
      this.handlePosition = this.windowHeight - this.handleHeight;
      this.scrollPercentage = 100;
    }

    if (this.canDown) {
      this._dragging(event)
    }
    this._updateContainerPosition();
  }

  private _upDragging(event: MouseEvent) {
    this.canDown = true;

    if (this.handlePosition < 0) {
      this.canUp = false;
      this.scrollPercentage = 0;
      this.handlePosition = 0;
    }

    if (this.canUp) {
      this._dragging(event)
    }
    this._updateContainerPosition();
  }

  private _visibleTimeoutActivate() {
    clearTimeout(this.visibleTimeout);
    clearTimeout(this.disableStripOpacityTransitionTimeout);

    if (this.draggable) return;

    this.visibleTimeout = setTimeout(() => {
      this.stripOpacityTransition = true;
      this.visible = false;
      this._disableStripOpacityTransitionTimeoutActivate();
    }, 4000)
    this.visible = true;
  }

  private _disableStripOpacityTransitionTimeoutActivate() {
    this.disableStripOpacityTransitionTimeout = setTimeout(() => {
      this.stripOpacityTransition = false;
      clearTimeout(this.disableStripOpacityTransitionTimeout);
    }, 6000)
  }
}
