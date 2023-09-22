import React from 'react'

const Carreers = ({ title, description }) => {
  return (
    <div >
     <div className='flex flex-col items-center text-center p-6'>
      <h3 className='font-semibold md:text-[30px] '>{title}</h3>
      <p className='text-md'>{description}</p>
    </div>

    </div>
  )
}

export default Carreers
