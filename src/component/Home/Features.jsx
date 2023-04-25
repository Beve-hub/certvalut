import React from 'react'
import IMG1 from '../../images/certifictae-1.png'
import IMG2 from '../../images/infographics.png'
import IMG3 from '../../images/Export.png'

const Features = () => {
  return (
    <section id="Features" className="min-h-[30rem] flex py-10 md:flex-row grid-col-2 items-center justify-center ">
      <div>
        <h1 className='font-bold text-lg ml-10'>our Features</h1>
        <div className='max-w-[1640px] mx-auto grid md:grid-cols-3 gap-4 px-8 py-10'>
          <div className='max-w- border-2 px-2 flex-col justify-center w-[18rem]'>
            <img src={IMG1} alt='join_img' className=' w-[30px] h-[30px] mt-6 relative left-24'/>
            <p className='font-semibold text-xs pt-2 text-center'>Not just a certificate generator</p>
            <p className='text-xs text-left py-2 pb-4 text-center'>CertVault is an all in one solution for all aspects of digital certificate, from design, issuance and signing it on the Blockchain.</p>
          </div>
          <div className='max-w- border-2 px-2 w-[18rem]'>
            <img src={IMG2} alt='join_img' className='mt-6 mx-2 w-[30px] h-[30px] relative left-24'/>
            <p className='font-semibold text-xs pt-2 text-center'>Features beyond the expected</p>
            <p className='text-xs text-left py-2 pb-4 text-center'>With CertVault, we offer proof of knowledge nfts or proof of ownership nfts along side the digital certificate</p>
          </div>
          <div className=' border-2 px-2 w-[18rem]'>
            <img src={IMG3} alt='join_img' className='mt-6 mx-2 w-[30px] h-[30px] relative left-24'/>
            <p className='font-semibold text-xs pt-2 text-center'>Store and verify</p>
            <p className='text-xs text-left py-2 pb-4 text-center'>CertVault helps to manage all generated certificates in one place and also offers feature to verify certificate or nfts authenticity</p>
          </div>
          
        </div>
      </div>
    </section>
  )
}

export default Features
