import {Injectable} from '@angular/core';
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductCarouselService {

  state = {
    windowWidth: 0,
    itemWidth: 0,
    trackWidth: 0,
    currentSlide: 0,
    currentTrackPosition: 0,
    countSlides: 0,
    countOfSlideToDisplay: 0,
    arrowsState: {
      nextVisible: true,
      prevVisible: false
    }
  }

  $carouselStream: Subject<any> = new Subject<any>();

  constructor() {}

  initialization() {}

  actualizeArrowButtons() {
    this.state.arrowsState.nextVisible = !(this.state.currentSlide + this.state.countOfSlideToDisplay >= this.state.countSlides);
    this.state.arrowsState.prevVisible = !(this.state.currentSlide <= 0);
  }

  nextSlide() {
    this.state.currentSlide++;
    this.state.currentTrackPosition -= this.state.itemWidth;
  }

  prevSlide() {
    this.state.currentSlide--;
    this.state.currentTrackPosition += this.state.itemWidth;
  }
}
