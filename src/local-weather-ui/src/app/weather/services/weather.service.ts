import { Injectable } from '@angular/core';
import { Http } from "@angular/http";

import { BaseApiService } from "./base-api.service";
import { WeatherParameter } from "../models/weather-parameter.model";

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class WeatherService extends BaseApiService {
    baseUrl: string = "http://localhost:61865/"

    constructor(private http: Http) {
        super();
    }

    getWeather(param: WeatherParameter) {
        return this.http.get(this.createRequestUrl(param))
            .map(this.extractData)
            .catch(this.handleError);
    }

    private createRequestUrl(param: WeatherParameter): string {
        return this.baseUrl + "api/weather?" + "RequestType=" + param.RequestType + "&Lat=" + param.Lat + "&Lon=" + param.Lon;
    }
}