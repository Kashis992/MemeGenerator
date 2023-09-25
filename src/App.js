import React from "react"
import Navbar from './components/Navbar';
import Meme from './components/Meme';
export default function App(){ 
  /* CONCEPT OF WORKING USING STATE IN REACT
  const [count,setCount]= React.useState(0)
  function add(){
    setCount(counter => counter +1);
  }
  function subtract(){
    setCount(counter => counter -1);
  }*/
  
  return (
    <div>
  <Navbar />
     <Meme />
    </div> 






    /*Concetp of state
    <div className="counter">
      <button className="count-minus" onClick={subtract}>-</button>
      <div  className="count">
        <h1>{count}</h1>
      </div>
      <button className="count-add" onClick={add}>+</button>
    </div>*/
    
     
  )
  
}