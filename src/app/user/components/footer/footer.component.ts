import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ScrollWindowService } from 'src/app/shared/services/scroll-window.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements AfterViewInit {

  constructor(private scrollWindowService: ScrollWindowService) { }
  ngAfterViewInit(): void {
    this.scrollWindowService.$stream.next(null);
  }
}
