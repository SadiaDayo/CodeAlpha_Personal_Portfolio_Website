import React from 'react';
import './contact.css';
import github from '../../assets/github.png';
import fb from '../../assets/facebook-logo.png';
import linkedin from '../../assets/linkedin.png';
import insta from '../../assets/insta.png';

const Contact = () => {
  return (
    <section id='contactPage'>
        <div id='contact'>
            <h1 className='contactPageTitle'>Contact Me</h1>
            <span className='contactDesc'>Please fill out the form below to discuss any work opportunities.</span>
        <form className='contactForm'>
            <input type='text' className='name' placeholder='Your Name'/>
            <input type='email' className='email' placeholder='Your Email'/>
            <textarea className='msg' name='message' rows='8' placeholder='Your Message'></textarea>
            <button type='submit' value='send' className='submitBtn'>Submit</button>
            <div className='links'>
    <a href="https://www.linkedin.com/in/sadia-dayo/">
        <img src={linkedin} alt='linkedin' className='link'/>
    </a>
    <a href="https://www.facebook.com/sadiadayo15?mibextid=ZbWKwL/">
        <img src={fb} alt='facebook' className='link'/>
    </a>
    <a href="https://www.instagram.com/">
        <img src={insta} alt='instagram' className='link'/>
    </a>
    <a href="https://github.com/SadiaDayo/">
        <img src={github} alt='github' className='link'/>
    </a>
</div>
        </form>
        </div>
    </section>
  )
}

export default Contact