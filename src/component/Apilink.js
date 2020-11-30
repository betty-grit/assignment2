import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Apilink() {
  const [weather, setWeather] = useState({});
  useEffect(() => {
    axios
      .get(
        "https://api.openweathermap.org/data/2.5/forecast?q=$'city'&units=metric&appid=${Api_Keyhttps://api.openweathermap.org/data/2.5/forecast?q=${accra}&units=metric&appid=$'Api_Key'/"
      )
      .then((res) => {
        console.log(res.data);
        setWeather(res.data);
      })
      .catch((err) => console.error(err));
  }, [weather]);
  return (
    <div>
      <h1>{weather.temperature}</h1>
      <h2>{weather.humidity}</h2>
    </div>
  );
}
