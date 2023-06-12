import { ScrollingModule } from '@angular/cdk/scrolling';
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
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
  @Input()
  weatherData: WeatherData[] = [];
}
