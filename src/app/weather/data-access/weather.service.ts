import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map, tap } from 'rxjs';
import { LocalStorageService } from 'src/app/shared/data-access/local-storage.service';
import { environment } from 'src/environments/environment';
import WeatherDataResponse from './types/weather-data-response.type';
import WeatherData from './types/weather-data.type';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private readonly WEATHER_TOKEN = 'WLF_WEATHER'
  private readonly WEATHER_URL = environment.WEATHER_URL;
  private readonly WEATHER_API = environment.WEATHER_API_KEY;

  public savedWeather = new Array<WeatherData>();
  public savedWeather$: BehaviorSubject<WeatherData[]> = new BehaviorSubject<WeatherData[]>(this.initDataFromLocalStorage()); 

  constructor(private http: HttpClient, private localStorage: LocalStorageService) {
    this.savedWeather = this.initDataFromLocalStorage();
  }

  public initDataFromLocalStorage(): WeatherData[] {
    let savedData = this.localStorage.getItem(this.WEATHER_TOKEN);
    savedData = savedData ? JSON.parse(savedData) : [];  
    return savedData as unknown as WeatherData[];
  }

  /**
   * Когда приходит запрос на поиск погоды по городу
   * 1) Производим запрос
   * 2) Преобразуем ответ и берем только нужные данные
   * 3) 
   * @param cityName 
   * @returns 
   */
  searchWeatherByCity(cityName = ''): Observable<WeatherData> {
    if (cityName === '') {
      throw new Error('Parameter "City" can\'t be null');
    }

    return this.http.get<WeatherDataResponse>(this.WEATHER_URL, {
      params: new HttpParams()
        .set('q', cityName)
        .set('units', 'metric') // Чтобы температура приходила в Цельсиях
        .set('appid', this.WEATHER_API),
    }).pipe(
      map((data: WeatherDataResponse) => {
        return {
          city: data.name,
          temp_max: data.main.temp_max,
          temp_min: data.main.temp_min,
          humidity: data.main.humidity,
          temp: data.main.temp,
        }
      }),
      tap((data: WeatherData) => {
        this.savedWeather.push(data)
        this.savedWeather$.next(this.savedWeather);
        this.saveWeatherDataToLocalStorage(data);
      })
    )
  }

  public saveWeatherDataToLocalStorage(data: WeatherData) {
    let savedData = this.localStorage.getItem(this.WEATHER_TOKEN);
    let savedDataParsed = savedData ? (JSON.parse(savedData)) as WeatherData[] : [];

    const newData = [data, ...savedDataParsed];

    this.localStorage.setItem(this.WEATHER_TOKEN, JSON.stringify(newData));
  }
}
