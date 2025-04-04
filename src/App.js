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

import { TbTemperatureFa } from 'react-icons/tb';
import { ImSpinner2 } from 'react-icons/im';
import { IoSearch } from 'react-icons/io';


const App = () => {
  const [data, setData] = useState(null);
  const [city, setCity] = useState('London');

  // Fetch data with OWM
  useEffect(() => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_OWM_API_KEY}`;

    axios.get(url).then(res => {
      setData(res.data);
    });
  }, [city]);

  // Display loading while data fetch in progress
  if (!data) {
    return (
      <div>
        <div>
          <ImSpinner2 className='text-5x1' />
        </div>
      </div>
    )
  }

  // Corresponding weather icon handling
  let icon;
  //console.log(data.weather[0].main);
  switch (data.weather[0].main) {
    case 'Clouds':
      icon = <TiWeatherCloudy />;
      break
  }
  // TODO: Fill rest of weather case conditions

  return <div>react app
    <div>
      <div className='text-6x1'>{icon}</div>
    </div>
  </div>;
};

export default App;