import React from 'react'
import './topBar.css'
import logo from '../assets/logo.jpg'
import { Link } from 'react-scroll'

function TopBar() {
  return (
    <div className='topbar_container'>
        <div >
        <img src={logo} alt='logo' className='logo'/>
        </div>
        <div  className='option_container'>
            <div className='heading'>
              <Link 
              // to='home_page' 
              className='top_item'
              activeClass='active' to='home_page'
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              >Home</Link>
              <Link to='service_screen'
               className='top_item'
               activeClass='active'
               spy={true}
               smooth={true}
               offset={-100}
               duration={500}
              >Services</Link>
              <Link to='about_screen' 
              className='top_item'
              activeClass='active'
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              >About us</Link>
              <Link to='contact_screen' 
              className='top_item'
              activeClass='active'
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              >Contact us</Link>
            {/* <h2>Home</h2> */}
            {/* <h2>Services</h2>
            <h2>About us</h2>
            <h2>Contact us</h2>  */}
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
