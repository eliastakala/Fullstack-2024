import React, { useState, useEffect } from 'react'
import axios from 'axios'
import '../index.css'

const api_key = import.meta.env.VITE_SOME_KEY

const CountryInfo = ({ country }) => {
  const [weather, setWeather] = useState(null)
  useEffect(() => {
    const lat = country.latlng[0]
    const lon = country.latlng[1]

    axios
      .get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${api_key}`)
      .then((response) => {
        setWeather(response.data);
      }).catch((error) => {
        console.error("Failed to fetch weather data", error)
      });
  }, [])

  return (
    <div>
      <h1>{country.name.common}</h1>
      <p>Capital: {country.capital[0]}</p>
      <p>Population: {country.population}</p>
      <h2>Languages</h2>
      <ul>
        {Object.values(country.languages).map((l) => (
          <li key={l}>{l}</li>
        ))}
      </ul>
      <img src={country.flags.png} alt={country.name.common} width="200" />
      {weather && (
        <div>
          <h2>Weather in {country.capital[0]}</h2>
          <p><strong>Temperature:</strong> {weather.main.temp} Celsius</p>
          {weather.weather[0].description && (
            <img
              src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}
              alt={weather.weather[0].description}
              className="weather-icon"
            />
          )}
          <p><strong>Wind:</strong> {weather.wind.speed} m/s</p>
        </div>
      )}
    </div>
  )
}

export default CountryInfo