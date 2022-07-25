import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>My Skills</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Web Development</h3>
          <div className="experience__content">
            <article className='experience__detail'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>HTML/CSS</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience__detail'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>JavaScript</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience__detail'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>ReactJs/Redux</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className='experience__detail'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>NodeJs/Sequelize</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className='experience__detail'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Postgresql</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>    
          </div>
        </div>
        {/*END OF FRONTEND*/}
        <div className="experience__backend">
            <h3>Data Analyst</h3>
            <div className="experience__content">
            <article className='experience__detail'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Excel/GoogleSpreadSheets</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience__detail'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>SQL</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className='experience__detail'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>R/Python</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className='experience__detail'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Tableau</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className='experience__detail'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Machine Learning</h4>
                <small className='text-light'>Beginner</small>
              </div>
            </article>    
          </div>
        </div>
      </div>
    </section>

  )
}

export default Experience