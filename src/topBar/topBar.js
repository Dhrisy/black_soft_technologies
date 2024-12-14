import React from 'react'
import './topBar.css'
import logo from '../assets/logo.jpg'

function TopBar() {
  return (
    <div className='topbar_container'>
        <div >
        <img src={logo} alt='logo' className='logo'/>
        </div>
        <div  className='option_container'>
            <div className='heading'>
            <h2>Home</h2>
            <h2>Services</h2>
            <h2>About us</h2>
            <h2>Contact us</h2> 
            </div>

        {/* <div className='heading'>
            <h2>Home</h2>
            {/* <h2>Services</h2>
            <h2>About us</h2>
            <h2>Contact us</h2> 
        </div> */}
        <div className='divider'></div>
        </div>
      
    </div>
  )
}

export default TopBar
