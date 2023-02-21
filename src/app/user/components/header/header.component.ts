import {Component} from '@angular/core';
import {ModalWindowService} from "../../../shared/services/modal-window.service";
import {SignInUpComponent} from "../sign-in-up/sign-in-up.component";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {

  basketOpen: boolean = false;
  countItemBasket: number = 0;

  constructor(private modalWindowService: ModalWindowService) { }

  basketToggle() {
    this.basketOpen = !this.basketOpen;
  }

  loginForm() {
    this.modalWindowService.renderElement(SignInUpComponent)
  }
}
