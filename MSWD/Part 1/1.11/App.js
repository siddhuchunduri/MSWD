import React, { useState } from 'react'
const Statistics = (props) =>{
  if ((props.right+props.middle+props.left) === 0 ){
    return(
      <div>
        No Feedback given
      </div>
    )
  }
  return (
    <div>
      <Statistic text="Good" value = {props.left} />
      <Statistic text="Neutral" value = {props.middle} />
      <Statistic text="Bad" value = {props.right} />
      <Statistic text="Total" value = {props.right+props.middle+props.left} />
      <Statistic text="Average" value = {(props.left-props.right)/(props.left+props.middle+props.right)} />
      <Statistic text="Positive" value=  {(props.left/(props.right))*100} />
    </div>
  )
}
const Statistic = (props) =>{
  return (
    <div>
      
        <tr>
          <td>
      {props.text} : {props.value}
      </td>
      </tr>
     
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
        
        <Statistics left={left} middle={middle} right={right} />
      </div>
    )
  }
export default App