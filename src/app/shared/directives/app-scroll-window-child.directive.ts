import {Directive, TemplateRef} from '@angular/core';

@Directive({
  selector: '[appScrollWindowChild]'
})
export class AppScrollWindowChildDirective {

  constructor(private _template: TemplateRef<any>) {}

  get template(): TemplateRef<any> {
    return this._template;
  }

}
