'use client'
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Logo from '../../../../public/build_hub-logo.png';
import Link from 'next/link';
import { RiSunFill, RiMoonFill } from 'react-icons/ri';
import { AiOutlineClose, AiOutlineMenuFold } from 'react-icons/ai';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  const handleClick = () => {
    setNav(!nav);
  };

  const toggleDarkMode = () => {
    // Toggle the darkMode state
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);

    // Store the user's dark mode preference in local storage
    localStorage.setItem('darkMode', JSON.stringify(newDarkMode));

    // Apply the dark mode class to the document's root element
    document.documentElement.classList.toggle('dark', newDarkMode);
  };

  useEffect(() => {
    // Check if the user has a preference for dark mode in local storage
    const storedDarkMode = localStorage.getItem('darkMode');
    if (storedDarkMode) {
      const parsedDarkMode = JSON.parse(storedDarkMode);
      setDarkMode(parsedDarkMode);
      document.documentElement.classList.toggle('dark', parsedDarkMode);
    } else {
      // If no preference is found, check the user's system preference
      const userPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setDarkMode(userPrefersDark);
      document.documentElement.classList.toggle('dark', userPrefersDark);
    }
  }, []);

  return (
    <div>
      <div className='w-full h-16 hidden md:flex  shadow-lg items-center justify-between py-8 px-16 dark:bg-[#1D243C] dark:text-white'>
        <Image src={Logo} className='w-[9%]' alt='logo' />
        <ul className='flex items-center justify-between'>
          <li className='p-4 '>Home</li>
          <li className='p-4'>About</li>
          <li className='p-4'>Contact</li>
        </ul>

        <div className='flex items-center '>
          <Link href='/subscribe' className='p-4'>Subscribe to premium</Link>
          <button onClick={toggleDarkMode} className='mx-4'>
            {darkMode ? (
              <RiSunFill size={20} /> // Display sun icon for light mode
            ) : (
              <RiMoonFill size={20} /> // Display moon icon for dark mode
            )}
          </button>
          <button className='bg-black text-white rounded-3xl py-2 px-5'>Get Started</button>
        </div>
      </div>

<div className='flex justify-between dark:bg-[#151929] dark:text-white dark:text-white items-center   md:hidden'>
<div className=''>
        <Image src={Logo} className='w-[60%]' alt='logo' />


 
      </div>
      <div className='flex items-center '>
          <button onClick={toggleDarkMode} className='mx-4'>
            {darkMode ? (
              <RiSunFill size={20} /> // Display sun icon for light mode
            ) : (
              <RiMoonFill size={20} /> // Display moon icon for dark mode
            )}
          </button>
         
        </div>
<div onClick={handleClick} className="">
  
        {!nav ? (
          <AiOutlineMenuFold className='  w-fit text-black dark:text-white  mr-5 ease-in-out duration-700' size={30} />
        ) : (
          <AiOutlineClose className='f ease-in-out duration-700 text-black dark:text-white' size={30} />
        )}
      </div>

</div>

      <div className={nav ? 'fixed top-10  px-4 bg-white font-bold capitalize  w-[100vw]  border-r h-full  border-r-gray-600 ease-out duration-700' : 'fixed top-[-100%]   duration-1000' }>

        <ul className='flex justify-center flex-col items-center'>
          <li className='p-3 border-gray-600 border-b border-full' >home</li>
          <li className='p-3 border-gray-600 border-b'>about</li>
          <li className='p-3 border-gray-600 border-b'> contact us</li>
          <li className='p-3 border-gray-600 border-b'> suscribe to Premium</li>
          <li className='p-3 '> Faqs</li>
          <button className='bg-black text-white rounded-3xl py-2  mt-6 px-5'>Get Started</button>
        </ul>
        
      </div>
    </div>
  );
};

export default Navbar;
