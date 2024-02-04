const Display = ({persons, filter}) => {
    const personsToShow = persons.filter(person => person.name.toLowerCase().includes(filter))
    return (
      <div>
          {personsToShow.map((person, index) => <p key = {index}>{person.name} {person.number}</p>)}
      </div>
    )
  }

export default Display