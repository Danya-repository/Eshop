import { AfterContentChecked, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ScrollWindowService } from '../../services/scroll-window.service';

@Component({
  selector: 'app-scroll-window',
  templateUrl: './scroll-window.component.html',
  styleUrls: ['./scroll-window.component.scss'],
  providers: [ScrollWindowService]
})
export class ScrollWindowComponent implements AfterContentChecked, OnInit {

  @ViewChild('container', {static: true}) container!: ElementRef;
  @ViewChild('handle', {static: false}) handle!: ElementRef;
  @ViewChild('window', {static: true}) window!: ElementRef;
  @ViewChild('strip', {static: false}) strip!: ElementRef;

  // scrollWindowService.containerPosition
  // scrollWindowService.draggable
  // scrollWindowService.containerHeight
  // scrollWindowService.windowHeight
  // scrollWindowService.visible

  constructor(protected scrollWindowService: ScrollWindowService) { }

  ngOnInit(): void {

  }

  ngAfterContentChecked(): void {
    this.scrollWindowService.initialize(this.window, this.container, this.strip)
  }

  mousedown(event: MouseEvent) {
    if (!this.handle.nativeElement.contains(event.target)) return
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

  mousewheel(event: WheelEvent) {
    event.stopPropagation();
    event.preventDefault();

    this.scrollWindowService.mousescroll(event);
  }

  goToPercentage(event: MouseEvent) {
    if (this.handle.nativeElement.contains(event.target)) return;
    event.stopPropagation();
    event.preventDefault();

    let distanceToTop = this.strip.nativeElement.getBoundingClientRect().top

    this.scrollWindowService.goToPercentage(event, distanceToTop)
  }
}
