import React from 'react'

export default function Footer() {
    const year=new Date().getFullYear();
  return (
    <div>
      <div><p>&copy; {year} MERN Shop. All rightsw reserved.</p></div>
    </div>
  )
}
