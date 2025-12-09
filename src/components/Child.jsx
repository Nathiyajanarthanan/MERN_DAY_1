import React from 'react'
import GrandChild from './GrandChild'

export default function child(/* {propchild} */{custombutton}) {
  return (
    <div>
        {/* <h1>This is a Child Component</h1> */}
     {/*  child {propchild} */}
      {/* <GrandChild propGrand={propchild}/> */}
     <button onClick={custombutton}>Click</button>
    </div>
  )
}
