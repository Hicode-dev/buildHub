import React from 'react'

const Carreers = ({ title, description }) => {
  return (
    <div >
     <div className='flex flex-col md:p-6 py-6  md:max-w-[420px] '>
      <h3 className='font-semibold text-[26px] md:text-[30px] '>{title}</h3>
      <p className='text-md '>{description}</p>
    </div>

    </div>
  )
}

export default Carreers
