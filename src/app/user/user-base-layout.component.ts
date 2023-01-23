import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {ScrollService} from "../shared/services/scroll.service";

@Component({
  selector: 'app-user-base-layout',
  templateUrl: './user-base-layout.component.html',
  styleUrls: ['./user-base-layout.component.scss'],
  providers: [ScrollService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserBaseLayoutComponent implements OnInit {

  routeActualComponent!: any;

  constructor(private scrollService: ScrollService) { }

  ngOnInit(): void {}

  onActivate($event: any) {
    this.routeActualComponent = $event;
    // console.log($event);
  }
}
