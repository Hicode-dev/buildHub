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

const SideCard = ({title,value,imageSrc}) => {
    return (
        <div className="flex absolute dark:bg-gray-800 bg-white rounded-md bottom-12 left-14 z-50 items-center justify-between py-4 shadow-xl px-4 gap-6">
          <div>
          <h1 className="md:text-[24px] dark:text-white font-bold">{value}</h1>
            <p className="text-[16px] dark:text-white">{title}</p>
          
          </div>
          <img src={imageSrc} alt="" />
        </div>
      );
}
}
export default SideCard