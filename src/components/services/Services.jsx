import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Write well designed, 
                testable, efficient code by using best software development practices</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Cooperate with web designers to match visual design intent</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Relational database systems, 
                Object Oriented Programming and web application development</p>
            </li>
          </ul>
        </article>
        {/*END OF WEB DEV */}
        <article className="service">
          <div className="service__head">
            <h3>Data Analyst</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Report generation, data managment and patter recognition in the datasets</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Prescriptive, descriptive and predictive analysis</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Data cleaning and data visualization</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Automation of data manipulation</p>
            </li>
          </ul>
        </article>
        {/*END Of Data Analyst */}
        <article className="service">
          <div className="service__head">
            <h3>Business & Managment</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Strong marketing skills </p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Strong overview of the financial, economics and logistics in any business industry</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Business planning and KPI oriented results</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Deployment of short, mid and long term strategies</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services