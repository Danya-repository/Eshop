import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {CarouselService} from "../../../../shared/services/carousel.service";
import {Subscription} from "rxjs";
import {CarouselState} from "../../../components/plugins/carousel/carousel-state";

@Component({
  selector: 'app-carousel-dots',
  templateUrl: './carousel-dots.component.html',
  styleUrls: ['./carousel-dots.component.scss']
})
export class CarouselDotsComponent implements OnInit, OnDestroy {

  @Input() carouselSlides = [];
  carouselState: CarouselState = new CarouselState();
  sub: Subscription = new Subscription();

  constructor(
    private carouselService: CarouselService
  ) { }

  ngOnInit(): void {
    this.carouselState = this.carouselService.getState();
  }

  setSlide(idx: number) {
    this.carouselService.goToSlide(idx)
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
