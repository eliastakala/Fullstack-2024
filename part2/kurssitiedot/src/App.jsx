const Header = ({course}) => {
  return (
      <h1 key = {course.id}>{course.name}</h1>
  )
}

const Part = ({part}) => {
  return (
    <>
      {part.name} {part.exercises}
    </>
  )
}

const Content = ({parts}) => {
  return (
    <div>
      {parts.map(content =>
        <p key = {content.id}>
          <Part part = {content}></Part>
        </p>)}
    </div>
  )
}

const Total = ({parts}) => {
  const numOfExercises = parts.reduce((sum, part) => sum + part.exercises, 0)  
  return (
      <b>
        total of {numOfExercises} exercises
      </b>
  )
}

const Course = ({course}) => {
  return (
    <div>
      <Header course = {course}/>
      <Content parts = {course.parts}/>
      <Total parts = {course.parts}/>
    </div>
  )
}

const App = () => {
  // const-määrittelyt
  const course = {
    name: 'Half Stack application development',
    id: 1,
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
        
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      },
      {
        name: 'Smoti',
        exercises: 100,
        id: 4
      }
    ]
  }

  return (
    <div>
      <Course course={course} />
    </div>
  )
}

export default App