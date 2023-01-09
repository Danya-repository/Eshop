import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appRelationToTopPosition]'
})
export class RelationToTopPositionDirective {

  @Input("appRelationToTopPosition") topPosition: number = 0;
  @HostBinding("style.top") get getTopPosition() {
    return `${this.topPosition}px`;
  }

  constructor() { }

}
