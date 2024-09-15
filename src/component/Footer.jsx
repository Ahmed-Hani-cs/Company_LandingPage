import React from 'react'
import { FaFacebookF, FaLinkedinIn, FaPhoneAlt, FaTwitter } from 'react-icons/fa'
import { FaLocationDot } from 'react-icons/fa6'
import { IoMailOpen } from 'react-icons/io5'

function Footer() {
  return (
    <footer className='py-[100px] bg-[#0c1524] z-0 p-y-[100px] h-[fit-contect]'>
        <div className='container'>
            <a href="/">
                <img src="/public/images/logo.svg" alt="logo" />
                <h1>FYLO</h1>
            </a>
            <div className='grid grid-cols-1 lg:grid-cols-4 gap-10 lg:gap-5 text-white'>
                <div id='location' className='flex gap-2'>
                    <FaLocationDot className='text-[25px] lg:text-[45px] text-[#ddd]'/>
                    <p className='text-sm max-w-[50%] lg:max-w-[100%] '>Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua</p>
                </div>
                <div id='contact' className='text-sm'>
                    <div className=' flex gap-2 items-center mb-4'>
                        <FaPhoneAlt />
                        +20 1006094157
                    </div>
                    <div className='flex gap-2 items-center'>
                        <IoMailOpen />
                        ahmedhanielgazar@gmail.com
                    </div>
                </div>
                <div id='links'  className='flex gap-8 text-sm' >
                    <div>
                        <ul>
                            <li className='mb-4'>About Us</li>
                            <li className='mb-4'>Jops</li>
                            <li className='mb-4'>Press</li>
                            <li className='mb-4'>Blog</li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li className='mb-4'>Contact Us</li>
                            <li className='mb-4'>Terms</li>
                            <li className='mb-4'>Privacy</li>
                        </ul>
                    </div>
                </div>
                <div id='social_icons' className='flex gap-3 items-center justify-center'>
                    <div className='w-[40px] h-[40px] rounded-full  border-2 border-white flex items-center justify-center hover:bg-black transition-all duration-150 hover:border-blue-300'><a href="#"><FaFacebookF /></a></div>
                    <div className='w-[40px] h-[40px] rounded-full  border-2 border-white flex items-center justify-center hover:bg-black transition-all duration-150 hover:border-blue-300'><a href="#"><FaTwitter /></a></div>
                    <div className='w-[40px] h-[40px] rounded-full  border-2 border-white flex items-center justify-center hover:bg-black transition-all duration-150 hover:border-blue-300'><a href="#"><FaLinkedinIn /></a></div>
                </div>
            </div>
        </div>    
    
    </footer>
  )
}

export default Footer
