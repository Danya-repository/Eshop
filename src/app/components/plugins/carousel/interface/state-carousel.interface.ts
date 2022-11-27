export interface CarouselState {
  windowWidth: number,
  itemWidth: number,
  trackWidth: number,
  currentSlide: number,
  currentTrackPosition: number,
  startDragTrackPosition: number,
  countSlides: number,
  countOfSlideToDisplay: number,
  mouseState: MouseCarouselState,
  possibleChange: {
    next: boolean,
    prev: boolean
  }
}

interface MouseCarouselState {
  isDown: boolean,
  isUp: boolean,
  position: {
    start: number,
    end: number
  }
}
