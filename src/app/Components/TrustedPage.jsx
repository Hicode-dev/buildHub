"use client"
import React from "react";
import MultipleItems from "./Slider";



const TrustedPage = () => {
  return (
    <div>
      <div className="w-100 h-[100%] bg-[#EDE9FC] rounded-xl shadow-lg px-5 pt-5 pb-16 mb-6">
        <div className="text-center ">
          <h1 className="text-4xl font-bold p-5  text-center ">
            Trusted by over 1000 <br /> happy applicants
          </h1>
          <p className="text-md text-gray-800">
            Don’t just take our word for it, hear what members of our <br /> friendly
            community have to say about us
          </p>
        </div>
        <div className="w-full">
          <MultipleItems />
        </div>
      </div>
    </div>
  );
};

export default TrustedPage;
