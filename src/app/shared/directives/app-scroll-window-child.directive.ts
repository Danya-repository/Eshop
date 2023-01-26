import {ComponentRef, Directive, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appScrollWindowChild]'
})
export class AppScrollWindowChildDirective {
  constructor(private template: TemplateRef<any>) {}

  get Template(): TemplateRef<any> {
    return this.template;
  }
}
