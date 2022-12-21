import { AfterContentChecked, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-scroll-window',
  templateUrl: './scroll-window.component.html',
  styleUrls: ['./scroll-window.component.scss']
})
export class ScrollWindowComponent implements AfterContentChecked {

  @ViewChild('container', {static: true}) container!: ElementRef;
  @ViewChild('handle', {static: false}) handle!: ElementRef;
  @ViewChild('window', {static: true}) window!: ElementRef;

  handlePosition: number = 0;
  startMouseHandlePosition: number = 0;
  draggable: boolean = false;
  canUp: boolean = true;
  canDown: boolean = true;
  windowHeight!: number;
  containerHeight!: number;
  scrollValue: number = 0;
  containerPosition: number = 0;
  transition: boolean = true;


  constructor() { }
  ngAfterContentChecked(): void {
    this.windowHeight = this.window.nativeElement.offsetHeight;
    this.containerHeight = this.container.nativeElement.offsetHeight;
  }

  mousedown(event: MouseEvent) {
    event.preventDefault();
    if (!this.handle.nativeElement.contains(event.target)) return
    this.draggable = true;
    this.startMouseHandlePosition = event.clientY;
    this.transition = false;
  }

  mousemove(event: MouseEvent) {
    event.stopPropagation();
    event.preventDefault();
    if (!this.draggable) return

    // драг вверх
    if (this.startMouseHandlePosition < event.clientY) {
      this.canUp = true;


      if (this.handlePosition > this.window.nativeElement.offsetHeight - 40) {
        this.canDown = false;
        this.handlePosition = this.window.nativeElement.offsetHeight - 40;
        this.scrollValue = 100;
      }
      
      if (this.canDown) {
        this.handlePosition -= this.startMouseHandlePosition - event.clientY;
        this.startMouseHandlePosition = event.clientY  
        this.scrollValue = Math.round(this.handlePosition * 100 / (this.windowHeight - 40));

        this.containerPosition = -(this.containerHeight - this.windowHeight) / 100 * this.scrollValue;
        
      }
    }

    // драг вниз
    if (this.startMouseHandlePosition > event.clientY) {
      this.canDown = true;


      if (this.handlePosition < 0) {
        this.canUp = false;
        this.handlePosition = 0;
        this.scrollValue = 0;
      }


      if (this.canUp) {
        this.handlePosition -= this.startMouseHandlePosition - event.clientY;
        this.startMouseHandlePosition = event.clientY   
        this.scrollValue = Math.round(this.handlePosition * 100 / (this.windowHeight - 40));

        this.containerPosition = -(this.containerHeight - this.windowHeight) / 100 * this.scrollValue;
      }  
    }

  }

  mouseup(event: MouseEvent) {
    if (!this.draggable) return;
    this.draggable = false;
    this.startMouseHandlePosition = this.handlePosition;
    this.transition = true;
  }

  mouseleave(event: MouseEvent) {
    this.mouseup(event)
  }

  mousescroll(event: WheelEvent) {
    event.stopPropagation();
    event.preventDefault();

    let prevHandlePosition = this.handlePosition;
    let nextHandlePosition = prevHandlePosition + event.deltaY / 5;

    // скролл вверх
    if (prevHandlePosition > nextHandlePosition) {
      this.canDown = true;


      if (nextHandlePosition < 0) {
        this.canUp = false;
        this.handlePosition = 0;
        this.scrollValue = 0;
      }


      if (this.canUp) {
        this.handlePosition = nextHandlePosition;
        this.scrollValue = Math.round(this.handlePosition * 100 / (this.windowHeight - 40));
        this.containerPosition = -(this.containerHeight - this.windowHeight) / 100 * this.scrollValue;
      }      
    }

    // Скролл вниз
    if (prevHandlePosition < nextHandlePosition) {
      this.canUp = true;
      // this.container.nativeElement


      if (nextHandlePosition > this.window.nativeElement.offsetHeight - 40) {
        this.canDown = false;
        this.handlePosition = this.window.nativeElement.offsetHeight - 40;
        this.scrollValue = 0;
      }


      if (this.canDown) {
        this.handlePosition = nextHandlePosition;
        this.scrollValue = Math.round(this.handlePosition * 100 / (this.windowHeight - 40));
        this.containerPosition = -(this.containerHeight - this.windowHeight) / 100 * this.scrollValue;
      }  
    }
  }
}
