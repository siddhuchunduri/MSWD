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
        <p><Part p = {props.parts[0].name} e = {props.parts[0].exercises} /></p>
        <p><Part p = {props.parts[1].name} e = {props.parts[1].exercises} /></p>
        <p><Part p = {props.parts[2].name} e = {props.parts[2].exercises} /></p>
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
  const Total = (props) => {
    return (
      <div>
        <p>Total : {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises} </p>
      </div>
    )
  }
  const App = () => {
    const course = 'Half Stack application development'
    const parts = [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  
    return (
      <div>
       <Header course = {course}/>
       <Content parts = {parts} /> 
       <Total parts={parts} />
      </div>
    )
  }


export default App