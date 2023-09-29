import React from 'react'
import SideCard from '../SIdeCard'
import Image from 'next/image'
import MissionCard from '../MissionCard'
const page = () => {
  return (

    <div className='grid md:grid-cols-2 items-center    gap-8'>
      <div >
        <h2 className='font-semibold text-[22px] md:text-[40px]'>
          Helping you focus on what really matters
        </h2>
        <h2 className='leading-[
               28.8px] text-[20px]x1 w-[85%] py-4'> At Buildhubb, we strive to simplify the startup journey by providing comprehensive support and resources. Our mission is to help visionary entrepreneurs like you focus on what really matters – turning your ideas into successful ventures. With our expertise, guidance, and tailored solutions, we empower you to navigate the challenges of building a business, so you can bring your vision to life and make a lasting impact in the market. Partner with Buildhubb and unlock your potential for success. </h2>
        <div className="grid grid-cols-2">
          <div className='flex gap-3 items-center'>
            <span><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" /></svg></span><span>Smooth Collaboration</span>
          </div>
          <div className='flex gap-3 items-center'>
            <span><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" /></svg></span><span>Healthy Communication</span>
          </div>
          <div className='flex gap-3 items-center'>
            <span><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" /></svg></span><span>Great timeframes</span>
          </div>
          <div className='flex gap-3 items-center'>
            <span><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" /></svg></span><span>Experienced Leads</span>
          </div>
        </div>
      </div>
      <div className=' bg-slate-50 z-50 relative ' >

      <div className=" relative h-[50vh] py-8 shadow-lg  dark:bg-[#151929]  ">
          <MissionCard className="flex items-center dark:text-white shadow-lg  dark:bg-gray-800  absolute sm:right-[-30px] md:right-2  py-5  pl-4 pr-6 my-4 w-fit" title='Collaboration' text='All the tools you need' svg={<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
            <circle cx="24" cy="24" r="24" fill="#4031E8" fill-opacity="0.219608" />
            <path fill-rule="evenodd" clip-rule="evenodd" d="M19.425 22.875H12V25.125H19.425V31.875H25.5V33C25.5 34.65 26.85 36 28.5 36H33C34.65 36 36 34.65 36 33V28.5C36 26.85 34.65 25.5 33 25.5H28.5C26.85 25.5 25.5 26.85 25.5 28.5V29.625H21.675V18.375H25.5V19.5C25.5 21.15 26.85 22.5 28.5 22.5H33C34.65 22.5 36 21.15 36 19.5V15C36 13.35 34.65 12 33 12H28.5C26.85 12 25.5 13.35 25.5 15V16.125H19.425V22.875ZM27.75 28.5V33C27.75 33.45 28.05 33.75 28.5 33.75H33C33.45 33.75 33.75 33.45 33.75 33V28.5C33.75 28.05 33.45 27.75 33 27.75H28.5C28.05 27.75 27.75 28.05 27.75 28.5ZM27.75 19.5V15C27.75 14.55 28.05 14.25 28.5 14.25H33C33.45 14.25 33.75 14.55 33.75 15V19.5C33.75 19.95 33.45 20.25 33 20.25H28.5C28.05 20.25 27.75 19.95 27.75 19.5Z" fill="#3632FF" />
          </svg>} />
          <SideCard value="Easy to Apply" title="Made for everyone" imageSrc={<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
            <circle cx="24" cy="24" r="24" fill="#7BDCB5" fill-opacity="0.278431" />
            <path d="M33.5385 13L20.6154 30.4359L13.8462 25.3077L12 27.7692L21.2308 34.7436L36 14.8462L33.5385 13Z" fill="#00D084" />
          </svg>} />
        </div>
      </div>
 
    </div>
  )
}

export default page
