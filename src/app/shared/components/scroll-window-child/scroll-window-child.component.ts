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
  styleUrls: ['./scroll-window-child.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ScrollWindowChildComponent implements AfterViewInit {

  @Input()
  contentChild!: TemplateRef<any> | undefined;

  @Input()
  resizeHandler!: Function;

  constructor() {}

  ngAfterViewInit(): void {
    this.resizeHandler();
  }
}
