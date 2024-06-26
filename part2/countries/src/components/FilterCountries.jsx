import axios from "axios"
import CountryInfo from "./CountryInfo"

const FilterCountries = ({filteredCountries, selectedCountry, setSelectedCountry}) => {
    const showCountry = (name) => {
      const countryToShow = filteredCountries.filter(c =>
        c.name.common.toLowerCase() === name.toLowerCase()
      )
      console.log('countryToShow', countryToShow[0])
      setSelectedCountry(countryToShow[0])
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
