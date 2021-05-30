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
        <p><Part p = {props.p1} e = {props.e1} /></p>
        <p><Part p = {props.p2} e = {props.e2} /></p>
        <p><Part p = {props.p3} e = {props.e3} /></p>
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
    const part1 = {
      name: 'Fundamentals of React',
      exercises: 10
    }
    const part2 = {
      name: 'Using props to pass data',
      exercises: 7
    }
    const part3 = {
      name: 'State of a component',
      exercises: 14
    }
  
    return (
      <div>
        <Header course={course}/>
        <Content p1 = {part1.name} e1 = {part1.exercises} p2 = {part2.name} e2 = {part2.exercises} p3 = {part3.name} e3 = {part3.exercises}   />
        
      </div>
    )
  }


export default App