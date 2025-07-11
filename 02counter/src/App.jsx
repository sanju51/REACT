import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let[c,setc]=useState(4)
  const addValue=()=>{
    setc(++c)
  }
  const subValue=()=>{
    setc(--c)
  }
  

  return (
    <>
    <h1>Sanjana</h1>
    <h2>Counter:{c}</h2>
    <button
    onClick={addValue}
    >Add</button>
    <br />
    <br></br>
    <button
    onClick={subValue}>Subtract</button>
    </>
  )
}

export default App
