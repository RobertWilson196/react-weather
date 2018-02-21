import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <h1>React-Weather</h1>
        <p>Enter your latitude and longitude to get the weather!</p>
        <form>
          <label>Latitude:</label>
          <input type="text" />
          <label>Longitude:</label>
          <input type="text" />
          <button type="submit">Calculate Weather!</button>
        </form>
      </div>
    );
  }
}

export default App;
