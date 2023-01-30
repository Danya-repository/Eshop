import {Directive, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appScrollWindowChild]'
})
export class AppScrollWindowChildDirective {

  constructor(private _template: TemplateRef<any>, private viewContainer: ViewContainerRef) {}

  get template(): TemplateRef<any> {
    return this._template;
  }

}
