import { Injectable } from '@angular/core';
import { CurrentWeather } from './current-weather';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  current:CurrentWeather = new CurrentWeather('Bangalore', '80', './assets/sun.png', 'sunny', '96', '72')

  constructor() { }
  weatherNow(){
    return this.current;
  }
}
