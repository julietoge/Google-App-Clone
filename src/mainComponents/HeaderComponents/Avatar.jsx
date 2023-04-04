import React from 'react'
import Goat from './images/profile.png'

export default function Avatar() {
  return (
    <div>
      <img src={Goat} alt="profile" style={{ height: "28px", width: "28px" , borderRadius: "50%"}} />
    </div>
  )
}
