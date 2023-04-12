import React from 'react'
import Jully from './images/profile.png'

export default function Avatar() {
  return (
    <div>
      <img src={Jully} alt="profile" style={{ height: "28px", width: "28px" , borderRadius: "50%"}} />
    </div>
  )
}
