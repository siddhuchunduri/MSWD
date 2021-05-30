import React, { useState } from 'react'

const App = () => {
    const [left, setLeft] = useState(0)
    const [right, setRight] = useState(0)
    const [middle, setMiddle] = useState(0)
  
    return (
      <div>
        <h1>Give Feedback</h1>
        
        <button onClick={() => setLeft(left + 1)}>
          Good
        </button>
        <button onClick={() => setMiddle(middle + 1)}>
          Neutral
        </button>
        <button onClick={() => setRight(right + 1)}>
          Bad
        </button>
        <h2>Statistics </h2>
        <h4>Good : {left}</h4>
        <h4>Neutral : {middle}</h4>
        <h4>Bad : {right}</h4>
        <h4>Total : {left+middle+right}</h4>
        <h4>Average: {(left-right)/(left+middle+right)} </h4>
        <h4>Positive : {(left/(right))*100}</h4>
        
        
      </div>
    )
  }
export default App