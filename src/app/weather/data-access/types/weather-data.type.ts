interface WeatherData {
  city: string;
  temp: number;
  temp_min: number;
  temp_max: number;
  pressure?: number;
  humidity: number;
}

export default WeatherData;
