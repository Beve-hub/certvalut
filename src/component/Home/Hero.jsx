import React from 'react'
import Img1 from '../../images/certificate-maker.gif'

const Hero = () => {
  return (
    <section id="home" className="min-h-screen bg-[--primary-color] flex py-10 md:flex-row flex-col items-center justify-center ">
       <div className='text-white grid-col items-center md:mt-24 text-center'>
        <h1 className='text-3xl md:text-3xl text-2xl md:leading-normal leading-10 text-white font-bold'>Try Our Certificate Maker - It's Fun!</h1>
        <p className='text-center max-w-2xl ml-8 py-4'>Design an amazing certificate that anyone would be happy to receive in just a few clicks with Venngage, the online certificate maker.</p>
        <div className='flex justify-center py-8'>
          <button className='  bg-[--btn-color] rounded-lg px-8 py-4 text-[--primary-color] font-semibold'><a href='/Design'>Get Started</a></button>
          </div>
        <img src={Img1} alt='Hero-img' className='w-[50rem]'/>
       </div>
   </section>
  )
}

export default Hero
