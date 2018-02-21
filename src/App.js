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
    console.log('submit');
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
      </div>
    );
  }
}

export default App;
