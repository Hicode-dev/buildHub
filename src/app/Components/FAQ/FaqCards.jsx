import React from 'react'

const FaqCards = ({title, icon}) => {
  return (
    <div className='bg-white shadow-md rounded-lg p-6 flex items-center justify-between '>
         <h3 className='font-bold'>{title}</h3>
         <p className='text-3xl font-light'>+</p>
    </div>
  )
}

export default FaqCards