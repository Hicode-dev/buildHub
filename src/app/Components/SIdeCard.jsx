import React from 'react'

const SideCard = ({ title, value, imageSrc }) => {
  return (
    <div className="flex w-fit pr-16 absolute  rounded-md bottom-16  left-0 z-50 items-center justify-between py-4  px-4 gap-6">
      {imageSrc} 
      <div>
        <h1 className="md:text-[24px] font-bold">{value}</h1>
        <p className="text-[16px]">{title}</p>

      </div>

    </div>
  );
}

export default SideCard