import React from "react";
import Weather from "./Weather.js";
import Form from "./Form.js";

import "./styles.sass";

const API_KEY = "34e10b96961e8988fbf5fe7b2b0af945";

class App extends React.Component {
  state = {
    temperature: "",
    weather: "",
    temperatureMax: "",
    temperatureMin: "",
    city: "",
    country: "",
    icon: "",
    description: "",
    error: ""
  };

  getWeather = async e => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const api = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
    );
    const data = await api.json();

    if (city) {
      this.setState({
        temperature: data.main.temp,
        temperatureMax: data.main.temp_max,
        temperatureMin: data.main.temp_min,
        weather: data.weather[0].main,
        city: data.name,
        country: data.sys.country,
        icon: data.weather[0].icon,
        description: data.weather[0].description,
        error: ""
      });
    } else {
      this.setState({
        temperature: "",
        weather: "",
        temperatureMax: "",
        temperatureMin: "",
        city: "",
        country: "",
        icon: "",
        description: "",
        error: "please enter city or recheck the spelling "
      });
    }
  };

  render() {
    return (
      <div className="App">
        <Form getWeather={this.getWeather} />
        <Weather
          temperature={this.state.temperature}
          weather={this.state.weather}
          temperatureMax={this.state.temperatureMax}
          temperatureMin={this.state.temperatureMin}
          city={this.state.city}
          country={this.state.country}
          icon={this.state.icon}
          description={this.state.description}
          error={this.state.error}
        />
      </div>
    );
  }
}

export default App;
