import { useState } from 'react'
import Display from './components/Display'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import { useEffect } from 'react'
import personService from './services/persons'
import Notification from './components/Notification'
import Error from './components/Error'



const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')
  const [errorMessage, setErrorMessage] = useState(null)
  const [notificationMessage, setNotificationMessage] = useState(null)


  useEffect(() => {
    personService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
  }, [])

  const addName = (event) => {

    event.preventDefault()

    const personList = persons.map(person => person.name)

    if (personList.filter(person => person === newName).length > 0) {
      if (window.confirm(`${newName} is already added to phonebook, update the number?`)) {
        const person = persons.find(obj => obj.name === newName)
        const changedPerson = { ...person, number: newNumber}

        personService
          .update(person.id, changedPerson)
          .then(response => {
            setPersons(persons.map(obj => obj.id !== person.id ? obj : response))
            setNotificationMessage(
              `${newName} number updated successfully`
            )
            setNewName('')
            setNewNumber('')
            setTimeout(() => {
              setNotificationMessage(null)
            }, 5000)
          })
          .catch(error => {
            setErrorMessage(
              `Information of ${newName} has already been removed from server`
            )
            setTimeout(() => {
              setErrorMessage(null)
            }, 5000)
            setPersons(persons.filter(p => p.id !== person.id))
          })
        
        
        
      }
      
    } else {
    const personObject = {
      name: newName,
      number: newNumber
    }

    personService
      .create(personObject)
      .then(newPerson => {
        setPersons(persons.concat(newPerson))
        setNotificationMessage(
          `Added ${newName}`
        )
        setNewName('')
        setNewNumber('')
        setTimeout(() => {
          setNotificationMessage(null)
        }, 5000)
      })
      
    
  }
  }

  const removeName = (id, name) => {
    if (window.confirm(`Delete ${name}?`)) {
      personService
        .remove(id)
        .then(() => {
          setPersons(persons.filter(person => person.id !== id))
          setNotificationMessage(
            `${name} deleted successfully`
          )
          setTimeout(() => {
            setErrorMessage(null)
          }, 5000)
        })
        .catch(error => {
          setErrorMessage(
            `Information of ${name} has already been removed from server`
          )
          setTimeout(() => {
            setErrorMessage(null)
          }, 5000)
          setPersons(persons.filter(p => p.id !== id))
        })
      
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

      <Notification message = {notificationMessage} />

      <Error message = {errorMessage} />

      <Filter onFilterChange={handleFiltering} filter={newFilter}/>

      <h2>Add a new contact</h2>
      <PersonForm onFormSubmit = {addName} name = {newName} onChangeName = {handleNameChange} onChangeNumber = {handleNumberChange} number = {newNumber}/>

      <h2>Numbers</h2>

      <Display persons = {persons} filter = {newFilter} buttonClick = {removeName}/>

    </div>
    
  )

}

export default App