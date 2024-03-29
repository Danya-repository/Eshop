import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {ServiceWorkerModule} from '@angular/service-worker';
import {environment} from '../environments/environment';
import {AppRoutingModule} from './app-routing.module';
import {UserBaseLayoutComponent} from './user/user-base-layout.component';
import {UserModule} from "./user/user.module";
import {SharedModule} from './shared/shared.module';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
    declarations: [
        AppComponent,
        UserBaseLayoutComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        UserModule,
        AppRoutingModule,
        SharedModule,
        HttpClientModule,
        ServiceWorkerModule.register('ngsw-worker.js', {
            enabled: environment.production,
            // Register the ServiceWorker as soon as the application is stable
            // or after 30 seconds (whichever comes first).
            registrationStrategy: 'registerWhenStable:30000'
        })
    ],
    exports: [
        SharedModule
    ]
})

export class AppModule {
}
