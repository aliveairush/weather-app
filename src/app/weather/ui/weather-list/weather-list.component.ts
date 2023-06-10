import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import WeatherData from '../../data-access/types/weather-data.type';

@Component({
  selector: 'app-weather-list[weatherData]',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './weather-list.component.html',
  styleUrls: ['./weather-list.component.sass'],
})
export class WeatherListComponent {
  @Input()
  weatherData: WeatherData[] = [];
}
