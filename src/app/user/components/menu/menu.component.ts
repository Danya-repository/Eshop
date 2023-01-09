import {AfterViewInit, Component, OnInit} from '@angular/core';
import {MenuService} from "../../../shared/services/menu.service";
import {IButtonState} from "../../../shared/models/buttonState.interface";
import { ScrollWindowService } from 'src/app/shared/services/scroll-window.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit, AfterViewInit {

  buttons: IButtonState[] = [];

  constructor(private menuService: MenuService,
    private scrollWindowService: ScrollWindowService) {}
  ngAfterViewInit(): void {
    this.scrollWindowService.$stream.next(null);
  }

  ngOnInit(): void {
    this.buttons = this.menuService.getState;
  }
}
