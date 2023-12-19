import React, { useContext } from 'react'
import {ConterContext } from '../../context/CounterContext'
import './Button.css' 
function Button() {
    const counterContext = useContext(ConterContext);
  return (
    <div>
        <button onClick={() => counterContext.setCount(counterContext.count + 1)}>Increment</button>
        <button onClick={() => counterContext.setCount(counterContext.count - 1)}>Decrement</button>
    </div>
  )
}

export default Button