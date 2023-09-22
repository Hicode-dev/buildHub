import React from 'react'

const Carreers = ({ title, description }) => {
  return (
    <div>
     <div className='flex flex-col items-center text-center'>
      <h3 className='font-semibold md:text-[40px]'>{title}</h3>
      <p>{description}</p>
    </div>

    </div>
  )
}

export default Carreers
