import React from 'react'

const Header = (props) => {
  return (
    <div>
      <p>Course : {props.course}</p>
    </div>
  )}
  const Content = (props) => {
    return (
      <div>
        <p>part 1 : {props.part1}</p>
        <p>Exercises : {props.exercises1}</p>
        <p>part 2 : {props.part2}</p>
        <p>Exercises : {props.exercises2}</p>
        <p>part 3 : {props.part3}</p>
        <p>Exercises : {props.exercises3}</p>
      </div>
    )}
  const Total = (props) => {
    return(
      <div>
        <p> Total Exercises : {props.exercises1+props.exercises2+props.exercises3}</p>
      </div>
    )
  }
const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <h1>{course}</h1>
      <p>
        <Header course = {course}/>
      </p>
      <p>
        <Content part1 = {part1} part2 = {part2} part3 = {part3} exercises3 ={exercises3} exercises2 ={exercises2} exercises1={exercises1} />
      </p>
      <p><Total exercises1={exercises1} exercises2={exercises2} exercises3={exercises3}/></p>
    </div>
  )
}

export default App