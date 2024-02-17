const Display = ({persons, filter, buttonClick}) => {
    const personsToShow = persons.filter(person => person.name.toLowerCase().includes(filter))
    return (
      <div>
          {personsToShow.map((person) => (
          <div key = {person.id}>
            <p>{person.name} {person.number} <button onClick={() => buttonClick(person.id, person.name)}>Delete</button></p>
            
          </div>
          ))}
      </div>
    );
  }

export default Display