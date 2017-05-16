import { Component, OnInit } from '@angular/core';

import { WeatherParameter, RequestType } from "../../models/weather-parameter.model";

import { WeatherService } from "../../services/weather.service";

@Component({
  selector: 'app-localweather',
  templateUrl: './localweather.component.html',
  styleUrls: ['./localweather.component.css']
})
export class LocalweatherComponent implements OnInit {
  weatherParam: WeatherParameter;

  result: any;

  defaultLatitude: string = '48.4622239';
  defaultLongitude: string = '35.0495592';

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    this.weatherParam = new WeatherParameter();

    this.setCoords();

    this.weatherParam.RequestType = RequestType.ByCoordinates;

    this.weatherService.getWeather(this.weatherParam)
      .subscribe(res => {
        this.result = res;
        console.log(res);
      });
  }

  private setCoords(): void {
    if (!window.navigator.geolocation) {
      window.navigator.geolocation.getCurrentPosition((position) => {
        this.weatherParam.Lat = position.coords.latitude.toString();
        this.weatherParam.Lon = position.coords.longitude.toString();
      });
    } else {
      this.weatherParam.Lat = this.defaultLatitude;
      this.weatherParam.Lon = this.defaultLongitude;
    }

  }

}
