import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component
} from '@angular/core';

@Component({
  selector: 'app-user-base-layout',
  templateUrl: './user-base-layout.component.html',
  styleUrls: ['./user-base-layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserBaseLayoutComponent implements AfterViewInit {

  constructor(private changeDetector: ChangeDetectorRef) { }

  ngAfterViewInit(): void {
    this.changeDetector.detectChanges();
  }
}
