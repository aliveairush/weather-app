import { CommonModule, NgOptimizedImage } from '@angular/common';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  inject,
} from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
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
    NgOptimizedImage,
  ],
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WeatherComponent {
  weatherService = inject(WeatherService);
  cdr = inject(ChangeDetectorRef);

  cityName = new FormControl('');

  savedWeather: WeatherData[] = [];

  weatherData: WeatherData | null = null;
  weatherDataLoading = false;
  hasWeatherDataError = false;

  submit() {
    this.weatherDataLoading = true;
    this.hasWeatherDataError = false;

    this.weatherService
      .searchWeatherByCity(this.cityName.value?.toString())
      .subscribe({
        next: (res) => {
          this.weatherData = res;
          this.weatherDataLoading = false;
          this.cdr.markForCheck();
        },
        error: (err) => {
          this.hasWeatherDataError = true;
          this.weatherDataLoading = false;
          this.cdr.markForCheck();
        },
      });
  }

  onSelectPrevWeather(weather: WeatherData) {
    this.weatherData = weather;
  }

  onClearPrevData() {
    this.weatherService.clearSavedWeatherData();
  }
}
