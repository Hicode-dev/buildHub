import React from 'react'
import SideCard from '../SIdeCard'
import Image from 'next/image'
const page = () => {
  return (
    <div className='grid md:grid-cols-2 items-center'>
              <div className='max-w-[514px] '>
      <h2 className='font-semibold md:text-[40px]'> 
      Helping you focus on what really matters
      </h2>
      <h2 className='leading-[
28.8px] text-[20px]x1 py-4'> At Buildhubb, we strive to simplify the startup journey by providing comprehensive support and resources. Our mission is to help visionary entrepreneurs like you focus on what really matters – turning your ideas into successful ventures. With our expertise, guidance, and tailored solutions, we empower you to navigate the challenges of building a business, so you can bring your vision to life and make a lasting impact in the market. Partner with Buildhubb and unlock your potential for success. </h2>
<div className="grid grid-cols-2">
<div className='flex gap-3 items-center'>
        <span><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg></span><span>Smooth Collaboration</span>
      </div>
<div className='flex gap-3 items-center'>
        <span><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg></span><span>Healthy Communication</span>
      </div>
<div className='flex gap-3 items-center'>
        <span><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg></span><span>Great timeframes</span>
      </div>
<div className='flex gap-3 items-center'>
        <span><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg></span><span>Experienced Leads</span>
      </div>
</div>
    </div>


<div className='relative'>
    <SideCard value='Collaboration'  title= 'All the tools you need' imageSrc= '/Group 41.png' />
    {/* <SideCard value='Easy to Apply' title= 'Made for everyone' imageSrc= '/Group 9.png' /> */}
    <div className="md:flex absolute top-20 right-14 z-50 items-center justify-between py-4 shadow-lg px-4 gap-6">
    <img src='/Group 9.png' alt="" />
          <div>
          <h1 className="md:text-[24px] font-bold">Easy to Apply' title</h1>
            <p className="text-[16px]">Made for everyone</p>
          
          </div>
     
        </div>
    <Image  src='/Rectangle 19.png' alt='imagine' className='w-full relative' width='500' height='500' />
</div>

    </div>
  )
}

export default page
