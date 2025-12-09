import React, { useState } from 'react'
import Child from "./child"
export default function Parent({propname}) {
  const [count,setCount]=useState(0);
  const increment=()=>{setCount(count+1)} 
  return (
    <div>
      <h1>This is Parent Component </h1>
      {/* <h1> {propname} </h1>
      <Child propchild={propname}  /> */}
      <Child custombutton={increment}/>
      <h1>{count}</h1>
      
    </div>
  )
}
