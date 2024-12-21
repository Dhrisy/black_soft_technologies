import React from 'react';
import './home.css';
import AutoTypingAnimation from '../components/AutoTypingText';


function Home() {
  return (
    <div id="home_page" className="home_container">
      
      <video
        autoPlay
        loop
        muted
        className="background_video"
      >
        <source src={require('../assets/bg1.mp4')} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

     

      {/* Content */}
      <div className="content">
        <div className="left_container">
          <AutoTypingAnimation text={"Crafting Future-Ready Solutions for Your Business"} />
          <p className="description_text">
            Providing innovative solutions to meet your unique business needs through custom software development,
            cutting-edge technology, and strategic digital marketing strategies.
          </p>
        </div>
        
      </div>
      
    </div>
  );
}

export default Home;
