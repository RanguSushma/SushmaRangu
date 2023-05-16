import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
/*import { CurrentComponent } from './current/current.component';
import { ForecastComponent } from './forecast/forecast.component';*/
import { HeaderComponent } from './header/header.component';
/*import { weatherRounting } from './weather.routing';*/
import { routingComponents } from './app-routing.module';
import { WeatherService } from './weather.service';


@NgModule({
  declarations: [
    AppComponent,
    /*CurrentComponent,
    ForecastComponent,*/
    HeaderComponent,
    routingComponents,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
    /*weatherRounting*/
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
