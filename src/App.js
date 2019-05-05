import React, { Component } from 'react';
import axios from 'axios'
import './App.scss';

import Form from './components/Form/Form'
import Header from './components/Header/Header'
import Weather from './components/Weather/Weather'

const API_KEY = '61586687420c6c03218d0ae312e69085'


class App extends Component {

  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    main: undefined,
    wind: undefined,
    icon: undefined,
    error: undefined,
    id: undefined,
    //forecast:undefined,
  }

  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const api_call = await
      fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${API_KEY}`);
      fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&APPID=${API_KEY}`);
    const data = await api_call.json();
    //console.log(data);


    if (city) {
      this.setState({
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        description: data.weather[0].description,
        main: data.weather[0].main,
        humidity: data.main.humidity,
        wind: data.wind.speed,
        icon: data.weather[0].icon,
        id: data.weather[0].id,
        error: "", 
        //forecast: data.list[0].main.temp, 
      })
    } else {
      alert("Please, enter a city")
    }
  }


  render() {

let bgColorClass = 'App'; 

    if (this.state.main === "Rain") {
      bgColorClass = 'rain';
  }
  else if (this.state.main === "Thunderstorm") {
      bgColorClass = 'thunder';
  }
  else if (this.state.main === "Drizzle") {
      bgColorClass = 'drizzle';
  }
  else if (this.state.main === "Snow") {
      bgColorClass = 'snow';
  }
  else if (this.state.main === "Clear") {
      bgColorClass = 'sun';
  }
  else if (this.state.main === "Clouds") {
    bgColorClass = 'clouds';
} else {
    bgColorClass = 'else'
}

  return (
    <div className={"App "+ bgColorClass}>
      <Header />
      <Form
        getWeather={this.getWeather}  />
    <Weather 
      temperature={this.state.temperature}
      city={this.state.city}
      country={this.state.country}
      description={this.state.description}
      main={this.state.main}
      humidity={this.state.humidity}
      wind={this.state.wind}
      error={this.state.error}
      icon={this.state.icon}
      id={this.state.id}
      forecast={this.state.forecast}
      />  
      
  </div>
  );
  }
}

export default App;
