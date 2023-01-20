import {
  AfterContentInit,
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  TemplateRef,
  ViewContainerRef
} from '@angular/core';

@Component({
  selector: 'app-scroll-window-child',
  templateUrl: './scroll-window-child.component.html',
  styleUrls: ['./scroll-window-child.component.scss']
})
export class ScrollWindowChildComponent implements AfterViewInit {

  @Output()
  public childRenderedReady: EventEmitter<any> = new EventEmitter<any>();

  @Input()
  contentChild?: TemplateRef<any>;

  constructor() {}

  ngAfterViewInit(): void {
    this.childRenderedReady.emit()
  }
}
