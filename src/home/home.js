import React from 'react'
import './home.css'
import TopBar from '../topBar/topBar'
import homeImage from '../assets/home_image.jpg'
import homeImage1 from '../assets/home_image1.jpg'
import AutoTypingAnimation from '../components/AutoTypingText'

function Home() {
  return (
    <div className='home_container'>
      <TopBar />
      <div className='left_container'>
      <AutoTypingAnimation text={" Crafting Future-Ready Solutions for Your Business "}/>
      
      </div>

      <img src={homeImage1} alt='home_image' className='home_image' />

    </div>

  )
}

export default Home
