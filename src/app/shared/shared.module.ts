import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ScrollWindowComponent } from "./components/scroll-window/scroll-window.component";
import { ScrollVisibleDirective } from './directives/scroll-visible.directive';
import { ScrollStripDirective } from './directives/scroll-strip.directive';

@NgModule({
    declarations: [
        ScrollWindowComponent,
        ScrollVisibleDirective,
        ScrollStripDirective
    ],
    imports: [
        CommonModule,
        RouterModule
    ],
    exports: [
        ScrollWindowComponent
    ]
})
export class SharedModule {

}
