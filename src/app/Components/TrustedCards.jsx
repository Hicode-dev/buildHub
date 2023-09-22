import React from 'react'

const TrustedCards = ({rating, text, name}) => {
  return (
    <div className='text-start p-4 rounded-lg shadow-lg '>
        <div className='flex items-center '>{rating}</div> 
        <p>{text}</p>
        <p>{name}</p>
    </div>
  )
}

export default TrustedCards