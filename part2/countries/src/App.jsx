import { useState, useEffect } from 'react'
import axios from 'axios'
import FilterCountries from './components/FilterCountries'
import './index.css'

const App = () => {
  const [country, setCountry] = useState('')
  const [allCountries, setAllCountries] = useState([])
  const [selectedCountry, setSelectedCountry] = useState(null)

  useEffect(() => {
    axios
      .get('https://studies.cs.helsinki.fi/restcountries/api/all')
      .then((response) => {
        setAllCountries(response.data)
      })
  }, [])

  const handleChange = (event) => {
    setCountry(event.target.value)
    setSelectedCountry(null)
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
        <FilterCountries
        filteredCountries={filteredCountries}
        selectedCountry={selectedCountry}
        setSelectedCountry={setSelectedCountry}
        />
      </div>
    </div>
  )
}

export default App