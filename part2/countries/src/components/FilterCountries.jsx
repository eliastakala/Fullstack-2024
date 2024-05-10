import axios from "axios"
import CountryInfo from "./CountryInfo"

const FilterCountries = ({filteredCountries, selectedCountry, setSelectedCountry}) => {
    const showCountry = (name) => {
      axios
        .get(`https://studies.cs.helsinki.fi/restcountries/api/name/${name}`)
        .then((response) => {
          setSelectedCountry(response.data)
        }
      )
    }

    return (
      <div>
        {filteredCountries.length > 10
          ? 'Too many matches, specify another filter'
          : filteredCountries.length === 1
          ? <CountryInfo country={filteredCountries[0]} />
          : selectedCountry
          ? <CountryInfo country={selectedCountry} />
          : filteredCountries.map((c) => (
              <div key={c.name.common} className='form-container'>
                <p>{c.name.common}</p><button onClick={() => showCountry(c.name.common)}>show</button>
                
              </div>
            ))}
      </div>
    )
  }

export default FilterCountries
