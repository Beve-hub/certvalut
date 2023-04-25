import React, {  useState } from 'react'
import {CiSearch} from 'react-icons/ci'
import {FaRegFilePdf} from 'react-icons/fa'
import {RiDeleteBinLine} from 'react-icons/ri'
import {AiOutlineMail, AiOutlineDownload} from 'react-icons/ai'
import Modal from './modal/Modal'





const Credentials = () => {
  const [showModal, setShowModal] = useState(false);

  const handleOnClose = () => setShowModal(false);

  
  

  return (
    <div className='pt-[10rem] px-20 '>
      <div className='flex items-center justify-between'>
        <div className='flex border w-fit rounded-md items-center px-2'>
          <CiSearch size={15} className='ml-2'/>
          <input type='text' placeholder='search' className='text-md placeholder:pl-2'/>
        </div>
        <div className='bg-[blue] text-white text-sm py-1 w-fit rounded-md items-center px-2'>
          <button onClick={() => setShowModal(true)}>+ Issue certificate</button>
        </div>
           
      </div>

      <div className='p-8 bg-slate-100 h-[32rem] rounded-lg mt-10  items-center justify-center'>
        <div className='flex justify-end items-center gap-4'>
          <button className='border-2 py-1 px-6 text-sm rounded-md flex items-center gap-1'>
            <FaRegFilePdf size={15}/>Publish
          </button>
          <button className='border-2 py-1 px-6 text-sm rounded-md flex items-center gap-1'>
            <RiDeleteBinLine size={15}/>Delete
          </button>
          <button className='border-2 py-1 px-6 text-sm rounded-md flex items-center gap-1'>
            <AiOutlineMail size={15}/>Resend Email
          </button>
          <button className='border-2 py-1 px-6 text-sm rounded-md flex items-center gap-1'>
            <AiOutlineDownload size={15}/>Export
          </button>
        </div>
        <div className='w-[600px] text-center mt-[10rem] ml-[20rem] border-dashed border-2 border-sky-500 rounded-lg '>
          <h1 className='font-bold p-4 text-lg' >Upload a spreadsheet with recipients’ data from your computer</h1>
          <p className='text-gray-500 pb-6'>We accept most spreadsheet formats, i. e. : CSV, XLSX, and XLS</p>
            <button className='flex items-center text-lg text-blue-700 gap-2 border-dashed border-t-2 border-sky-500 w-full justify-center p-6'>
              <AiOutlineDownload size={20}/> Upload list sheet
            </button>
         </div>
      </div>

      

      <Modal onClose={handleOnClose} visible={showModal} />
     </div>
   
  )
}

export default Credentials
