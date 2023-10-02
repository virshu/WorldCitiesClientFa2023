import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-fetch-data',
  templateUrl: './fetch-data.component.html',
  styleUrls: ['./fetch-data.component.css']
})
export class FetchDataComponent {
  public forecasts: WeatherForecast[] = [];
  baseUrl = "https://localhost:7036/";

  constructor(http: HttpClient) {
    http.get<WeatherForecast[]>(this.baseUrl + 'weatherforecast').subscribe({
      next: result => this.forecasts = result,
      error: e => console.error(e)
    });
  }
}

interface WeatherForecast {
  date: string;
  temperatureC: number;
  temperatureF: number;
  summary: string;

}
