import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpeg'
import AVTR2 from '../../assets/avatar2.png'
import AVTR3 from '../../assets/avatar3.jpeg'
import AVTR4 from '../../assets/avatar4.jpeg'

// import Swiper core and required modules
import {Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
  {
    avatar: AVTR1,
    name: 'Romina Gonzales', 
    review: 'We met in the Boocamp and since then we have been coding non stop! Christian is such a nice guy to work with, we have our weekly pair programing just for fun to help each other out.',
  },
  {
    avatar: AVTR2,
    name: 'Axel Descalzo', 
    review: 'I have worked with Christian a couple of times, i like to work with him because he is methodic and organized. He always manage to keep the team motivated.',
  },
  {
    avatar: AVTR3,
    name: 'David Maquieira', 
    review: 'At first we didnt get along because my creative side its a little bit messy and Christian dont like messines. He is like a mentor to me now, if i have a problem with a chunk of code and google doesnt know the answer he is my backup plan. I really love this guy.',
  },
  {
    avatar: AVTR4,
    name: 'Martina Scomazzon', 
    review: 'Being Christian teacher was a nourishing experience because he always wanted to dive deeper in the concepts, so it challenged me to refine every aspect of my mentoring.',
  },
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from peers</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
          modules={[Pagination]}
          spaceBetween={40}
          slidesPerView={1}
          pagination={{ clickable: true }}> 
        {
          data.map(({avatar, name, review}, index) => {
            return (
              <SwiperSlide key={index} className="testimonial">
                <div className="client__avatar">
                  <img src={avatar} alt = 'avatar'/>
                </div>
                <h5 className='client__name'>{name}</h5>
                <small className='client__review'>{review}</small>
             </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials