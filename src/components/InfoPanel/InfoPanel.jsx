import React, {useEffect, useState} from 'react';
import styles from './index.module.css'
import axios from 'axios';
import {logDOM} from "@testing-library/react";

function InfoPanel({city  , setWeatherCallback}) {
  const [response, setResponse] = useState(null);
  const [weather, setWeather] = useState(null);
  const [iconPath, setIconPath] = useState("../../assets/clouds.svg")

  useEffect(() => {
    city &&
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=1b23a1d01985f82651cf7cfa449b98e8&units=metric`)
        .then(res => {
          setResponse({
            temp: (res.data.main.temp > 0 ? '+' : '') + Math.round(Number(res.data.main.temp)),
            weather: res.data.weather[0].main,
            humidity: res.data.main.humidity,
            wind: Math.round(Number(res.data.wind.speed)),
            clouds: res.data.clouds.all
          })
          setWeather(res.data.weather[0].main.toLowerCase())
          setWeatherCallback(res.data.weather[0].main.toLowerCase())
          setIconPath(`../../assets/${res.data.weather[0].main.toLowerCase()}.svg`)
        })
  }, [city])

  return (
      response
        &&
      <div className={styles.main}>
        <img className={styles.weaterIcon} src={iconPath} alt=""/>
        <div className={styles.temp}>{response.temp}</div>
        <div className={styles.other}>
          <div>
            <img src="../../assets/wind.png" alt=""/>
            <span>{response.wind} m/s</span>
          </div>
          <div>
            <img src="../../assets/humidity.png" alt=""/>
            <span>{response.clouds} %</span>
          </div>
          <div>
            <img src="../../assets/precipitation.png" alt=""/>
            <span>{response.humidity} %</span>
          </div>
        </div>
      </div>
  );
}

export default InfoPanel;