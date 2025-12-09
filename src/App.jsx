/* import { useState } from 'react';
export default function App() {
  const[name,setName]=useState("");
  const [Aname,setAname]=useState();
  const handleName=(e)=>{setName(e.target.value)}
  const handleSubmit=(e)=>{
    e.preventDefault();
    //console.log("form submitted successfully");
    //setName(name) optional 
      setAname(name)

  }
  return (
    <form onSubmit={handleSubmit}>
  <input type="text" placeholder="Enter you name" 
   onChange={handleName} />
  <button type="submit">Submit</button>
  <p>{Aname}</p>
 </form>
  );
}
 */

import { useRef, useState } from 'react'

export default function App() {
  const inputRef=useRef();
  const [name,setName]=useState();
  const handleClick=()=>{
  console.log(inputRef.current.value);
    
  }
  return (
    <>
      <input type="text" placeholder="Typing something..."
      ref={inputRef}/><br/>
      <button onClick={handleClick}>Submit</button>
      <p>{name}</p>
    </>
  );
}
