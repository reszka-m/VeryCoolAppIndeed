import { Component } from '@angular/core';
import { HttpService } from '../http.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  cityName = 'Gdańsk';
  temperature = 24;
  weatherType = 'Sunshine reggae';
  weatherIcon = '/assets/images/sun1.png';

  getWeather(){
    this.httpService.getRequest(`https://api.openweathermap.org/data/2.5/weather?q=${ this.cityName }&units=metric&appid=de5744b8814fb42042561c10d08ff4d9`).subscribe((response) => {
      const jsonWeatherIcon = response.weather[0].icon;
      this.weatherIcon = `http://openweathermap.org/img/wn/${ jsonWeatherIcon }@2x.png`;
      this.weatherType = response.weather[0].description;
      this.temperature = Math.round(response.main.temp * 10) / 10;
    })
  }

  constructor(private httpService: HttpService) {
    this.getWeather();
  }


}
