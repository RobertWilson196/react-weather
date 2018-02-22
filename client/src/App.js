import React, { Component } from 'react';
import { getWeather } from './services/weather';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      lat:0,
      lon:0,
      currentWeather: {}
    }
    this.handleLatChange = this.handleLatChange.bind(this);
    this.handleLonChange = this.handleLonChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleLatChange(e)
  {
    console.log('lat');
    this.setState({
      lat: +e.target.value
    })
  }

  handleLonChange(e)
  {
    console.log('lon');
    this.setState({
      lon: +e.target.value
    })
  }
  handleSubmit(e) {
    e.preventDefault();
    getWeather(this.state.lat,this.state.lon)
      .then(response => {
        const currentWeather = response.data.currently;
        this.setState({
          currentWeather: currentWeather
        });
      })
      .catch(error => {
        console.error(error);
      });
  }

  render() {
    return (
      <div>
        <h1>React-Weather</h1>
        <p>Enter your latitude and longitude to get the weather!</p>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <label>Latitude:</label>
          <input placeholder="Enter Latitude" 
          type="number" 
          min="-90"
          max="90"
          value={this.state.lat}
          onChange={(e) => this.handleLatChange(e)}
          required/>

          <label>Longitude:</label>
          <input placeholder="Enter Longitude"
          type="number"
          min="-180"
          max="180" 
          value={this.state.lon}  
          onChange={(e) => this.handleLonChange(e)}
          required/>
          <button type="submit">Calculate Weather!</button>
        </form>
        <pre>
          {JSON.stringify(this.state.currentWeather, null, 4)}
        </pre>
      </div>
    );
  }
}

export default App;
