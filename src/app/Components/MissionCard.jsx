import React from 'react'

const MissionCard = ({svg, title, text, className}) => {
  return (
    <div className={`${className} dark:bg-[#151929] dark:text-white `}>
        <div>
            {svg}
        </div>
        <div className='grid text-start ml-3'>
            <h5 className='text-lg font-bold '>{title}</h5>
            <p className='text-xm text-gray-800 dark:text-white'>{text}</p>
        </div>
    </div>
  )
}

export default MissionCard