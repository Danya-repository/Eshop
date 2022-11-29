import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnDestroy,
  OnInit,
  QueryList,
  Renderer2, RendererFactory2,
  ViewChild,
  ViewChildren
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
    next: true,
    prev: false
  };

  constructor(
    private productCarouselService: ProductCarouselService,
  ) {
  }

  ngOnInit(): void {
    this.arrowsState = this.productCarouselService.getPossibleChange;
  }

  ngAfterViewInit(): void {
    this.productCarouselService.initialization(this.carouselWindow, this.carouselTrack, this.carouselSlides, this.countOfSlideToDisplay)
  }

  ngOnDestroy(): void {}
}
