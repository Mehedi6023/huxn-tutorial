import React, { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0)
    const increment = () => {
        setCount(count + 1)
    }
    const decrement = () => {
        setCount(count - 1)
    }
  return (
    <div>
        <h1>You clicked {count} times</h1>
        <button onClick={ increment } >Increment</button>
        <button onClick={ decrement } >DEcrement</button>
    </div>
  )
}

export default Counter