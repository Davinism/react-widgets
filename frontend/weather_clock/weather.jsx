import React from 'react';

class Weather extends React.Component {
  constructor(props) {
    super(props);
    this.state = { city: "", temp: "" };
  }

  componentDidMount() {

    let lon, lat;
    const apiid = "db748281d0d469d68b0aa73131a9e049";
    const self = this;

    navigator.geolocation.getCurrentPosition((pos) => {
      [lon, lat] = [pos.coords.longitude, pos.coords.latitude];
      const url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiid}`;
      let xmlhttp = new XMLHttpRequest();

      xmlhttp.onreadystatechange = function() {
          if (xmlhttp.readyState == XMLHttpRequest.DONE ) {
             if (xmlhttp.status == 200) {

                const data = JSON.parse(xmlhttp.responseText);
                const temp = data.main.temp * (9/5) - 459.67;
                const city = data.name;

                self.setState({city: city, temp: temp});
             }
             else if (xmlhttp.status == 400) {
                alert('There was an error 400');
             }
             else {
                 alert('something else other than 200 was returned');
             }
          }
      };

      xmlhttp.open("GET", url, true);
      xmlhttp.send();

    });
  }



  render() {
    return(
      <div>
        <h1>Weather</h1>
        <span>{this.state.city}</span>
        <br/>
        <span>{this.state.temp}</span>
      </div>
    );
  }
}

export default Weather;
