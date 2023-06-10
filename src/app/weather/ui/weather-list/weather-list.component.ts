import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import WeatherData from '../../data-access/types/weather-data.type';
import { ScrollingModule } from '@angular/cdk/scrolling';

@Component({
  selector: 'app-weather-list[weatherData]',
  standalone: true,
  imports: [CommonModule, MatCardModule, ScrollingModule],
  templateUrl: './weather-list.component.html',
  styleUrls: ['./weather-list.component.sass'],
})
export class WeatherListComponent {
  @Input()
  weatherData: WeatherData[] = [];
}
