import Link from "next/link";
import React from "react";

const SecondPage = () => {
  return (
    <div className="w-100 h-[28vh]  md:h-[80vh] flex  items-center justify-center flex-col">
      {/* <h3 className="text-xl text-center my-8">
        We help start-ups build their products. Looking <br /> to hire
        professional talent? <br/>
        <Link href="/contact" className="underline">Contact Us</Link>
      </h3> */}

<div className='mx-auto text-center md:py-12 max-w-[514px]  ' >
        <p className='md:text-[22px] text-black font-semibold'>We help start-ups build their products. Looking to hire professional talent?</p>
        <Link href="/contact" className="underline">Contact Us</Link>
      </div>
      <div className=' mx-auto text-center max-w-[
514px]'>
        <p className='md:text-[40px] text-black font-semibold'>Powerful <br /> 
                    Collaboration technic.</p>
    
      </div>
    </div>
  );
};

export default SecondPage;
