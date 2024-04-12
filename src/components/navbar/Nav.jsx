import React from 'react'
import { FaFacebookF,FaTwitter,FaInstagramSquare ,FaLinkedin } from "react-icons/fa";

const Nav = () => {
  return (
    <div className=''>
      <div className='w-full  bg-green-600 h-[60px] justify-around flex items-center'>
        <div className='flex gap-[10px] text-white text-[20px]'>
            <span className='text-[#c7c7c7]'>Follow Us:</span>
            <span><FaFacebookF /></span>
            <span><FaTwitter /></span>
            <span><FaInstagramSquare /></span>
            <span><FaLinkedin /></span>
        </div>
        <div className='flex gap-[10px] text-white text-[20px]'>
            <span  className='text-[#c7c7c7]'>Call Us:</span>
            <span>+99894-696-1661</span>
        </div>

      </div>
    </div>
  )
}

export default Nav
