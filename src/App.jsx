import InputLine from "./components/InputLine/InputLine";
import InfoPanel from "./components/InfoPanel/InfoPanel";
import DailyForecast from "./components/DailyForecast/DailyForecast";
import './styles.css'
import React, {useState} from "react";

function App() {
  const [city, setCity] = useState('')
  const [weather, setWeather] = useState('')

  return (
    <div className="App">
      <InputLine defaultCity={'Санкт-Петербург'} setCityCallback={setCity} weather={weather}/>
      <InfoPanel city={city} setWeatherCallback={setWeather}/>
      {/*<DailyForecast/>*/}
    </div>
  );
}

export default App;
