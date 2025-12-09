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


/* import { useRef, useState } from 'react'

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
 */

/* 
import React, { useState, useEffect } from 'react'

export default function App() {
  const [type, setType] = useState("photos");
  const [data, setData] = useState([]);


  useEffect(() => {
  console.log("Rendering");
       fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then(response => response.json())
      .then(json => setData(json)); // Save data to state
  }, [type]);

  return (
    <> 
      <button onClick={() => setType("photos")}>Photo</button>
      <button onClick={() => setType("albums")}>Album</button>
      
      <ul>
        {data.slice(0, 10).map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
</>
);
} */
import React, { useState } from 'react'
export default function App() {
  const [name,setName]=useState("");
  const userobj=JSON.parse(localStorage.getItem("Name")); //this is a for convert string into object 
  const handleSave=()=>{ 
 // localStorage.setItem("Name",name)
 const user={
  name:name,
  role:"student"
 };
 localStorage.setItem("Name",JSON.stringify(user)); 

  }
  return (
    <>
      <input 
      placeholder="Name"
      value={name}
      onChange={(e)=>setName(e.target.value)}/>
      <button onClick={handleSave}>Save</button>
      <p>{userobj?.name}</p>
    </>
  )
}
