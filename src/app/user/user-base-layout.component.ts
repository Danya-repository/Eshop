import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ScrollWindowService } from '../shared/services/scroll-window.service';

@Component({
  selector: 'app-user-base-layout',
  templateUrl: './user-base-layout.component.html',
  styleUrls: ['./user-base-layout.component.scss']
})
export class UserBaseLayoutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
