import React from "react";
import "./Services.css";
import AppDevImage from "../assets/app.jpg";
import WebImage from "../assets/webdev.png";
import SoftwareImage from "../assets/software.jpg";
import DigitalImage from "../assets/digital.jpg"; 
import BrandingImage from "../assets/brand.jpg";


function Services() {
  return (
    <div id="service_screen" className="service_container">
      <h1 className="service_title">Your Ultimate Business Partner for Success</h1>
      <div className="service_cards">
        {/* Mobile App Development */}
        <div className="card">
          <img src={AppDevImage} alt="application" className="service_image" />
          <div className="card_content">
            <h3>Mobile App Development</h3>
            <p>
              Innovative and user-friendly mobile applications are key to driving customer
              satisfaction and fueling business growth. Transform your digital presence with
              intuitive and feature-rich apps.
            </p>
          </div>
        </div>

        {/* Web Development */}
        <div className="card">
          <img src={WebImage} alt="web" className="service_image" />
          <div className="card_content">
            <h3>Web Application Development</h3>
            <p>
              Elevate user experiences with cutting-edge, responsive, and visually captivating web
              applications tailored to your business needs.
            </p>
          </div>
        </div>

        {/* Software Development */}
        <div className="card">
          <img src={SoftwareImage} alt="software" className="service_image" />
          <div className="card_content">
            <h3>Software Development</h3>
            <p>
              From concept to implementation, we deliver custom software solutions that streamline
              processes and optimize business performance.
            </p>
          </div>
        </div>

        {/* Digital Marketing */}
        <div className="card">
          <img src={DigitalImage} alt="digital marketing" className="service_image" />
          <div className="card_content">
            <h3>Digital Marketing</h3>
            <p>
              Our strategic digital marketing services increase brand visibility and customer reach
              through compelling campaigns and creative content.
            </p>
          </div>
        </div>

        {/* Branding */}
        <div className="card">
          <img src={BrandingImage} alt="branding" className="service_image" />
          <div className="card_content">
            <h3>Branding</h3>
            <p>
              Build a strong, unique identity for your business with our branding solutions that
              leave a lasting impression in the digital marketplace.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
