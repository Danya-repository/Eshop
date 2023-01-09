import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ScrollWindowService } from 'src/app/shared/services/scroll-window.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements AfterViewInit {

  constructor(private scrollWindowService: ScrollWindowService) { }
  ngAfterViewInit(): void {
    this.scrollWindowService.$stream.next(null);
  }
}
