import { Outlet} from "react-router-dom";
import {CiSearch} from 'react-icons/ci'
import {FaRegFilePdf} from 'react-icons/fa'
import {RiDeleteBinLine} from 'react-icons/ri'
import {AiOutlineMail, AiOutlineDownload} from 'react-icons/ai'
import {CiWallet} from 'react-icons/ci'


const History = () => {

   
    return (
      <div className='pt-[10rem] px-20 '>
        <div className='flex justify-between items-center px-4 bg-slate-100 h-[5rem] rounded-lg'>
          <div className='flex border h-[2rem] w-fit rounded-md items-center '>
             <CiSearch size={15} className='ml-2'/>
             <input type='text' placeholder='search' className='text-md bg-transparent placeholder:pl-2 focus:outline-none'/>
           </div>
           <div className='flex justify-end items-center gap-4'>
               <button  className='border-2 py-1 px-6 text-sm rounded-md flex items-center gap-1'>
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
        </div>

        <div className='bg-slate-100 w-full  mt-10 h-[28rem] pt-[2rem] rounded-lg'>
        <table className="text-center ml-[3rem] mt-[rem]  w-[80rem]  h-[10rem] border border-slate-300">
          <thead> 
         <tr>
            <th scope="col" >Subject</th>
            <th scope="col" >Issue</th>
            <th scope="col" >Recipent</th>
            <th scope="col" >Status</th>
         </tr>
          </thead>
          <tbody className='border'>
            <tr className="border">
              <td>Tech Business</td>
              <td>24 Aprill 2023 </td>
              <td>4</td>
              <td className="flex gap-2 items-center justify-center">
                <CiWallet/>
                <AiOutlineMail/>
              </td>
            </tr>
            <tr className="border">
              <td>Tech Business</td>
              <td>24 Aprill 2023 </td>
              <td>4</td>
              <td className="flex gap-2 items-center justify-center">
                <CiWallet/>
                <AiOutlineMail/>
              </td>
            </tr>
            <tr>
              <td>Tech Business</td>
              <td>24 Aprill 2023 </td>
              <td>4</td>
              <td className="flex gap-2 items-center justify-center">
                <CiWallet/>
                <AiOutlineMail/>
              </td>
            </tr>
          </tbody>
        </table>
        </div>
  
        <Outlet />
    </div>
  )
}

export default History
