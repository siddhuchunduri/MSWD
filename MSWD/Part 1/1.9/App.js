import React, { useState } from 'react'
const Right = (props) => {
    return (
      <div>
        Bad : {props.right}
      </div>
    )
  }
  const Left = (props) => {
    return (
      <div>
        Good : {props.left}
      </div>
    )
  }
  const Middle = (props) => {
    return (
      <div>
        Neutral : {props.middle}
      </div>
    )
  }
  const Total = (props) => {
    return (
      <div>
        Total : {props.total}
      </div>
    )
  }
  const Average = (props) => {
    return (
      <div>
        Average : {props.avg}
      </div>
    )
  }
  const Positive = (props) => {
    return (
      <div>
        Positive : {props.pos}
      </div>
    )
  }
  const All = (props) =>{
    if ((props.right+props.middle+props.left) == 0 ){
      return(
        <div>
          No Feedback given
        </div>
      )
    }
    return(
      <div>
        <Left left={props.left} />
        <Middle middle={props.middle} />
        <Right right={props.right} />
        <Total total={props.right+props.middle+props.left} />
        <Average avg = {(props.left-props.right)/(props.left+props.middle+props.right)} />
        <Positive pos={(props.left/(props.right))*100} />
      </div>

    )
  }
const App = () => {
    const [left, setLeft] = useState(0)
    const [right, setRight] = useState(0)
    const [middle, setMiddle] = useState(0)
  
  
  
    return (
      <div>
        <h1>Give Feedback</h1>
        <button onClick={() => setLeft(left + 1)}>Good</button>
        <button onClick={() => setMiddle(middle + 1)}>Neutral</button>
        <button onClick={() => setRight(right + 1)}>Bad</button>
        <h2>Statistics</h2>
        
        <All left={left} middle={middle} right={right} />
      </div>
    )
  }
export default App