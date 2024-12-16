import React from 'react'
import './Services.css'
import AppDevImage from '../assets/app.jpg'
import WebImage from '../assets/web.jpg'
import SoftwareImage from '../assets/software.jpg'

function Services() {
    return (
        <div id='service_screen' className='service_container'>
            <h1>
                Your Ultimate Business Partner for Success
            </h1>
            <div className='service_cards'>
                {/* app card */}
                <div className='card'>
                    <img src={AppDevImage} alt='application' className='app_image' />
                    <div className='card_content'>
                        <h3>Mobile App Development</h3>
                        <span>
                            Innovative and user-friendly mobile applications are key to driving customer satisfaction and fueling business growth. Stay ahead in the competitive mobile landscape with our seamless app development solutions designed to meet your unique needs. Transform your digital presence and redefine user experiences with our intuitive and feature-rich mobile applications.
                        </span>
                    </div>
                </div>
                {/* web card */}
                <div className='card'>
                    <img src={WebImage} alt='web' className='app_image' />
                    <div className='card_content'>
                        <h3>Web application Development</h3>
                        <span>
                            We design and develop bespoke applications that elevate user experiences to new heights. By leveraging cutting-edge technologies, our expert developers create seamless, responsive, and visually captivating applications, custom-tailored to meet your business's unique needs. Let us transform your vision into robust, high-performing digital solutions that drive growth and innovation                    </span>
                    </div>
                </div>
                {/* software card */}
                <div className='card'>
                    <img src={SoftwareImage} alt='software' className='app_image' />
                    <div className='card_content'>
                        <h3>Software Development</h3>
                        <span>
                            We provide comprehensive end-to-end custom software development services, designed to bring your ideas to life. Our team collaborates closely with you to conceptualize, design, and implement software solutions that align perfectly with your business operations. From streamlining processes to enhancing adaptability in a dynamic market, our custom software solutions empower your business to optimize performance and achieve sustainable growth.                    </span>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Services
