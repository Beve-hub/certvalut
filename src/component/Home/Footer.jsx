import React from 'react'
import Logo from '../../images/logo.png'
import {BsFacebook, BsLinkedin} from 'react-icons/bs'
import {AiFillTwitterCircle} from 'react-icons/ai'

const Footer = () => {
  return (
    <section id="Steps" className="min-h-[10rem] bg-[--primary-color] flex py-10 md:flex-row grid-col-2 items-center justify-center ">
      <div className='max-w-[1640px] mx-auto grid md:grid-cols-4 gap-16 px-8 py-10 items-center'>
        <img src={Logo} alt='/'/>
        <div>
          <ul className='text-white'>
            <li className='font-bold'>Company</li>
            <li><a href='/'>Home</a></li>
            <li>About</li>
            <li><a href='/Design'>Services</a></li>
          </ul>
        </div>
        <div>
          <ul className='text-white'>
            <li className='font-bold'>Explore</li>
            <li><a href='/'>Terms&Conditions</a></li>
            <li>Privacy</li>
            <li>Policy</li>
            <li>Pricing</li>
          </ul>
        </div>
        <div>
          <ul className='text-white flex gap-8'>
            <li><BsLinkedin size={30}/></li>
            <li><AiFillTwitterCircle size={30}/></li>
            <li><BsFacebook size={30}/></li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Footer
