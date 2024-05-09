import { useState, useEffect } from 'react'
import axios from 'axios'

const FilterCountries = ({filteredCountries}) => {
  return (
    <div>
      {filteredCountries.length > 10
        ? 'Too many matches, specify another filter'
        : filteredCountries.length === 1
        ? filteredCountries.map(c => (
            <div key={c.name.common}>
              <h1>{c.name.common}</h1>
              <p>capital {c.capital[0]}</p>
              <p>population {c.population}</p>
              <h2>languages</h2>
              <ul>
                {Object.values(c.languages).map((l) => (
                  <li key={l}>{l}</li>
                ))}
              </ul>
              <img src={c.flags.png} alt={c.name.common} width="100" />
            </div>
          ))
        : filteredCountries.map((c) => (
            <div key={c.name.common}>
              <p>{c.name.common}</p>
            </div>
          ))}
    </div>
  )
}

const App = () => {
  const [country, setCountry] = useState('')
  const [allCountries, setAllCountries] = useState([])

  useEffect(() => {
    axios
      .get('https://studies.cs.helsinki.fi/restcountries/api/all')
      .then((response) => {
        setAllCountries(response.data)
      })
  }, [])

  const handleChange = (event) => {
    setCountry(event.target.value)
  }

  const filteredCountries = allCountries.filter(c =>
    c.name.common.toLowerCase().includes(country.toLowerCase())
  )

  return (
    <div>
      <form>
        Find countries: <input value={country} onChange={handleChange} />
      </form>
      <div>
        <FilterCountries filteredCountries={filteredCountries} />
      </div>
    </div>
  )
}

export default App