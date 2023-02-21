import {Component, Injectable, TemplateRef} from '@angular/core';
import {Subject} from "rxjs";

@Injectable()
export class ModalWindowService {

  private $modalRenderElementStream: Subject<any> = new Subject<any>()

  constructor() {}

  renderElement(element: any) {
    this.$modalRenderElementStream.next(element);
  }

  getElement() {
    return this.$modalRenderElementStream;
  }
}
