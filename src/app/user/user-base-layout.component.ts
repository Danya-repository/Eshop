import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ComponentRef,
  ContentChild,
  OnInit,
  TemplateRef, ViewChild
} from '@angular/core';
import {ScrollService} from "../shared/services/scroll.service";
import {RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-user-base-layout',
  templateUrl: './user-base-layout.component.html',
  styleUrls: ['./user-base-layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserBaseLayoutComponent  {

  constructor() { }
}
