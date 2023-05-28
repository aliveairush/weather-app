import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { WeatherData } from './types/weather.type';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private readonly WEATHER_URL = environment.WEATHER_URL;
  private readonly WEATHER_API = environment.WEATHER_API_KEY;

  constructor(private http: HttpClient) {}

  searchWeatherByCity(cityName = ''): Observable<WeatherData> {
    if (cityName === '') {
      throw new Error('Parameter "City" can\'t be null');
    }

    return this.http.get<WeatherData>(this.WEATHER_URL, {
      params: new HttpParams()
        .set('q', cityName)
        .set('units', 'metric') // Чтобы температура приходила в Цельсиях
        .set('appid', this.WEATHER_API),
    });
  }
}
