import React from 'react'
import "./Contact.css"
import emailjs from '@emailjs/browser';
import { useRef } from "react";
import { themeContext } from '../../Context'
import { useContext } from "react";

const Contact = () => {
    
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_cl7oa38', 'template_h4eju2d', form.current, 'PeFmIvj-r6y1ulCjkqkwB')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        }); 
    };


    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;





  return (
    <div className="contact-form">
        <div className="c-left">
        <div className="s-left">
            <span style={{color:darkMode?'white':''}}>Get in touch</span>
            <span>Contact Me</span>
            <div className="blur s-blur1" style={{
                background:"#ABF1FF94"
            }}></div>
            </div> 
        </div>
        <div className="c-right">
        <form ref={form} onSubmit={sendEmail}>
            <input type="text" name='user_name' className='user' placeholder='Name' />
            <input type="email" name="user_email" className='user' placeholder="Email" />
            <textarea name="message" className='user' placeholder='Message'/>
            <input type="submit" value="Send" className='button'/>
            
            <div
            className='blur c-blur1'
            style={{background:"var(--purple)"}}
            
            ></div>
            </form>
        </div>
    </div> 
  )
}

export default Contact