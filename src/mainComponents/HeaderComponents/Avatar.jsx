import React from 'react'
import Goat from './images/MESSI.jpg'

export default function Avatar() {
  return (
    <div>
      <img src={Goat} alt="messi" style={{ height: "24px", width: "24px" , borderRadius: "50%"}} />
    </div>
  )
}
