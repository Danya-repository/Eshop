import {
  AfterContentInit,
  AfterViewInit,
  Component,
  ElementRef,
  Input, OnChanges,
  OnDestroy,
  OnInit, QueryList, Renderer2,
  SimpleChanges,
  ViewChild, ViewChildren
} from '@angular/core';
import {ProductInterface} from "../../models/product.interface";
import {ProductCarouselService} from "../../services/product-carousel.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-product-carousel',
  templateUrl: './product-carousel.component.html',
  styleUrls: ['./product-carousel.component.scss']
})
export class ProductCarouselComponent implements OnInit, OnDestroy, AfterViewInit {

  subService: Subscription = new Subscription();

  @Input() carouselItems: ProductInterface[] = [];
  @Input() countOfSlideToDisplay: number = 0;
  @ViewChild('carouselWindow', {static: true}) carouselWindow: ElementRef | undefined;
  @ViewChild('carouselTrack', {static: true}) carouselTrack: ElementRef | undefined;
  @ViewChildren('carouselSlides') carouselSlides: QueryList<any> = new QueryList<any>()

  arrowsState = {
    nextVisible: true,
    prevVisible: false
  };

  constructor(
    private productCarouselService: ProductCarouselService,
    private renderer: Renderer2
  ) {
  }

  ngOnInit(): void {
    this.arrowsState = this.productCarouselService.state.arrowsState;
  }

  ngAfterViewInit(): void {
    this.productCarouselService.state.windowWidth = this.carouselWindow?.nativeElement.offsetWidth;
    this.productCarouselService.state.itemWidth = Math.round(this.carouselWindow?.nativeElement.offsetWidth / this.countOfSlideToDisplay);
    this.productCarouselService.state.countSlides = this.carouselSlides.length
    this.productCarouselService.state.countOfSlideToDisplay = this.countOfSlideToDisplay
    this.productCarouselService.state.trackWidth = this.productCarouselService.state.itemWidth * this.productCarouselService.state.countSlides;

    this.renderer.setStyle(this.carouselTrack?.nativeElement, 'width', `${this.productCarouselService.state.trackWidth}px`)
    this.carouselSlides.map(carouselItem => {
      this.renderer.setStyle(carouselItem.nativeElement, 'width', `${this.productCarouselService.state.itemWidth}px`)
    })
  }

  changeSlide() {
    this.productCarouselService.actualizeArrowButtons()
    this.renderer.setStyle(this.carouselTrack?.nativeElement, 'transform', `translateX(${this.productCarouselService.state.currentTrackPosition}px)`);
  }

  ngOnDestroy(): void {}
}
