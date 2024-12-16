import React from 'react'
import './Contact.css'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import Logo from '../assets/logo.jpg'

function Contact() {
    const formRef = useRef(); // Use React's useRef hook
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_shp8rkz', 'template_yhkdkge', formRef.current, {
                publicKey: 'UfCdklsBbFGX3MeFY',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                    alert('Email sent');
                    e.target.reset();
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };
    return (
        <div className='contact_container' id='contact_screen'>
            <img src={Logo} alt='app_logo' />
            <div className='content'>
                <h1>Let's talk</h1>
                <h3>For queries, please email us !</h3>
                <form ref={formRef} onSubmit={sendEmail} className='form_content'>
                <input
                    id='user_name' type='text' className='name'
                    placeholder='Your name' name='from_name' />
                <input id='user_email' type='text' className='email' placeholder='Your email' name='from_email' />
                <textarea id='user_message' type='text' className='message' placeholder='Your Message' name='message' rows={4} />

                <button type='submit' value="Send" className='submitBtn'>Submit</button>
                </form>

            </div>
        </div>
    )
}

export default Contact
