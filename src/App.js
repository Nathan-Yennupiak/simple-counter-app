import React from 'react'
import './App.css'
import {useState} from 'react'

//Main App
const App = () => {

  //
  const [counter, setCounter] = useState(0)
  return (
    <div className = "App">
      <h1> MY REACT COUNTER APP </h1>
      <hr></hr>

      <button onClick = {()=> {setCounter((prevCount) => prevCount-1)}}> <h1> - </h1></button>
      <h1> {counter} </h1>
      <button onClick = {()=> {setCounter((prevCount) => prevCount+1)}}> <h1> + </h1></button>
      <hr></hr>
      <p>Made with Love</p>
    </div>
  )
}
export default App