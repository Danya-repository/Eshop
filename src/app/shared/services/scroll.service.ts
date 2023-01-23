import {Injectable} from '@angular/core';
import {Subject} from "rxjs";

@Injectable()
export class ScrollService {
  public $scrollResizeStream: Subject<any> = new Subject<any>()

  constructor() {}
}
