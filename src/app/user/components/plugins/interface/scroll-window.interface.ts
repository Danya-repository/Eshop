export interface ScrollWindowInterface {
  startMouseHandlePosition: number;
  handlePosition: number;
  containerPosition: number;
  scrollPercentage: number;
  slowdown: number;
  draggable: boolean;
  canUp: boolean;
  canDown: boolean;
  transition: boolean;
  visible: boolean;
  windowHeight: number;
  containerHeight: number;
  handleHeight: number;
  visibleTimeout: any;
  disableStripOpacityTransitionTimeout: any;
  stripOpacityTransition: boolean;
}
