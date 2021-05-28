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
        <p><Part p = {props.part1} e = {props.exercises1} /></p>
        <p><Part p = {props.part2} e = {props.exercises2} /></p>
        <p><Part p = {props.part3} e = {props.exercises3} /></p>
      </div>
    )}

  const Part = (props) => {
 
    return(
      <div>
        <p> Name : {props.p} </p>
        <p> Exercises :  {props.e} </p>
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
     
    </div>
  )
}

export default App