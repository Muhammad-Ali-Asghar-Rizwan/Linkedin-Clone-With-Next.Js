import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { IoHomeSharp } from "react-icons/io5";
import { IoMdPersonAdd } from "react-icons/io";
import { FaShoppingBag } from "react-icons/fa";
import { AiFillMessage } from "react-icons/ai";
import { IoIosNotifications } from "react-icons/io";
import Image from 'next/image';
import { RiShoppingBasketLine } from "react-icons/ri";
import { CgMenuGridO } from "react-icons/cg";


const HeaderPage = () => {
  return (
    <div>
      <nav className='  h-[4rem] mb-5 flex w-[100%]  bg-white'>
        <div className="nav-left  h-[100%] w-[32%] flex items-center justify-start pl-16 gap-2 ">
        <FaLinkedin className='text-[#1b59b4] text-[37px] rounded-lg'/>
        <div className="input-div rounded-sm  border-none flex items-center h-8 w-[20rem]">

        <IoIosSearch  className='absolute text-[2rem] pl-3'/>
        <input type="text" className='border-none rounded-sm w-[100%] h-[2.3rem] pl-10 bg-[#EDF3F8]'  placeholder='Search' />
        </div>
        </div>
        <div className="nav-center  bg-[#ffff] h-[100%] w-[50%] flex items-center justify-end pr-8 gap-10 border-r-[1px]  border-[#0000008e]">
          <div className="nav-box flex flex-col items-center text-[0.9rem] text-black">
          <IoHomeSharp  className='text-[1.5rem] underline hover:text-black'/>
            Home
          </div>
          <div className="nav-box flex flex-col items-center text-[0.9rem] text-gray-500 hover:text-black hover:cursor-pointer">
          <IoMdPersonAdd  className='text-[1.5rem]  hover:cursor-pointer'/>
            My Network
          </div>
          <div className="nav-box flex flex-col items-center text-[0.9rem] text-gray-500 hover:text-black hover:cursor-pointer">
          <FaShoppingBag  className='text-[1.5rem]  hover:cursor-pointer'/>
            Jobs
          </div>
          <div className="nav-box flex flex-col items-center text-[0.9rem] text-gray-500 hover:text-black hover:cursor-pointer">
          <AiFillMessage  className='text-[1.5rem]  hover:cursor-pointer'/>
            Messaging
          </div>
          <div className="nav-box flex flex-col items-center text-[0.9rem] text-gray-500 hover:text-black hover:cursor-pointer">
          <IoIosNotifications  className='text-[1.7rem]  hover:cursor-pointer'/>
            Notification
          </div>
          <div className="nav-box flex flex-col items-center text-[0.9rem] text-gray-500 hover:text-black hover:cursor-pointer">
            <Image src="/images/logo.jpg" alt='profile' width={100} height={100} className='w-[35px] h-[35px] mt-2 rounded-[50%]'/>
            Me
          </div>
        </div>
        <div className="nav-right flex items-center justify-around w-[20%] pr-6">
        <div className="nav-right-right flex flex-col items-center  justify-center  text-[13px] text-gray-500 hover:text-black hover:cursor-pointer">
         <CgMenuGridO className='text-[30px]  '/>

            For Business
        </div>
        <div className="nav-right-left  flex flex-col items-center  justify-center  text-[13px] text-gray-500 hover:text-black hover:cursor-pointer pr-12">
         <RiShoppingBasketLine className='text-[30px]'/>
            Post a jobs
        </div>
        </div>
      </nav>
    </div>
  )
}

export default HeaderPage
