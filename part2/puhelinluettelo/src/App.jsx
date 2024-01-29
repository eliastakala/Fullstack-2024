import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  const addName = (event) => {

    event.preventDefault()

    const personList = persons.map(person => person.name)

    if (personList.filter(person => person === newName).length > 0) {
      window.alert(`${newName} is already added to phonebook`)
    } else {
    const personObject = {
      name: newName
    }

    setPersons(persons.concat(personObject))
    setNewName('')
  }
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit = {addName}>
        <div>
          name: <input
          value = {newName}
          onChange = {handleNameChange}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        {persons.map((person, index) => <p key = {index}>{person.name}</p>)}
      </div>
    </div>
    
  )

}

export default App