import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { Observable } from 'rxjs';
import { WeatherData } from '../../data-access/types/weather.type';
import { WeatherService } from '../../data-access/weather.service';

@Component({
  selector: 'app-weather',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule, MatCardModule],
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.sass'],
})
export class WeatherComponent {
  cityName = new FormControl('');

  weatherData$ = new Observable<WeatherData>();

  constructor(private weatherService: WeatherService) {}

  submit() {
    console.log('Test', this.cityName.value);
    this.weatherData$ = this.weatherService.searchWeatherByCity(
      this.cityName.value?.toString()
    );
  }
}
