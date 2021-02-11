import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  url = 'https://api.openweathermap.org/data/2.5/weather';
  apiKey = '22a03e11c1079d2fafbc6aea4d04fed7';

  constructor(private http: HttpClient) { }

  getWeatherDataByCoords(lat, lon){
    let params = new HttpParams()
    .set('lat', lat)
    .set('lon', lon)
    .set('units','metric')
    .set('appid', this.apiKey)

    return this.http.get(this.url, {params});
  }
  getWeatherDataByCityName(city:string){
    let params = new HttpParams()
    .set('q',city)
    .set('units','metric')
    .set('appid',this.apiKey)

    return this.http.get(this.url, {params});
  }
}
