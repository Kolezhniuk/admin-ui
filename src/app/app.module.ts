import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgxsModule} from '@ngxs/store';
import {environment} from 'src/environments/environment';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {SharedModule} from './modules/shared/shared.module';
import {NgxsReduxDevtoolsPluginModule} from '@ngxs/devtools-plugin';
import {NgxsLoggerPluginModule} from '@ngxs/logger-plugin';
import {SidebarComponent} from './components/sidebar/sidebar.component';
import {HomeComponent} from './components/home/home.component';
import {AuthComponent} from "./components/auth/auth.component";
import {AuthState} from "./core/state/auth.state";
import {AuthGuard} from "./core/guards/auth.guard";
import {ReactiveFormsModule} from "@angular/forms";
import {LoadingComponent} from './modules/shared/components/loading/loading.component';
import {NgxsStoragePluginModule} from '@ngxs/storage-plugin';
import { RequestModule } from './modules/request/request.module';
import { MapModule } from './modules/map/map.module';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    SidebarComponent,
    HomeComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    NgxsModule.forRoot([AuthState], {
      developmentMode: !environment.production
    }),
    NgxsStoragePluginModule.forRoot({key: 'auth'}),
    NgxsReduxDevtoolsPluginModule.forRoot(),

    NgxsLoggerPluginModule,
    SharedModule,
    RequestModule,
    MapModule
  ],
  providers: [
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
