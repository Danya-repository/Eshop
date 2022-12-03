import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ButtonStateInterface} from "../../../../shared/models/buttonState.interface";

@Component({
  selector: 'app-decorate-button',
  templateUrl: './decorate-button.component.html',
  styleUrls: ['./decorate-button.component.scss']
})
export class DecorateButtonComponent implements OnInit {

  @Input() buttonData: ButtonStateInterface = {identifier: ''}

  constructor() {}

  ngOnInit(): void {}
}
