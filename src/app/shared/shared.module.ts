import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ScrollWindowComponent } from "./components/scroll-window/scroll-window.component";

@NgModule({
    declarations: [
        ScrollWindowComponent
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