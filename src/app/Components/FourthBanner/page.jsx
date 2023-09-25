import React from "react";
import VissionCard from "../VissionCard";
import Carreers from "../Carreers";

const page = () => {
  return (

    <div className="grid md:grid-cols-2 pt-24 items-center">
      <div className="grid grid-cols-2 gap-6 max-w-[500px]">

    <div className="grid md:grid-cols-2 h-50 py-32 items-center">
      <div className="grid md:grid-cols-2 w-fit gap-6 max-w-[100vw] md:max-w-[500px] ">

        <VissionCard
          value="100+"
          valuee="Applicants"
          imageSrc="/Group 12.png"
          title="You too can build the future."
        />
        <VissionCard
          value="100%"
          valuee="Collaboration"
          imageSrc="/Group 12.png"
          title="Boss of yourself."
        />
        <VissionCard
          value="5 star"
          valuee="Applicants reviews"
          imageSrc="/Group 12.png"
          title="Drop a review too!"
        />
        <VissionCard
          value="1000+"
          valuee="Different languages"
          imageSrc="/Group 12.png"
          title="We are not limited to just one programming language"
        />
      </div>

      <div>
        <div className="max-w-[514px] md:py-0 py-10 ">
          <h2 className="font-semibold text-[32px] md:text-[40px]">Vision:</h2>
          <h2
            className="leading-[
                  28.8px] text-[20px]x1 py-4 "
          >
            {" "}
            Our vision at Buildhubb is to create a thriving tech ecosystem where
            individuals, regardless of their background or experience, can
            discover their passion for technology, develop in-demand skills, and
            actively contribute to building innovative solutions.
          </h2>
        </div>
      </div>
   
        <div className=" md:pt-10  grid overflow-hidden md:grid-cols-2  place-content-between items-center md:w-[1150px] md:m-5 md:p-2 ">
          <Carreers
            title="Backend Developers"
            description=" Proficient in building the server-side of web applications using programming languages such as Py...More"
          />
          <Carreers
            title="Digital marketers"
            description="Experienced in promoting products or services online through various marketing chann,...More"
          />
          <Carreers
            title="Product designers"
            description="Skilled in creating user-centered designs for digital products, including wireframes, prototypes,....More"
          />
      
       <Carreers
          title="Backend Developers"
          description=" Proficient in building the server-side of web applications using programming languages such as Py...More"
        />
        <Carreers
          title="Digital marketers"
          description="Experienced in promoting products or services online through various marketing chann,...More"
        />
        <Carreers
          title="Product designers"
          description="Skilled in creating user-centered designs for digital products, including wireframes, prototypes,....More"
        />
       </div>

    </div>
  );
};

export default page;
