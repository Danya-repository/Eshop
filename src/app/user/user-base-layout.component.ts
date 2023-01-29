import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component
} from '@angular/core';
import {ActualComponentInterface} from "../shared/components/scroll-window/scroll-window.component";

@Component({
  selector: 'app-user-base-layout',
  templateUrl: './user-base-layout.component.html',
  styleUrls: ['./user-base-layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserBaseLayoutComponent implements AfterViewInit {

  activeComponent!: ActualComponentInterface;

  constructor(private changeDetector: ChangeDetectorRef) { }

  onActivate($event: any) {
    this.activeComponent = {element: $event, position: 2};
  }

  ngAfterViewInit(): void {
    this.changeDetector.detectChanges();
  }
}
