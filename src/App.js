import React, { Component } from 'react';
import './App.css';

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
    wind: undefined,
    error: undefined,
  }

  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const api_call = await
      fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${API_KEY}`);
    const data = await api_call.json();
    //console.log(data)
    if (city) {
      this.setState({
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        description: data.weather[0].description,
        humidity: data.main.humidity,
        wind: data.wind.speed,
        error: "",  
      })
    }else {
      alert("Please, enter a city")
    }
  }

  render() {
  return (
    <div className="App">
    <Header />
    <Form
      getWeather={this.getWeather} />
    <Weather 
      temperature={this.state.temperature}
      city={this.state.city}
      country={this.state.country}
      description={this.state.description}
      humidity={this.state.humidity}
      wind={this.state.wind}
      error={this.state.error}
      />  
      
  </div>
  );
  }
}

export default App;
