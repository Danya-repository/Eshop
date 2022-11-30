import {
  Component,
  DoCheck,
  ElementRef,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  ViewChild
} from '@angular/core';
import {ProductInterface} from "../../../models/product.interface";
import {CarouselState} from "../../plugins/carousel/carousel-state";
import {Subscription} from "rxjs";
import {CarouselService} from "../../../services/carousel.service";

@Component({
  selector: 'app-product-carousel',
  templateUrl: './product-carousel.component.html',
  styleUrls: ['./product-carousel.component.scss']
})
export class ProductCarouselComponent implements OnInit, OnDestroy, OnChanges, DoCheck {

  private carouselStreamSub = new Subscription();

  @Input() state: CarouselState = new CarouselState();
  @Input() carouselItems: ProductInterface[] = [];
  @Input() countOfSlideToDisplay: number = 0;
  @ViewChild('carouselWindow', {static: true}) carouselWindow: ElementRef | undefined;
  @ViewChild('carouselTrack', {static: true}) carouselTrack: ElementRef | undefined;

  carouselService: CarouselService = new CarouselService()
  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    this.carouselService.stateService.setState(
      this.carouselService.stateService.getState()
        .setCurrentTrackPosition(0)
        .setCurrentSlide(0)
        .setCountSlides(this.carouselItems.length)
        .setCountOfSlideToDisplay(this.countOfSlideToDisplay)
    )
  }

  ngOnInit(): void {
    this.carouselService.stateService.$carouselStateStream.subscribe((state) => {
      this.state = state
    })
  }

  ngDoCheck(): void {
    this.carouselService.initialize(this.carouselWindow, this.carouselTrack)
    this.carouselService.actualizeArrowButtons();
  }

  ngOnDestroy(): void {
    this.carouselStreamSub.unsubscribe();
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
}
