import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';
import {appEffects} from '@store/effects.main';
import {appReducers} from '@store/reducers.main';
import { MinutesToHoursPipe } from '@services/hours-to-minuts.pipe';
import {LoadingBarModule } from '@components/loading-bar/loading-bar.module';
import { Containers } from '@app/containers';
import { SharedComponentsModule } from '@components/shared-components.module';

@NgModule({
  declarations: [
    AppComponent,
    MinutesToHoursPipe,
    ...Containers
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    LoadingBarModule,
    SharedComponentsModule,
    StoreModule.forRoot( appReducers),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot(appEffects)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
