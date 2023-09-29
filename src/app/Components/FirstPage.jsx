import React, { useEffect } from "react";
import Image from "next/image";
import Button from "./Button";
import AOS from "aos"; // Import AOS
import 'aos/dist/aos.css';

const FirstPage = () => {
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      easing: 'ease-out-back', // Adjust the easing function as needed
    });
  }, []);

  return (
    <div className="background dark:bg-black dark:text-black">
      <div
        className="d-flex items-center p-8 justify-center flex-col mx-auto"
        data-aos="fade"
      >
        <h1 className="text-5xl font-semibold text-center leading-[48px] md:text-[40px] mt-5">
          Let’s Help You <br /> Start Out In Tech
        </h1>
        <p className="text-md text-center my-4 max-w-[500px] mx-auto" data-aos="fade-up">
          Buildbubb helps in connecting developers and designers to help you
          create impactful projects and elevate your portfolio
        </p>
        <div className="flex items-center justify-center mt-3">
          <Button className="bg-black text-white rounded-2xl py-2 px-5" text="Join Waitlist" data-aos="zoom-in" />
          <Button className="bg-transparent border mx-4 border-gray-800 rounded-2xl py-2 px-5" text="Learn More" data-aos="zoom-in" />
        </div>
        <div className="w-full py-6 md:py-0 md:h-screen flex justify-center items-center">
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/srz2Wll4gmQ?si=pSnKrP7ik0DiV1Dq"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>

      </div>
    </div>
  );
};

export default FirstPage;
