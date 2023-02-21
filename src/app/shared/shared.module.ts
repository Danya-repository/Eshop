import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {ModalWindowComponent} from './components/modal-window/modal-window.component';
import {AppScrollWindowChildDirective} from "./directives/app-scroll-window-child.directive";
import {ScrollWindowComponent} from "./components/scroll-window/scroll-window.component";
import {ModalWindowService} from "./services/modal-window.service";
import {SignInUpComponent} from "../user/components/sign-in-up/sign-in-up.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";


@NgModule({
    declarations: [
        ScrollWindowComponent,
        ModalWindowComponent,
        AppScrollWindowChildDirective,
        SignInUpComponent
    ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
    providers: [ModalWindowService],
    exports: [
        ScrollWindowComponent,
        AppScrollWindowChildDirective,
        ModalWindowComponent
    ]
})
export class SharedModule {

}
