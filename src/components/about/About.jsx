import React from 'react'
import './about.css' 
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {AiOutlineFolderOpen} from 'react-icons/ai'

const About = () => {
  return (
    <section id ='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={ME} alt="About Image" />
          </div>
        </div>
      
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>3+ years working</small>
            </article>

            <article className="about__card">
              <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>1+ worldwide</small>
            </article>

            <article className="about__card">
              <AiOutlineFolderOpen className='about__icon'/>
              <h5>Proyects</h5>
              <small>Over 5</small>
            </article>
           </div>

            <p>
            Business and managment profesional degree. Great working under high pressure enviroments and solving problems with creative solutions. 
            Recently i studied in SoyHenry Bootcamp FullStack Web-Development and got the Google Analytics Data Analyst Certificate, 
            learning in deep R, Python, SQL Tableau and advanced Excel.
            </p>
           <a href="#contact" className='btn btn-primary'>Let's Talk</a>
          </div>
        </div>
    </section>
  )
}

export default About