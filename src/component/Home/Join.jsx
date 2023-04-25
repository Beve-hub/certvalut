import React from 'react'
import IMG1 from '../../images/1.png'
import IMG2 from '../../images/2.png'
import IMG3 from '../../images/3.png'
import IMG4 from '../../images/Group 29.png'

const Join = () => {
  return (
    <section id="join" className="min-h-[30rem] flex py-10 md:flex-row grid-col-2 items-center justify-center ">
      <div>
        <h1 className='font-bold text-lg ml-10'>Join Certifier issuers and level up your approach to certification!</h1>
        <div className='max-w-[1640px] mx-auto grid md:grid-cols-4 gap-4 px-8 py-10'>
          <div className='border-2 px-2 w-[18rem]'>
            <img src={IMG1} alt='join_img' className='mt-4 mx-2 w-[30px] h-[30px]'/>
            <p className='font-semibold text-sm pt-2'>Saving Time & Resources</p>
            <p className='text-xs text-left py-2 pb-4'>On average, Certifier saves businesses 6 hours each week by automating certification processes</p>
          </div>
          <div className='border-2 px-2 w-[18rem]'>
            <img src={IMG2} alt='join_img' className='mt-4 mx-2 w-[30px] h-[30px]'/>
            <p className='font-semibold text-sm pt-2'>Looking Professional</p>
            <p className='text-xs text-left py-2 pb-4'>94% of our issuers claim feeling more professional by handling their certification process with Certifier</p>
          </div>
          <div className='border-2 px-2 w-[18rem]'>
            <img src={IMG3} alt='join_img' className='mt-4 mx-2 w-[30px] h-[30px]'/>
            <p className='font-semibold text-sm pt-2'>Saving Time & Resources</p>
            <p className='text-xs text-left py-2 pb-4'>On average, Certifier saves businesses 6 hours each week by automating certification processes</p>
          </div>
          <div className='border-2 px-2 w-[18rem]'>
            <img src={IMG4} alt='join_img' className='mt-4 mx-2 w-[30px] h-[30px]'/>
            <p className='font-semibold text-sm pt-2'>Saving Time & Resources</p>
            <p className='text-xs text-left py-2 pb-4'>On average, Certifier saves businesses 6 hours each week by automating certification processes</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Join
