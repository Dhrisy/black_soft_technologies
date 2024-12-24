import React from 'react';
import './About.css';

function About() {
  return (
    <div id='about_screen' className='about_container'>
      <div className='about_left'>
        <h1 className='about_heading'>Building the Future!</h1>
        <p className='about_description'>
          At <span className='brand_name'>Black Soft Technologies</span>, we combine <strong>cutting-edge development</strong> expertise with creative solutions to redefine possibilities.
        </p>
      </div>
      <div className='about_right'>
        <p className='about_subdescription'>
          Committed to <strong>excellence</strong>, we approach every project with a focus on <em>innovation</em>, precision, and delivering success that drives your business forward.
        </p>
        {/* <button className='about_cta'>Learn More</button> */}
      </div>
    </div>
  );
}

export default About;
