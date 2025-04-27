import { useReducer } from "react";

import React from 'react'
const initialState = {count: 0}

const countReducer = (state, action) => {
    switch(action.type) {
        case "Increment":
            return {count : state.count + 1}
        case "Decrement": 
            return {count : state.count - 1}
        case "Reset":
            return {count: 0}
        default:
            return state
    }
}
const UseReducer = () => {
    const [count , dispatch] = useReducer(countReducer, initialState)
  return (
    <div>
        <h1>Counter using useReducer</h1>
        <h1>Count is {count.count} </h1>
        <button onClick={() => dispatch({type: "Increment"})}>Increment</button>
        <button onClick={() => dispatch({type: "Decrement"})}>Decrement</button>
        <button onClick={() => dispatch({type: "Reset"})}>Reset</button>
    </div>
  )
}

export default UseReducer