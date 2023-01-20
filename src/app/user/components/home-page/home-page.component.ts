import {AfterContentInit, Component} from '@angular/core';
import {ScrollService} from "../../../shared/services/scroll.service";

@Component({
  selector: 'app-home',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements AfterContentInit{

  // constructor() {}
  constructor(private scrollService: ScrollService) { }

  ngAfterContentInit(): void {
    this.scrollService.$scrollResizeStream.next({})
  }


}
