import { Injectable } from '@angular/core';
import { Http } from "@angular/http";

import { WeatherParameter } from "../models/weather-parameter.model";

@Injectable()
export class WeatherService {

    constructor(http: Http) { }

    getWeather(param: WeatherParameter) {

    }
}