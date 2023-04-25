import React from 'react'
import Img1 from '../../images/section-5.png'

const Step = () => {
  return (
    <section id="Steps" className="min-h-[30rem] flex py-10 md:flex-row grid-col-2 items-center justify-center ">
      <div className='max-w-[1640px] mx-auto grid md:grid-cols-2 gap-12 px-20 justify-center w-[80rem]'>
        <div className>
          <h1 className='font-semibold'>Certificate Maker: Design your certificates in minutes with the utmost professional touch</h1>
          <ul className='grid gap-2 mt-8'>
            <li className='flex items-baseline gap-4'><span className='bg-[#89f989] px-4 py-2 rounded-[100%]'>1</span>Start with Inspiration</li>
            <li className='flex items-baseline gap-4'><span className='bg-[#89f989] px-4 py-2 rounded-[100%]'>2</span>Browse & Customize your design</li>
            <li className='flex items-baseline gap-4'><span className='bg-[#89f989] px-4 py-2 rounded-[100%]'>3</span>Get Ready-To-Use Files</li>
            <li className='flex items-baseline gap-4'><span className='bg-[#89f989] px-4 py-2 rounded-[100%]'>4</span>Link excel sheet</li>
            <li className='flex items-baseline gap-4'><span className='bg-[#89f989] px-4 py-2 rounded-[100%]'>5</span>Get Ready-To-Use Files</li>
          </ul>

        </div>
        <img src={Img1} alt='step_img' className='w-[30rem] '/>

      </div>
    </section>
  )
}

export default Step
