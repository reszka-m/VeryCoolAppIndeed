import { Component, OnInit } from '@angular/core';
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

  /** getTemperature(){
    this.httpService.getRequest('https://api.openweathermap.org/data/2.5/weather?q=London&units=metric&appid=de5744b8814fb42042561c10d08ff4d9').subscribe((response) => {
      this.temperature = response.main.temp;
      console.log(this.weatherType);
    })
  }

  getWeatherType(){
    this.httpService.getRequest('https://api.openweathermap.org/data/2.5/weather?q=London&units=metric&appid=de5744b8814fb42042561c10d08ff4d9').subscribe((response) => {
      this.weatherType = response.weather[0].description;
      console.log(this.weatherType);
    })
  }

  getWeatherIcon(){
    this.httpService.getRequest('https://api.openweathermap.org/data/2.5/weather?q=London&units=metric&appid=de5744b8814fb42042561c10d08ff4d9').subscribe((response) => {
      const jsonWeatherIcon = response.weather[0].icon;
      this.weatherIcon = `http://openweathermap.org/img/wn/${ jsonWeatherIcon }@2x.png`;
    })
  } **/
  getPlaceholder(){
    this.httpService.getRequest('https://jsonplaceholder.typicode.com/todos/1').subscribe((response) => {
      console.log(response.title);
      return response.title;
    })
  }

  saySomething(){
    return "pies pies pies"
  }

  getWeather(){
    this.httpService.getRequest('https://api.openweathermap.org/data/2.5/weather?q=London&units=metric&appid=de5744b8814fb42042561c10d08ff4d9').subscribe((response) => {
      const jsonWeatherIcon = response.weather[0].icon;
      this.weatherIcon = `http://openweathermap.org/img/wn/${ jsonWeatherIcon }@2x.png`;
      this.weatherType = response.weather[0].description;
      this.temperature = response.main.temp;
      console.log(this.weatherType);
    })
  }

  constructor(private httpService: HttpService) {
    //this.getWeather();
  }


}
