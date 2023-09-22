import React from 'react'
import TrustedCards from './TrustedCards'

const TrustedPage = () => {
  return (
    <div>
        <div className="w-100 h-[70vh] bg-[#EFEBEF]">
            <h1 className='text-3xl font-bold '>Trusted by over 1000 happy applicants</h1>
            <p className='text-md text-gray-800'>Don’t just take our word for it, hear what members of our friendly community have to say about us</p>
    <TrustedCards rating=""/>
        </div>
    </div>
  )
}

export default TrustedPage