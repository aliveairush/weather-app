import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { Observable } from 'rxjs';
import WeatherData from '../../data-access/types/weather-data.type';
import { WeatherService } from '../../data-access/weather.service';
import { WeatherCardComponent } from '../../ui/weather-card/weather-card.component';
import { WeatherListComponent } from '../../ui/weather-list/weather-list.component';

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
export class WeatherComponent {
  weatherService = inject(WeatherService)

  cityName = new FormControl('');
  weatherData$ = new Observable<WeatherData>();
  savedWeather: WeatherData[] = [];

  submit() {
    this.weatherData$ = this.weatherService
      .searchWeatherByCity(this.cityName.value?.toString())
  }
}






















