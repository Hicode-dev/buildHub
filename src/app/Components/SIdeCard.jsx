import React from 'react'

const SideCard = ({title,value,imageSrc}) => {
    return (
        <div className="md:flex absolute bottom-20 left-14 z-50 items-center justify-between py-4 shadow-lg px-4 gap-6">
          <div>
          <h1 className="md:text-[24px] font-bold">{value}</h1>
            <p className="text-[16px]">{title}</p>
          
          </div>
          <img src={imageSrc} alt="" />
        </div>
      );
}

export default SideCard