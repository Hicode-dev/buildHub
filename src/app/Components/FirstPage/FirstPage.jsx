import React from "react";
import Image from "next/image";
// import background from "../../../../public/build_hub-Landing.png"

const FirstPage = () => {
  return (
    <div class="background">
      <div className="d-flex items-center justify-center flex-col w-[50%] mx-auto pt-16">
        <h1 className="text-5xl font-semibold text-center mt-5">
          Let’s Help You <br /> Start Out In Tech
        </h1>
        <p className="text-md text-center mt-1" >
          Buildbubb helps in Connecting developers and designers to help you
          create impactful projects and elevate your portfolio
        </p>
        <div className="flex items-center justify-center mt-3">
          <button className="bg-black text-white rounded-2xl py-2 px-5">
            Join Waitlist{" "}
          </button>
          <button className="bg-transparent border mx-4 border-gray-800 rounded-2xl py-2 px-5 ">
            Learn More{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default FirstPage;
