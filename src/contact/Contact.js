import React, { useRef } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";
import Logo from "../assets/logo.jpg"; // Ensure correct path

function Contact() {
  const formRef = useRef();

  // Function to send email
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_shp8rkz", "template_yhkdkge", formRef.current, {
        publicKey: "UfCdklsBbFGX3MeFY",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          alert("Email sent successfully!");
          e.target.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
          alert("Failed to send email. Please try again later.");
        }
      );
  };

  return (
    <div className="contact_container" id="contact_screen">
      {/* Logo */}
      <img src={Logo} alt="app_logo" className="contact_image" />
     <div className="contact_form">
     <h1>Contact Us</h1>
     <h3>We'd love to hear from you!</h3>
     <form ref={formRef} onSubmit={sendEmail} className="form_content">
          <input
            id="user_name"
            type="text"
            className="name"
            placeholder="Your Name"
            name="from_name"
            required
          />
          <input
            id="user_email"
            type="email"
            className="email"
            placeholder="Your Email"
            name="from_email"
            required
          />
          <textarea
            id="user_message"
            className="message"
            placeholder="Your Message"
            name="message"
            rows={4}
            required
          />
          <button type="submit" className="submitBtn">
            Submit
          </button>
        </form>
      </div>
      {/* <div className="content">
        <h1>Contact Us</h1>
        <h3>We'd love to hear from you!</h3>

        {/* Contact Form 
        <form ref={formRef} onSubmit={sendEmail} className="form_content">
          <input
            id="user_name"
            type="text"
            className="name"
            placeholder="Your Name"
            name="from_name"
            required
          />
          <input
            id="user_email"
            type="email"
            className="email"
            placeholder="Your Email"
            name="from_email"
            required
          />
          <textarea
            id="user_message"
            className="message"
            placeholder="Your Message"
            name="message"
            rows={4}
            required
          />
          <button type="submit" className="submitBtn">
            Submit
          </button>
        </form>
    
    
      </div> */}
    </div>
  );
}

export default Contact;
