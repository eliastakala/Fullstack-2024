import { useState } from 'react'
import Display from './components/Display'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'



const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Lauri Viita', number: '044 72464948' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')

  const addName = (event) => {

    event.preventDefault()

    const personList = persons.map(person => person.name)

    if (personList.filter(person => person === newName).length > 0) {
      setNewName('')
      window.alert(`${newName} is already added to phonebook`)
      
    } else {
    const personObject = {
      name: newName,
      number: newNumber
    }

    setPersons(persons.concat(personObject))
    setNewName('')
    setNewNumber('')
  }
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFiltering = (event) => {
    setNewFilter(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter onChange={handleFiltering} filter={newFilter}/>

      <h2>Add a new contact</h2>
      <PersonForm onSubmit = {addName} name = {newName} onChangeName = {handleNameChange} onChangeNumber = {handleNumberChange} number = {newNumber}/>

      <h2>Numbers</h2>

      <Display persons = {persons} filter = {newFilter}/>

    </div>
    
  )

}

export default App