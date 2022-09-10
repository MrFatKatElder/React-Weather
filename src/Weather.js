import React from "react";
import axios from "axios";
export default function Weather(props) {
  function handleResponse(response) {
    alert(
      `The weather in ${response.data.main.name} is ${response.data.main.temp}°C`
    );
  }
  let apiKey = "310211ce296edd42f161b4add8b84c37";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);
  return <h2> Hello from weather</h2>;
}
