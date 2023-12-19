import { useState, useContext } from 'react'
import './App.css'
import Button from './components/Button/Button'
import { ConterContext } from './context/CounterContext'
function App() {

  const counterContext = useContext(ConterContext);
  return (
    <>
        <h1>Count {counterContext.count}</h1>
        <Button />
      
    </>
  )
}

export default App
