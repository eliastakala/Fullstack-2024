const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Content = (props) => {
  return (
    <div>
      <p>{props.parts[0].part} {props.parts[0].exercises}</p>
      <p>{props.parts[1].part} {props.parts[1].exercises}</p>
      <p>{props.parts[2].part} {props.parts[2].exercises}</p>
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
      <p>Number of exercises {props.exercises}</p>
    </div>
  )
}

const App = () => {
  // const-määrittelyt
  const course = 'Half Stack application development'
  const parts = [
    {part: 'Fundamentals of React', exercises: 10},
    {part: 'Using props to pass data', exercises: 7},
    {part: 'State of a component', exercises: 14},
  ]

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total exercises={parts[0].exercises + parts[1].exercises + parts[2].exercises} />
    </div>
  )
}

export default App