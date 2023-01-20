import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {
  ScrollWindowComponent
} from "./components/scroll-window/scroll-window.component";



import {ModalWindowComponent} from './components/modal-window/modal-window.component';

import { ScrollWindowChildComponent } from './components/scroll-window-child/scroll-window-child.component';


@NgModule({
    declarations: [
        ScrollWindowComponent,
        ModalWindowComponent,
        ScrollWindowChildComponent
    ],
    imports: [
        CommonModule,
        RouterModule
    ],
  exports: [
    ScrollWindowComponent,
    ScrollWindowChildComponent
  ]
})
export class SharedModule {

}
