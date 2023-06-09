import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import WeatherData from '../../data-access/types/weather-data.type';

@Component({
  selector: 'app-weather-card',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatCardModule],
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WeatherCardComponent implements OnInit {
  constructor() {}

  @Input('data')
  dataProp: WeatherData | null = null;

  ngOnInit(): void {}
}
