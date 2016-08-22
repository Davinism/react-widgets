import React from 'react';
import ReactDOM from 'react-dom';
import Tabs from './tabs/tabs';
import WeatherClock from './weather_clock/weather_clock';
import Autocomplete from './autocomplete/autocomplete';

document.addEventListener("DOMContentLoaded", () => {

  const root = document.getElementById("root");
  let tabs = [
    {title: "one", content: "this is the first content", index: 0},
    {title: "two", content: "this is the second", index: 1}
  ];

  const list = ["Marc", "Davin", "Victor", "Jen", "Yasin", "Matt"];

  // ReactDOM.render(<Tabs tabs={tabs}/>, root);
  // ReactDOM.render(<WeatherClock />, root);
  ReactDOM.render(<Autocomplete list={list} />, root);
});
