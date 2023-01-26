import {
  AfterContentInit,
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges, OnInit,
  Output,
  SimpleChanges, ViewChild, ViewContainerRef
} from '@angular/core';
import {AppScrollWindowChildDirective} from "../../directives/app-scroll-window-child.directive";
import {HomePageComponent} from "../../../user/components/home-page/home-page.component";


@Component({
  selector: 'app-scroll-window-child',
  templateUrl: './scroll-window-child.component.html',
  styleUrls: ['./scroll-window-child.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ScrollWindowChildComponent implements AfterContentInit, AfterViewInit, OnInit {

  @Output()
  public childRenderedReady: EventEmitter<any> = new EventEmitter<any>();

  @Input()
  contentChild!: AppScrollWindowChildDirective;

  @ViewChild('ref', {read: ViewContainerRef,static: false}) ref!: ViewContainerRef;

  constructor() {}

  ngAfterContentInit(): void {
    // this.ref.createEmbeddedView(this.contentChild.Template)
  }

  ngAfterViewInit(): void {
    // this.ref.createEmbeddedView(this.contentChild.Template)
    this.childRenderedReady.emit();
  }

  ngOnInit(): void {
  }


}
