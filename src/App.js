import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      lat:0,
      lon:0
    }
    this.handleLatChange = this.handleLatChange.bind(this);
    this.handleLonChange = this.handleLonChange.bind(this);
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

  render() {
    return (
      <div>
        <h1>React-Weather</h1>
        <p>Enter your latitude and longitude to get the weather!</p>
        <form>
          <label>Latitude:</label>
          <input onChange={(e) => this.handleLatChange(e)}
          placeholder="Enter Latitude" value={this.state.lat} type="text" />
          <label>Longitude:</label>
          <input onChange={(e) => this.handleLonChange(e)}
          placeholder="Enter Longitude" value={this.state.lon} type="text" />
          <button type="submit">Calculate Weather!</button>
        </form>
      </div>
    );
  }
}

export default App;
