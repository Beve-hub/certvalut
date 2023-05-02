import React, {  useState} from 'react';
import { Outlet, useNavigate } from "react-router-dom";
import {CiSearch} from 'react-icons/ci'
import {FaRegFilePdf} from 'react-icons/fa'
import {RiDeleteBinLine} from 'react-icons/ri'
import {AiOutlineMail, AiOutlineDownload} from 'react-icons/ai'
import * as XLSX from "xlsx";

const Csvpage = () => {
 
  const [items, setItems] = useState([]);
  
  const navigate = useNavigate();

  const readExcel = (file) => {
    const promise = new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsArrayBuffer(file);

      fileReader.onload = (e) => {
        const bufferArray = e.target.result;

        const wb = XLSX.read(bufferArray, { type: "buffer" });

        const wsname = wb.SheetNames[0];

        const ws = wb.Sheets[wsname];

        const data = XLSX.utils.sheet_to_json(ws);

        resolve(data);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });

    promise.then((d) => {
      setItems(d);
    });
  };
   
    return (
      <div className='pt-[10rem] px-20 '>
         <div className='flex items-center justify-between'>
        <div className='flex border w-fit rounded-md items-center px-2'>
        <button className='text-sm py-2 w-fit rounded-md px-6'>+ Add Recipent</button>
        </div>
        <div  className='grid justify-items-end gap-3'>
          <button  onClick={() => navigate("/csvlayout")} className='bg-[blue] text-white text-sm py-2 w-fit rounded-md px-6'>Preview</button>
          <div className='flex border w-fit rounded-md items-center px-2'>
          <CiSearch size={15} className='ml-2'/>
          <input type='text' placeholder='search' className='text-md placeholder:pl-2 focus:outline-none'/>
        </div>
        </div>
           
      </div>
  
        <div className='p-8 bg-slate-100 h-[32rem] rounded-lg mt-10  items-center justify-center'>
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
          <div className='w-[500px] text-center mt-[2rem] ml-[5rem] border-2 border-gray-300 '>
            <button  className='flex items-center text-sm text-blue-700 justify-between '>
              <input type="file" onChange={(e) => { const file = e.target.files[0];
              <AiOutlineDownload/>
              readExcel(file);
            }}/>
            <p className=" text-[blue">Uploade list sheet</p>
          </button>
          </div>
          <div className='mt-[2rem]'> 
          <table class="text-center  ml-[5rem]  w-[70rem] h-[20rem] border border-slate-300  ">
           <thead>
             <tr>
               <th scope="col">Name</th>
               <th scope="col">Email</th>
               <th scope="col">Wallet</th>
             </tr>
           </thead>
           <tbody className='border'>
             {items.map((d) => (
               <tr className='border border-slate-300' key={d.Items}>
                 <td>{d.Name}</td>
                 <td>{d.Email}</td>
                 <td>{d.Wallet}</td>
               </tr>
             ))}
           </tbody>
         </table>
        </div>
        </div>
  
        <Outlet />
    </div>
  )
}

export default Csvpage
