import React from 'react'
import Hero from '../component/Home/Hero'
import Join from '../component/Home/Join'
import Step from '../component/Home/Step'
import Features from './../component/Home/Features';
import Footer from '../component/Home/Footer';

const Home = () => {
  return (
    <div>
      <Hero/>
      <Join/>
      <Step/>
      <Features/>
      <Footer/>
    </div>
  )
}

export default Home

