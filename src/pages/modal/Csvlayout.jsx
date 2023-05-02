import IMAGE from '../../images/bg-2.png'
import { useState } from 'react';
import Viewmodal from './Viewmodal';

const Csvlayout = () => {
  const [showModal, setShowModal] = useState(false);

  const handleOnClose = () => setShowModal(false);


  return (
    <div className='pt-[8rem] px-20 '>
       <div className='flex justify-end'>
          <div  className='flex justify-items-end gap-3'>
            <button className='border border-slate-300 text-gray-500 text-sm py-2 w-fit rounded-md px-6'>Save as draft</button>
            <button onClick={() => setShowModal(true)} className='bg-[blue] text-white text-sm py-2 w-fit rounded-md px-6'>Save and publish</button>
          </div>
        </div>
      <div className='flex justify-between mt-5'>
        <div className="bg-gray-200 w-[23rem] h-[18rem] rounded-md">
          <h1 className='p-6 font-bold text-lg'>Design & Recipient</h1> 
          <div className='flex mt-5 ml-5 gap-8'>
            <div className='font-bold grid gap-4'>
              <p>Design name</p>
              <p>Recipients number</p>
              <p>Issue date</p>
            </div>
            <div className='grid gap-4'>
              <p>Tech-01</p>
              <p>3</p>
              <p>12/04/2023</p>
            </div>
          </div>
        </div>
        <div className="bg-gray-200 w-[60rem] h-[34rem] rounded-md">
          <h1 className='font-bold m-14 text-lg'>Appearance Review</h1>
          <div className=' flex justify-center mt-[5rem]'>
            <img src={IMAGE} alt="pre_img" className='w-[30rem]'/>
          </div>
        </div>
      </div>

      <Viewmodal onClose={handleOnClose} visible={showModal} />
     </div>
  )
}

export default Csvlayout
