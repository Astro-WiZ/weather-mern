import { useCallback, useEffect, useRef, useState } from 'react'
import './Weather.css'
import search_icon from '../../client/assets/search.png'
import clear_icon from '../../client/assets/clear.png'
import cloud_icon from '../../client/assets/cloud.png'
import drizzle_icon from '../../client/assets/drizzle.png'
import humidity_icon from '../../client/assets/humidity.png'
import rain_icon from '../../client/assets/rain.png'
import snow_icon from '../../client/assets/snow.png'
import wind_icon from '../../client/assets/wind.png'

const allIcons: { [key: string]: string } = {
  '01d': clear_icon,
  '01n': clear_icon,
  '02d': cloud_icon,
  '02n': cloud_icon,
  '03d': drizzle_icon,
  '03n': drizzle_icon,
  '04d': rain_icon,
  '04n': rain_icon,
  '10d': rain_icon,
  '10n': rain_icon,
  '13d': snow_icon,
  '13n': snow_icon,
}

const Weather = () => {
  const inputRef = useRef<HTMLInputElement | null>(null)

  type WeatherData = {
    humidity: number
    windspeed: number
    temperature: number
    location: string
    icon: string
  } | null

  const [weatherData, setWeatherData] = useState<WeatherData>(null)

  const search = useCallback(async (city: string) => {
    if (city === '') {
      alert('Enter City Name')
      return
    }
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${import.meta.env.VITE_APP_KEY}`
      const response = await fetch(url)
      const data = await response.json()
      console.log(data)
      const icon = allIcons[data.weather[0].icon] || clear_icon
      setWeatherData({
        humidity: data.main.humidity,
        windspeed: data.wind.speed,
        temperature: Math.floor(data.main.temp),
        location: data.name,
        icon: icon,
      })
    } catch (error) {
      setWeatherData(null)
      console.error('Error fetching weather data', error)
    }
  }, [])

  useEffect(() => {
    search('kathmandu')
  }, [search]) // ✅ Now the warning is fixed!

  return (
    <div className="weather">
      <div className="search-bar">
        <input ref={inputRef} type="text" placeholder="Add City" />
        <img
          src={search_icon}
          alt=""
          onClick={() => {
            if (inputRef.current) {
              search(inputRef.current.value)
            }
          }}
        />
      </div>
      {weatherData && (
        <>
          <img src={weatherData.icon} alt="" className="weather-icon" />
          <p className="temperature">{weatherData.temperature}°C</p>
          <p className="location">{weatherData.location}</p>
          <div className="weather-data">
            <div className="col">
              <img src={humidity_icon} alt="" />
              <div>
                <p>{weatherData.humidity}</p>
                <span>Humidity</span>
              </div>
            </div>
            <div className="col">
              <img src={wind_icon} alt="" />
              <div>
                <p>3.6 km/h</p>
                <span>Wind Speed</span>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default Weather
