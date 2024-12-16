import React from 'react'
import './home.css'
import TopBar from '../topBar/topBar'
import homeImage1 from '../assets/home_image1.jpg'
import AutoTypingAnimation from '../components/AutoTypingText'

function Home() {
  return (
    <div id='home_page'  className='home_container'>
      <TopBar />
      <div className='left_container'>
      <AutoTypingAnimation text={" Crafting Future-Ready Solutions for Your Business "}/>
      <span>
      Providing innovative solutions to meet your unique business needs through custom software development, \ncutting-edge technology, and strategic digital marketing strategies.
      </span>
      
      </div>

      <img src={homeImage1} alt='home_image' className='home_image' />

    </div>

  )
}

export default Home
