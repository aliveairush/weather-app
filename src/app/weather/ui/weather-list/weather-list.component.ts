import { ScrollingModule } from '@angular/cdk/scrolling';
import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import WeatherData from '../../data-access/types/weather-data.type';

@Component({
  selector: 'app-weather-list[weatherData]',
  standalone: true,
  imports: [CommonModule, MatCardModule, ScrollingModule],
  templateUrl: './weather-list.component.html',
  styleUrls: ['./weather-list.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WeatherListComponent {
  @Input('weatherData')
  weatherDataProp: WeatherData[] = [];

  @Output('cardClick') cardClickEvent: EventEmitter<WeatherData> =
    new EventEmitter<WeatherData>();
}
