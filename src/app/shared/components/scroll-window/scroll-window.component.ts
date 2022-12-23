import { AfterContentChecked, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ScrollWindowService } from '../../services/scroll-window.service';

@Component({
  selector: 'app-scroll-window',
  templateUrl: './scroll-window.component.html',
  styleUrls: ['./scroll-window.component.scss'],
  providers: [ScrollWindowService]
})
export class ScrollWindowComponent implements AfterContentChecked {

  @ViewChild('container', {static: true}) container!: ElementRef;
  @ViewChild('handle', {static: false}) handle!: ElementRef;
  @ViewChild('window', {static: true}) window!: ElementRef;
  @ViewChild('strip', {static: false}) strip!: ElementRef;

  
  constructor(protected scrollWindowService: ScrollWindowService) { }

  ngAfterContentChecked(): void {
    this.scrollWindowService.initialize(this.window, this.container, this.strip, this.handle)
  }

  mousedown(event: MouseEvent) {
    event.stopPropagation();
    event.preventDefault();

    this.scrollWindowService.mousedown(event)
  }

  mousemove(event: MouseEvent) {
    event.stopPropagation();
    event.preventDefault();
    
    this.scrollWindowService.mousemove(event)
  }

  mouseup() {
    this.scrollWindowService.mouseup()
  }

  mouseleave() {
    this.scrollWindowService.mouseleave()
  }

  mousescroll(event: WheelEvent) {
    event.stopPropagation();
    event.preventDefault();

    this.scrollWindowService.mousescroll(event);
  }
}
