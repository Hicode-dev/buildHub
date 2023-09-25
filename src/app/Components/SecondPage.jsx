import React from "react";
import Image from "next/image";
import Button from "./Button";
import Link from "next/link";

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

    <div className="w-100  h-[50vh] md:h-[80vh] flex items-center justify-center flex-col">
      <div className="mx-auto text-center py-12 md:max-w-[514px]">
        <p className="text-[22px] text-black dark:text-white font-semibold">
          We help start-ups build their products. Looking to hire professional talent?
          <Link href="/contact" className="underline">
            Contact Us
          </Link>
        </p>

      </div>
      <div className="mx-auto  text-center  md:max-w-[514px]">
        <p className="  text-[32px] md:text-[40px] text-black dark:text-white font-semibold">
          Powerful <br /> Collaboration technic.
        </p>
      </div>
    </div>
  );
};

export default SecondPage;
