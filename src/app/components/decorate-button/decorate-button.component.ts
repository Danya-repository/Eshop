import {Component, Input, OnInit} from '@angular/core';
import {TabStateInterface} from "../../models/tab-state.interface";

@Component({
  selector: 'app-decorate-button',
  templateUrl: './decorate-button.component.html',
  styleUrls: ['./decorate-button.component.scss']
})
export class DecorateButtonComponent implements OnInit {

  @Input() active: boolean = false;

  constructor() {
  }

  ngOnInit(): void {}

}
