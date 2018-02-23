import React, { Component } from "react";
import CurrentWeather from './CurrentWeather';
import PropTypes from 'prop-types';

import { getWeather } from "./services/weather";
import { isEmptyObject } from './utils';

import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      lat: 0,
      lon: 0,
      currentWeather: {},
      error: null
    };
    this.handleLatChange = this.handleLatChange.bind(this);
    this.handleLonChange = this.handleLonChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleLatChange(e) {
    console.log("lat");
    this.setState({
      lat: +e.target.value
    });
  }

  handleLonChange(e) {
    console.log("lon");
    this.setState({
      lon: +e.target.value
    });
  }
  handleSubmit(e) {
    e.preventDefault();
    getWeather(this.state.lat, this.state.lon)
      .then(response => {
        const currentWeather = response.data.currently;
        this.setState({
          currentWeather: currentWeather
        });
      })
      .catch(error => {
        console.log(error);
        this.setState({
          error: "Something is broke"
        });
      });
  }

  render() {
    return (
      <div>
        <h1>React-Weather</h1>
        <p>Enter your latitude and longitude to get the weather!</p>
        <form onSubmit={e => this.handleSubmit(e)}>
          <label>Latitude:</label>
          <input
            placeholder="Enter Latitude"
            type="number"
            min="-90"
            max="90"
            step='0.0001'
            value={this.state.lat}
            onChange={e => this.handleLatChange(e)}
            required
          />

          <label>Longitude:</label>
          <input
            placeholder="Enter Longitude"
            type="number"
            min="-180"
            max="180"
            step='0.0001'
            value={this.state.lon}
            onChange={e => this.handleLonChange(e)}
            required
          />
          <button type="submit">Calculate Weather!</button>
        </form>
        { this.state.error ? <h1>{this.state.error}</h1> : '' }
        <pre>{JSON.stringify(this.state.currentWeather, null, 4)}</pre>
        {isEmptyObject(this.state.currentWeather) ?
          "" :
          <CurrentWeather {...this.state.currentWeather }/>}
      </div>
    );
  }
}

CurrentWeather.propTypes = {
  time: PropTypes.number.isRequired,
  summary: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  temperature: PropTypes.number.isRequired
}

export default App;
