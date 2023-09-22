import React from 'react'
import Image from 'next/image'
import Logo from  "../../../../public/build_hub-logo.png"
import Link from 'next/link'
import {RiSunFill  ,
  RiMoonFill } from 'react-icons'

const Navbar = () => {
  function Navbar() {
    const toggleDarkMode = () => {
      document.querySelector('.navbar').classList.toggle('dark');
    };
  return (
    <div className='w-full h-16 flex items-center justify-between pt-6 px-16'>
        <Image src={Logo} className='w-[9%]' alt='logo'/>
        <ul className='flex items-center justify-between'>
            <li className='p-4'>Home</li>
            <li className='p-4'>About</li>
            <li className='p-4'>Contact</li>
        </ul>

        <div className='flex items-center '>
        <Link href='/subscribe' className='p-4'>Subscribe to premium</Link>
        <button className='mx-4 bg-black text-white rounded-3xl py-2 px-5'>Get Started</button>
      <div className='flex items-center w-[45px] border-gray-700 rounded-xl bg-gray-800 mx-4'>
      <div className={darkMode ? 'dark' : 'light'}>
      <div className="cursor-pointer text-gray-600">
        {darkMode ? (
          <RiSunFill   className="h-8 w-8 text-gray-600 dark:text-white" />
        ) : (
          <RiMoonFill  className="h-8 w-8 text-gray-600 dark:text-white" />
        )}
      </div>
      {/* Your app content */}
    </div>

      </div>
        </div>
    </div>
  )
}
}

export default Navbar;