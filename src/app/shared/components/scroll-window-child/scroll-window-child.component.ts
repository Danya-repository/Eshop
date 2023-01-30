import {
  AfterContentInit,
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges, OnInit,
  Output,
  SimpleChanges, TemplateRef, ViewChild, ViewContainerRef
} from '@angular/core';
import {AppScrollWindowChildDirective} from "../../directives/app-scroll-window-child.directive";
import {HomePageComponent} from "../../../user/components/home-page/home-page.component";


@Component({
  selector: 'app-scroll-window-child',
  templateUrl: './scroll-window-child.component.html',
  styleUrls: ['./scroll-window-child.component.scss']
})
export class ScrollWindowChildComponent implements AfterViewInit {

  @Input()
  contentChild!: TemplateRef<any> | undefined;

  @Output()
  resizeHandler: EventEmitter<any> = new EventEmitter<any>();

  constructor() {}

  ngAfterViewInit(): void {
    // console.log('resize')
    this.resizeHandler.emit();
  }

}
