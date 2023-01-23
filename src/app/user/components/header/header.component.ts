import {Component} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  basketOpen: boolean = false;
  countItemBasket: number = 0;

  constructor() { }

  basketToggle() {
    this.basketOpen = !this.basketOpen;
  }
}
