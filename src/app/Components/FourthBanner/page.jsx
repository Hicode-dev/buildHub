'use clients'
import React, { useEffect } from "react";
import VissionCard from "../VissionCard";
import Carreers from "../Carreers";
import AOS from "aos";
import "aos/dist/aos.css";

const Page = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Set the duration (in milliseconds) for animations
      easing: "ease-out-back", // Use a smooth easing function (optional)
      once: true, // Trigger animations only once (optional)
    });
  }, []);

  return (
    <div className="block md:flex md:px-10 py-16 items-center gap-16 md:h-[100vh]">
      <div className="grid md:grid-cols-2 w-fit gap-6 max-w-[100vw] md:max-w-[500px]">
        <VissionCard
          value="100+"
          valuee="Applicants"
          imageSrc="/Group 12.png"
          title="You too can build the future."
          data-aos="fade-up"
        />
        <VissionCard
          value="100%"
          valuee="Collaboration"
          imageSrc="/Group 12.png"
          title="Boss of yourself."
          data-aos="fade-up"
        />
        <VissionCard
          value="5 star"
          valuee="Applicants reviews"
          imageSrc="/Group 12.png"
          title="Drop a review too!"
          data-aos="fade-up"
        />
        <VissionCard
          value="1000+"
          valuee="Different languages"
          imageSrc="/Group 12.png"
          title="We are not limited to just one programming language"
          data-aos="fade-up"
        />
      </div>

      <div>
        <div className="max-w-[514px] md:py-0 py-10">
          <h2 className="font-semibold text-[32px] md:text-[40px]" data-aos="fade-right">
            Vision:
          </h2>
          <h2
            className="leading-[28.8px] text-[20px] py-4"
            data-aos="fade-left"
          >
            Our vision at Buildhubb is to create a thriving tech ecosystem where
            individuals, regardless of their background or experience, can
            discover their passion for technology, develop in-demand skills, and
            actively contribute to building innovative solutions.
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Page;
