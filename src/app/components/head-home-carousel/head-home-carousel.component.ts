import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {CarouselService} from "../../services/carousel.service";
import {CarouselState} from "../plugins/carousel/carousel-state";

@Component({
  selector: 'app-head-home-carousel',
  templateUrl: './head-home-carousel.component.html',
  styleUrls: ['./head-home-carousel.component.scss'],
  providers: [CarouselService]
})
export class HeadHomeCarouselComponent implements OnInit {

  state: CarouselState = new CarouselState();
  carouselItems: any = [
    {text:'Первый слайд', urlImage: 'assets/carousel-plug.jpg'},
    {text:'Второй слайд', urlImage: 'assets/carousel-plug.jpg'},
    {text:'Третий слайд', urlImage: 'assets/carousel-plug.jpg'}
  ];
  @Input() countOfSlideToDisplay: number = 0;
  @ViewChild('carouselWindow', {static: true}) carouselWindow: ElementRef | undefined;
  @ViewChild('carouselTrack', {static: true}) carouselTrack: ElementRef | undefined;

  constructor(
    protected carouselService: CarouselService
  ) {}

  ngOnChanges(): void {
    this.carouselService.setState(
      this.carouselService.getState()
        .setCurrentTrackPosition(0)
        .setCurrentSlide(0)
        .setCountSlides(this.carouselItems.length)
        .setCountOfSlideToDisplay(this.countOfSlideToDisplay)
    )
  }

  ngOnInit(): void {
    this.carouselService.$carouselStateStream.subscribe((state) => {
      this.state = state
    })
  }

  ngDoCheck(): void {
    this.carouselService.initialize(this.carouselWindow, this.carouselTrack)
    this.carouselService.actualizeArrowButtons();
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
