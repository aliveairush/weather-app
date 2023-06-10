import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { LocalStorageService } from 'src/app/shared/data-access/local-storage.service';
import WeatherDataResponse from '../../data-access/types/weather-data-response.type';
import WeatherData from '../../data-access/types/weather-data.type';
import { WeatherService } from '../../data-access/weather.service';
import { WeatherCardComponent } from '../../ui/weather-card/weather-card.component';
import { WeatherListComponent } from '../../ui/weather-list/weather-list.component';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-weather',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    FormsModule,
    MatCardModule,
    WeatherCardComponent,
    WeatherListComponent,
    NgOptimizedImage 
  ],
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.sass'],
})
export class WeatherComponent{
  cityName = new FormControl('');

  weatherService = inject(WeatherService)

  weatherData$ = new Observable<WeatherData>();

  constructor(  ) {}

  submit() {
    this.weatherData$ = this.weatherService
      .searchWeatherByCity(this.cityName.value?.toString())
  }
}






















