const Course = ({courses}) => {
    return (
      <div>
        <h1>Web development curriculum</h1>
        {courses.map(content =>
            <div key = {content.id}>
            <Header course = {content}/>
            <Content parts = {content.parts}/>
            <Total parts = {content.parts}/>
            </div>
        )}
      </div>
    )
  }
const Header = ({course}) => {
return (
    <h2>{course.name}</h2>
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
    <>
    {parts.map(content =>
        <p key = {content.id}>
        <Part part = {content}></Part>
        </p>)}
    </>
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

export default Course