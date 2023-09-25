import React from "react";
import Image from "next/image";
import Button from "./Button";

const FirstPage = () => {
  return (
    <div class="background">
      <div className="d-flex items-center justify-center  flex-col mx-auto pt-16">
        <h1 className="text-5xl font-semibold text-center leading-[48px] md:text-[40px] mt-24 md:mt-5">
          Let’s Help You <br /> Start Out In Tech
        </h1>
        <p className="text-md text-center my-4 max-w-[500px] mx-auto" >
          Buildbubb helps in Connecting developers and designers to help you
          create impactful projects and elevate your portfolio
        </p>
        <div className="flex items-center justify-center mt-3">
          <Button className="bg-black text-white rounded-2xl py-2 px-5" text="Join Waitlist"/>
          <Button className="bg-transparent border mx-4 border-gray-800 rounded-2xl py-2 px-5" text="Learn More"/>
        
        </div>
      </div>
    </div>
  );
};

export default FirstPage;
