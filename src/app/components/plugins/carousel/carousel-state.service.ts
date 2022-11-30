import {ICarouselState} from "./interface/state-carousel.interface";
import {Injectable} from "@angular/core";
import {BehaviorSubject} from "rxjs";
import {CarouselState} from "./carousel-state";

@Injectable({
  providedIn: 'root'
})
export class CarouselStateService {

  protected state: CarouselState = new CarouselState();

  public $carouselStateStream = new BehaviorSubject(this.state);

  constructor() {}

  setState(state: ICarouselState) {
    if (state instanceof CarouselState) {
      this.$carouselStateStream.next(state);
    }
  }

  getState() {
    return this.state;
  }
}
