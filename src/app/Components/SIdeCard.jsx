import React from 'react'

  const SideCard = ({title,value,imageSrc}) => {
    return (
        <div className="flex absolute dark:bg-gray-800 dark:text-white bg-white rounded-md bottom-12 left-14 z-50 items-center justify-between py-4 shadow-xl px-4 gap-6">
          <div>
          <h1 className="md:text-[24px] dark:text-white font-bold">{value}</h1>
            <p className="text-[16px] dark:text-white">{title}</p>
          
          </div>
          <img src='/Group 9.png' alt="" />
        </div>
      );
}
export default SideCard