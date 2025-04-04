import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Import necessary icons from React Icons
import {
  TiWeatherCloudy,
  TiWeatherDownpour,
  TiWeatherNight,
  TiWeatherPartlySunny,
  TiWeatherShower,
  TiWeatherSnow,
  TiWeatherSunny,
  TiWeatherWindy,
  TiWeatherWindyCloudy
} from 'react-icons/ti';

import {
  BsCloudFog2,
  BsWater,
  BsEye,
  BsWind,
  BsThermometer
} from 'react-icons/ti';

import TbTemperatureFa from 'react-icons/tb';
import ImSpinner2 from 'react-icons/im';
import IoSearch from 'react-icons/io';


const App = () => {
  const [data, setData] = useState(null);
  const [city, setCity] = useState('London');

  // Fetch data
  useEffect(() => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_OWM_API_KEY}`;
  })

  return <div>react app</div>;
};

export default App;
