import {
  AfterContentChecked, AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  ElementRef,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  ViewChild
} from '@angular/core';
import {CarouselService} from "../../../shared/services/carousel.service";
import {CarouselState} from "../plugins/carousel/carousel-state";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-head-home-carousel',
  templateUrl: './head-home-carousel.component.html',
  styleUrls: ['./head-home-carousel.component.scss'],
  providers: [CarouselService]
})
export class HeadHomeCarouselComponent implements OnChanges, OnDestroy, AfterContentInit {

  carouselItems: any = [
    {text:'Первый слайд', urlImage: 'assets/carousel-plug.jpg'},
    {text:'Второй слайд', urlImage: 'assets/carousel-plug.jpg'},
    {text:'Второй слайд', urlImage: 'assets/carousel-plug.jpg'}
  ];
  @Input() countOfSlideToDisplay: number = 0;
  @ViewChild('carouselWindow', {static: true}) carouselWindow: ElementRef | undefined;
  @ViewChild('carouselTrack', {static: true}) carouselTrack: ElementRef | undefined;
  sub: Subscription = new Subscription();

  constructor(
    public carouselService: CarouselService
  ) {}

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

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
