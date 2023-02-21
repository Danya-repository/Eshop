import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  ViewChild
} from '@angular/core';
import {ProductInterface} from "../../../shared/models/product.interface";
import {CarouselState} from "../plugins/carousel/carousel-state";
import {CarouselService} from "../../../shared/services/carousel.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-product-carousel',
  templateUrl: './product-carousel.component.html',
  styleUrls: ['./product-carousel.component.scss'],
  providers: [CarouselService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductCarouselComponent implements OnInit, OnChanges, OnDestroy {

  state: CarouselState = new CarouselState();
  @Input() carouselItems: ProductInterface[] = [];
  @Input() countOfSlideToDisplay: number = 0;
  @ViewChild('carouselWindow', {static: true}) carouselWindow!: ElementRef;
  @ViewChild('carouselTrack', {static: true}) carouselTrack!: ElementRef;
  sub: Subscription = new Subscription();

  @Input()
  isLoad: boolean = false;

  constructor(public carouselService: CarouselService) {}

  ngOnInit(): void {
    this.carouselService.actualizeArrowButtons();
  }

  ngOnChanges(): void {
    this.carouselService.state
        .setCurrentTrackPosition(0)
        .setCurrentSlide(0)
        .setCountSlides(this.carouselItems?.length)
        .setCountOfSlideToDisplay(this.countOfSlideToDisplay)
    this.carouselService.initialize(this.carouselWindow, this.carouselTrack)
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

  get itemWidth() {
    return this.carouselService.state.itemWidth;
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
