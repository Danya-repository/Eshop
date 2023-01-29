import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";

import {ModalWindowComponent} from './components/modal-window/modal-window.component';

import {ScrollWindowChildComponent} from './components/scroll-window-child/scroll-window-child.component';
import {AppScrollWindowChildDirective} from "./directives/app-scroll-window-child.directive";
import {ScrollWindowComponent} from "./components/scroll-window/scroll-window.component";


@NgModule({
    declarations: [
        ScrollWindowComponent,
        ModalWindowComponent,
        ScrollWindowChildComponent,
        AppScrollWindowChildDirective
    ],
    imports: [
        CommonModule,
        RouterModule
    ],
  exports: [
    ScrollWindowComponent,
    ScrollWindowChildComponent,
    AppScrollWindowChildDirective
  ]
})
export class SharedModule {

}
