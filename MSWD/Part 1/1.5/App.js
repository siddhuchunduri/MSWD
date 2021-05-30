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
  const Total = (props) => {
    return (
      <div>
        <p>Total : {props.e1 + props.e2 + props.e3} </p>
      </div>
    )
  }
  const App = () => {
    const course = {
      name: 'Half Stack application development',
      parts: [
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
    }
  
    return (
      <div>
        
        <Header course=  {course.name} />
        <Content p1={course.parts[0].name} p2={course.parts[1].name} p3={course.parts[2].name} e1 ={course.parts[0].exercises} e2 ={course.parts[1].exercises} e3 ={course.parts[2].exercises} />
        <Total  e1 ={course.parts[0].exercises} e2 ={course.parts[1].exercises} e3 ={course.parts[2].exercises} />      
      </div>
    )
  }
export default App