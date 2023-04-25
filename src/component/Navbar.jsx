import React, { useState } from 'react';
import Logo from '../images/logo.png';
import { links } from '../data';
import { Link, NavLink } from 'react-router-dom';
import { RiArrowDropUpLine, RiArrowDropDownLine } from 'react-icons/ri';
import ICON1 from '../images/metamask-icon.png';
import ICON2 from '../images/coinbase-logo 1.png';
import ICON3 from '../images/wallet-connect-logo 1.png';
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'


const Navbar = () => {
  const [open, setOpen] = useState(false);

  const [nav, setNav] = useState(true);

    const handleNav = () => {
        setNav(!nav);
    };


  return (
    <div className=' fixed w-full h-[6rem] bg-[#121212] px-10 flex items-center justify-between'>
      <div className='w-[10rem]'>
        <img src={Logo} alt='/' />
      </div>
      <div className='flex gap-8'>
        <ul className='text-white gap-8 items-center  md:flex hidden'>
          {links.map(({ name, path }, index) => {
            return (
              <li key={index}>
                <NavLink to={path} className=''>
                  {name}
                </NavLink>
              </li>
            );
          })}
        </ul>
        <div className='grid'>
          <div>
            <button
              onClick={() => setOpen((prev) => !prev)}
              className='font-semibold bg-[--btn-color] px-4 py-2 rounded-xl flex items-center sm:text-sm'
            >
              connect wallet{' '}
              {!open ? <RiArrowDropUpLine size={30} /> : <RiArrowDropDownLine size={30} />}
            </button>
          </div>
         {open && (
          <div className='absolute mt-14 rounded-lg bg-[--primary-color] grid items-center p-3 border-2 border-[green]'>
            <ul className='grip items-center cursor-pointer '>
              <li className='flex items-center gap-2 text-white py-4 hover:bg-gray-800 rounded-lg'>
                <img src={ICON1} alt='icon_img' className='w-[20px]' />
                Metamask
              </li>
              <li className='flex items-center gap-2 text-white py-4 hover:bg-gray-800 rounded-lg'>
                <img src={ICON2} alt='icon_img' className='w-[20px]' />
                Coinbase
              </li>
              <li className='flex items-center gap-2 text-white py-4 hover:bg-gray-800 rounded-lg'>
                <img src={ICON3} alt='icon_img' className='w-[20px]' />
                Wallet-connect
              </li>
            </ul>
          </div>
          )}
        </div>
      </div>

      <div onClick={handleNav} className='block md:hidden text-white'>
        {!nav ? <AiOutlineClose size={30}/> : <AiOutlineMenu size={30} /> }
      </div>

      <div className={!nav ? 'fixed left-0 top-0 w-[40%] h-full  border-r-gray-900 bg-[#fff] z-10 ease-in-out duration-500': 'fixed left-[-400%]'}>
         <ul className=' text-color grid items-center justify-center uppercase pt-24'>
         {links.map(({ name, path }, index) => {
            return (
              <li key={index} className='p-4'>
                <NavLink to={path} className=''>
                  {name}
                </NavLink>
              </li>
            );
          })}
         </ul>
        
      </div>
    </div>
  );
};

export default Navbar;
