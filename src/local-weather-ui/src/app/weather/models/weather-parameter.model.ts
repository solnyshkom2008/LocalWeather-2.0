export class WeatherParameter {
    RequestType: RequestType;
    Format: DataFormat
    UnitType: UnitType;
    q: string;
    Lat: string;
    Lon: string;
}

export enum RequestType {
    ByCityName = 0,
    ByCoordinates = 1,
    ByCityId = 2
}

export enum DataFormat {
    jSon = 0,
    Xml = 1,
    Html = 2,
    WeatherObject = 3,

}

export enum UnitType {
    Imperial = 0,
    Metrics = 1
}

export class Coord {
    lon: number;
    lat: number;
}

export class Sys {
    message: number;
    country: string;
    sunrise: number;
    sunset: number;
}

export class Weather {
    id: number;
    main: string;
    description: string;
    icon: string;
}

export class Main {
    temp: number;
    pressure: number;
    humidity: number;
    temp_min: number;
    temp_max: number;
}

export class Wind {
    speed: number;
    deg: number;
}

export class Rain {
    __invalid_name__3h: number;
}

export class Clouds {
    all: number;
}

export class WeatherObject {
    coord: Coord;
    sys: Sys;
    weather: Weather[];
    base: string;
    main: Main;
    wind: Wind;
    rain: Rain;
    clouds: Clouds;
    dt: number;
    id: number;
    name: string;
    cod: number;
}