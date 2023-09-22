import React from 'react'

const VissionCard = ({title,value,imageSrc,valuee}) => {
  return (
    <div className=" py-4 shadow-md px-4 gap-6">
         <img src={imageSrc} alt="" />
    <div className='py-4'>
    <h1 className="md:text-[24px] font-bold">{value}</h1>
    <h1 className="md:text-[20px] font-medium">{valuee}</h1>
      <p className="text-[16px]">{title}</p>
    
    </div>
   
  </div>
  )
}

export default VissionCard