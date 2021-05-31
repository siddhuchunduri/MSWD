import React from 'react'
const Course = (props) => {
  return (
    <div>
      <h1>{props.course.name}</h1>
      <h4>{props.course.parts[0].name} {props.course.parts[0].exercises} </h4>
      <h4>{props.course.parts[1].name} {props.course.parts[1].exercises} </h4>
      <h4>{props.course.parts[2].name} {props.course.parts[2].exercises} </h4>
      <h4>{props.course.parts[3].name} {props.course.parts[3].exercises} </h4>
      <h4>Total of {props.course.parts[0].exercises+props.course.parts[1].exercises+props.course.parts[2].exercises+props.course.parts[3].exercises} Exercises</h4>
    </div>
  )
}
const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
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
        name: 'Redux',
        exercises: 11,
        id: 4
      }
    ]
  }

  return (
  <Course course={course} />)
}


export default App