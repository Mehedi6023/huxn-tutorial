import React, { useReducer, useState } from 'react'
import { countReducer, initialState } from './CounterReducer'
const Counter2 = () => {
    const [state, dispatch] = useReducer(countReducer, initialState)
const [inputValue, setInputValue] = useState('')

  return (
    <div>
        <h2>
        Counter Practice
        </h2>
        <h3>Count is : {state.count}</h3>
        <button onClick={() => dispatch({type: "Increment"})}>Increment</button>
        <button onClick={() => dispatch({type: "Decrement"})}>Decrement</button>
        <div>
            <input type="number" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
            <button onClick={() => {dispatch({type: "IncrementByAmount", payload: +inputValue}); setInputValue('')}}>Increment by amount</button>
            <button onClick={() => {dispatch({type: "DecrementByAmount", payload: +inputValue}); setInputValue('')}}>Decrement by amount</button>
        </div>
    </div>
  )
}

export default Counter2