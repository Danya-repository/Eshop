import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {CarouselService} from "../../services/carousel.service";
import {Subscription} from "rxjs";
import {CarouselState} from "../plugins/carousel/carousel-state";

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
    this.sub = this.carouselService.$carouselStateStream.subscribe((carouselState) => {
      this.carouselState = carouselState;
    })
  }

  setSlide(idx: number) {
    this.carouselService.goToSlide(idx)
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
