import React from 'react'
import './assets/style.css'
import GoogleImgComponent from './GoogleImgComponent'
import ButtonCenterComponent from './ButtonCenterComponent'
import SearchBarComponent from './SearchBarComponent'

export default function MainSectionComponent() {
  return (  
    <div className='MainSectionComponent'>
      <div>
    <GoogleImgComponent />
    <SearchBarComponent />
    <ButtonCenterComponent />
    </div>
</div>
  )
}
