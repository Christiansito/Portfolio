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
              <p>Loren, impsum x x x </p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Loren, impsum x x x </p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Loren, impsum x x x </p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Loren, impsum x x x </p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Loren, impsum x x x </p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Loren, impsum x x x </p>
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
              <p>Loren, impsum x x x </p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Loren, impsum x x x </p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Loren, impsum x x x </p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Loren, impsum x x x </p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Loren, impsum x x x </p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Loren, impsum x x x </p>
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
              <p>Loren, impsum x x x </p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Loren, impsum x x x </p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Loren, impsum x x x </p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Loren, impsum x x x </p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Loren, impsum x x x </p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Loren, impsum x x x </p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services