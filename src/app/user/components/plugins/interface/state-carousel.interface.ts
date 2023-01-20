export interface CarouselStateInterface {
  windowWidth: number,
  itemWidth: number,
  trackWidth: number,
  currentSlide: number,
  currentTrackPosition: number,
  startDragTrackPosition: number,
  countSlides: number,
  countOfSlideToDisplay: number,
  mouseIsDown: boolean,
  mouseIsUp: boolean,
  mouseStartPosition: number,
  mouseEndPosition: number,
  isArrowNext: boolean,
  isArrowPrev: boolean,
  transition: boolean
}
