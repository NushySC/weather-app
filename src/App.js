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
    forecast1:undefined,
    forecast2:undefined,
    forecast3:undefined,
    tomorrow: undefined,
    afterTomorrow: undefined,
    afterAfterTomorrow: undefined,
  }

  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
 
    const fetchText = url => fetch(url).then(r => r.json()); 
 
    const [weather, forecast] = await Promise.all([
      fetchText(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${API_KEY}`),
      fetchText(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&APPID=${API_KEY}`)
      
    ]);
 
    //console.log(weather)
    //console.log(forecast)


    let today = new Date()
    today.getDay()

    let tomorrow = new Date();
    tomorrow.setDate(today.getDate()+1);
    tomorrow.getDay()

    let afterTomorrow = new Date();
    afterTomorrow.setDate(today.getDate()+2);
    afterTomorrow.getDay()

    let afterAfterTomorrow = new Date();
    afterAfterTomorrow.setDate(today.getDate()+2);
    afterAfterTomorrow.getDay()


    if (city) {
      this.setState({
        temperature: weather.main.temp,
        city: weather.name,
        country: weather.sys.country,
        description: weather.weather[0].description,
        main: weather.weather[0].main,
        humidity: weather.main.humidity,
        wind: weather.wind.speed,
        icon: weather.weather[0].icon,
        id: weather.weather[0].id,
        error: "", 
        forecast1: forecast.list[0].main.temp, 
        forecast2: forecast.list[1].main.temp, 
        forecast3: forecast.list[2].main.temp, 
        tomorrow: tomorrow,
        afterTomorrow: afterTomorrow,
        afterAfterTomorrow: afterAfterTomorrow,


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
          forecast1={this.state.forecast1}
          forecast2={this.state.forecast2}
          forecast3={this.state.forecast3}
          tomorrow={this.state.tomorrow}
          afterTomorrow={this.state.afterTomorrow}
          afterAfterTomorrow={this.state.afterAfterTomorrow}
          />  
        
    </div>
    );
    }
}

export default App;
