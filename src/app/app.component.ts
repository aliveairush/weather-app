import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { WeatherComponent } from './weather/features/weather/weather.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
  imports: [WeatherComponent, CommonModule],
  standalone: true,
})
export class AppComponent {
  title = 'weather-app';
}
