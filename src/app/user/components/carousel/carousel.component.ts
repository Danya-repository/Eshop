import {AfterContentInit, Component, ElementRef, Input, OnChanges, OnDestroy, ViewChild} from '@angular/core';
import {CarouselService} from "../../../shared/services/carousel.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  providers: [CarouselService]
})
export class CarouselComponent implements OnChanges, OnDestroy, AfterContentInit {

  carouselItems: any = [
    {text:'Первый слайд', urlImage: 'assets/carousel-plug.jpg'},
    {text:'Второй слайд', urlImage: 'assets/carousel-plug.jpg'},
    {text:'Второй слайд', urlImage: 'assets/carousel-plug.jpg'}
  ];
  @Input() countOfSlideToDisplay: number = 0;
  @ViewChild('carouselWindow', {static: true}) carouselWindow: ElementRef | undefined;
  @ViewChild('carouselTrack', {static: true}) carouselTrack: ElementRef | undefined;
  sub: Subscription = new Subscription();

  constructor(private carouselService: CarouselService) {}

  ngAfterContentInit(): void {
    this.carouselService.initialize(this.carouselWindow, this.carouselTrack)
    this.carouselService.actualizeArrowButtons();
  }

  ngOnChanges(): void {
    this.carouselService.state
        .setCurrentTrackPosition(0)
        .setCurrentSlide(0)
        .setCountSlides(this.carouselItems.length)
        .setCountOfSlideToDisplay(this.countOfSlideToDisplay)
  }

  next() {
    this.carouselService.nextSlide()
  }

  prev() {
    this.carouselService.prevSlide()
  }

  down(event: MouseEvent) {
    this.carouselService.onMouseDown(event)
  }

  up(event: MouseEvent) {
    this.carouselService.onMouseUp(event)
  }

  move(event: MouseEvent) {
    this.carouselService.onMouseMove(event)
  }

  leave() {
    this.carouselService.onMouseLeave();
  }

  get isArrowPrev() {
    return this.carouselService.state.isArrowPrev;
  }

  get isArrowNext() {
    return this.carouselService.state.isArrowNext;
  }

  get trackWidth() {
    return this.carouselService.state.trackWidth;
  }

  get transition() {
    return this.carouselService.state.transition;
  }

  get currentTrackPosition() {
    return 'translateX(' + this.carouselService.state.currentTrackPosition + 'px)'
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
