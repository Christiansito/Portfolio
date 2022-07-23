import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FaKaggle} from 'react-icons/fa'

const Headersocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/christian-calvanese-carril-985a3b70/?locale=en_US" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/Christiansito" target="_blank"><FaGithub/></a>
        <a href="https://www.kaggle.com/christiancalvanese" target="_blank"><FaKaggle/></a>
    </div>
  )
}

export default Headersocials