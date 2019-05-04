import React, { Component } from 'react';
import Styles from './App.module.css';

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
  }

  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const api_call = await
      fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${API_KEY}`);
    const data = await api_call.json();
    console.log(data)
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
        error: "",  
      })
    }else {
      alert("Please, enter a city")
    }
  }

  render() {
  return (
    <div className={Styles.App}>
    <div className={Styles.firstScreen}>
      <Header />
      <Form
        getWeather={this.getWeather} />
    </div>
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
      />  
      
  </div>
  );
  }
}

export default App;
