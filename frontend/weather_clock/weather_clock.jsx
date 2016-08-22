import React from 'react';
import Clock from './clock';
import Weather from './weather';

class WeatherClock extends React.Component {
  constructor(){
    super();
  }

  render() {

    return (
      <div>
        <Clock />
        <Weather />
      </div>
    );
  }
}

export default WeatherClock;
