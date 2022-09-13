import React,{useState} from "react"
import "./App.css"

const   Text = () => {
  let counter = 0;

  const Increment = () => {
    counter = counter + 1;

    console.log(counter)
  }
  return <div>  {counter} 
  <button onClick={Increment}>Increment</button></div>
}

export default Text;