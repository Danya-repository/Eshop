import {AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component} from '@angular/core';

@Component({
  selector: 'app-admin-base-layout',
  templateUrl: './admin-base-layout.component.html',
  styleUrls: ['./admin-base-layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdminBaseLayoutComponent implements AfterViewInit {

  constructor(private changeDetector: ChangeDetectorRef) { }

  ngAfterViewInit(): void {
    this.changeDetector.detectChanges();
  }
}
