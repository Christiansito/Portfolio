import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jfif'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpeg'
import IMG4 from '../../assets/portfolio4.png'
import IMG5 from '../../assets/portfolio5.jpg'
import EXC from '../../assets/Excel_dashboard.xlsx'
import cap from '../../assets/Google_Capstone_Proyect.rar'

//cambiar imagenes en portfolio

const data = [
  {
    id: 1,
    image: IMG1, 
    title: 'Dynamic Dashboard in excel',
    github: 'https://github.com/Christiansito/Portfolio_proyects/tree/main/Excel_dashboard',
    demo: '',
    download: EXC
  },
  {
    id: 2,
    image: IMG2, 
    title: 'Google Analytics Capston Proyect',
    github: 'https://github.com/Christiansito/Portfolio_proyects/tree/main/Google_Capstone_Proyect',
    demo: '',
    download: cap
  },
  {
    id: 3,
    image: IMG3, 
    title: 'Tableau Public Data Visualizations',
    github: 'https://github.com/Christiansito/Portfolio_proyects/tree/main/Google_Capstone_Proyect',
    demo: 'https://public.tableau.com/app/profile/christian.calvanese/viz/Google_Capstone_Proyect_Clean/casual_per_weekday'
  },
  {
    id: 5,
    image: IMG4, 
    title: 'Data Scrapping with SQL',
    github: 'https://github.com/Christiansito/Portfolio_proyects',
    demo: 'http'
  },
  {
    id: 6,
    image: IMG5, 
    title: 'Data Scrapping with Pyhton',
    github: 'https://github.com/Christiansito/Portfolio_proyects',
    demo: 'fttp'
  },
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>
        {
          data.map(({id, image, title, github, demo, download}) => {
            return(
              <article key={id} className='portfolio__item'>
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                  <h3>{title}</h3>
                  <div className='portfolio__item-cta'>
                    <a href={github} className='btn'>Github</a>
                  {demo[0] === 'h' ? <a href={demo} className='btn btn-primary' target={'_blank'} rel="noreferrer">Live Demo</a> : 
                  <a href={download} download className='btn btn-primary' target={'_blank'} rel="noreferrer">Download</a>}
                  </div>
             </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio