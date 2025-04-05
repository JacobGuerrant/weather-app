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
} from 'react-icons/bs';

import { TbTemperatureFahrenheit, TbTemperatureCelsius } from "react-icons/tb";
import { ImSpinner2 } from 'react-icons/im';
import { IoSearch } from 'react-icons/io';


const App = () => {
  const [data, setData] = useState(null);
  const [city, setCity] = useState('London');

  //TODO: Support unit changing
  const unit = 'Imperial';

  // Fetch data with OWM
  useEffect(() => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${unit}&appid=${process.env.REACT_APP_OWM_API_KEY}`;

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

  // Uses Intl.DisplayNames to get full country name from OWM supplied country code
  const regionNames = new Intl.DisplayNames(['en'], { type: 'region' });
  const fullCountryName = regionNames.of(data.sys.country);

  // Fetch user date and properly format
  const date = new Date();
  const month = (date.getUTCMonth() + 1).toString().padStart(2, '0'); // Add 1 because getUTCMonth is 0 indexed
  const day = date.getUTCDate().toString().padStart(2, '0');

  return <div className='g_bg flex flex-col items-center justify-center'>
    {/* TODO: Location search */}
    <form>Search</form>

    {/* Card */}
    <div className='w-full max-w-[450px] min-h-[400px] bg-black/20 text-white backdrop-blur-[32px] rounded-[32px] px-6 py-12'>
      <div>

        {/* Card top */}
        <div className='flex items-center gap-x-5'>
          {/* Icon */}
          <div className='text-[87px]'>{icon}</div>
          {/* Country */}
          <div className='text-2xl font-semibold'>{data.name}, {fullCountryName}</div>
          {/* Date */}
          <div className=''>{month}/{day}/{date.getUTCFullYear()}</div>
        </div>

        {/* Card body */}
        <div className='my-5'>
          <div className='flex justify-center'>
            {/* Temperature*/}
            <div className='text-[72px] leading-none'>{parseInt(data.main.temp)}</div>
            {/* Icon */}
            <div className='text-4xl'>
              <TbTemperatureFahrenheit />
            </div>
          </div>
          {/* Weather description */}
          <div className='text-center text-2xl'>{data.weather[0].main}</div>
        </div>

        {/* Card bottom */}
        <div>
          <div className='flex justify-between text-[20px]'>

            <div className='flex items-center gap-x-2'>
              {/* Icon */}
              <div>
                <BsWater />
              </div>
              {/* Humidity */}
              <div>
                Humidity:  {data.main.humidity}%
              </div>
            </div>
            <div className='flex items-center gap-x-2'>
              {/* Icon */}
              <div>
                <BsWind />
              </div>
              {/* Wind speed */}
              <div>
                Wind: {data.wind.speed} mph
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>;

  // TODO: Eventually sync background gradient/image with local weather
};

export default App;