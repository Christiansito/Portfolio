import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react'
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_2ynorjl', 'template_51bjpzw', form.current, 'nN6Vvxhg5q3Bl7PS9')
    e.target.reset()
  };

  return (
    <section id ='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>Ch.calvanese@gmail.com</h5>
            <a href="mailto:ch.calvanese@gmail.com" target="_blank" rel="noreferrer">Send a message</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon'/>
            <h4>Whatsapp</h4>
            <h5>+56996158263</h5>
            <a href="https://api.whatsapp.com/send?phone=+56996158263" target="_blank" rel="noreferrer">Send a message</a>
          </article>
        </div>
        {/*END OF CONTACT OPTIONS */}
        <form ref = {form} onSubmit = {sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' requiered />
          <input type="email" name='email' placeholder='Your Email' requiered />
          <textarea name="message" rows="7" placeholder='Your Message' requiered></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact