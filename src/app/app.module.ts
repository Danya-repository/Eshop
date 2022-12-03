import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {ServiceWorkerModule} from '@angular/service-worker';
import {environment} from '../environments/environment';
import {AppRoutingModule} from './app-routing.module';
import {UserBaseLayoutComponent} from './user/user-base-layout.component';
import {UserModule} from "./user/user.module";
import {AdminBaseLayoutComponent} from "./admin/components/admin-base-layout/admin-base-layout.component";
import {AdminModule} from "./admin/admin.module";


@NgModule({
  declarations: [
    AppComponent,
    AdminBaseLayoutComponent,
    UserBaseLayoutComponent
  ],
  imports: [
    BrowserModule,
    UserModule,
    AdminModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {}
