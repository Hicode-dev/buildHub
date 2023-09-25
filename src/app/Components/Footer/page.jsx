import React from 'react'

const Footer = () => {
    return (
        <div className='bg-[#EDE9FC] p-16'>
            <div className='w-[85%] mx-auto text-center'>
                <h1 className='text-center font-bold text-3xl'>Get Started Today</h1>
                <p className='text-md w-[70%] mx-auto my-3 text-center'>Stay connected with fellow learners and instructors by suscribing to our newsletter.
                    Get the latest updates and be a part of our growing community</p>
                <div className='flex items-center rounded-lg shadow-md my-4 w-[50%] border mx-auto'>
                    <input type="text" className='p-4 border-none outline-none rounded-none w-[100%]' placeholder='Enter your email address' />
                    <button className='p-4 bg-black text-white font-bold border-none rounded-[0, 10px, 10px ,0]'>Subscribe</button>
                </div>
            </div>
        </div>
    )
}

export default Footer
