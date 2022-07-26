import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FaKaggle} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer'>Thank's for the visit!</a>

      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/christian-calvanese-carril-985a3b70/?locale=en_US" target="_blank" rel="noreferrer"><BsLinkedin/></a>
        <a href="https://github.com/Christiansito" target="_blank" rel="noreferrer"><FaGithub/></a>
        <a href="https://www.kaggle.com/christiancalvanese" target="_blank" rel="noreferrer"><FaKaggle/></a>

      </div>
    </footer>
  )
}

export default Footer