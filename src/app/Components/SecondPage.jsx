import React, { useEffect } from "react";
import Image from "next/image";
import Button from "./Button";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";

const SecondPage = () => {
  useEffect(() => {
    AOS.init({ duration: 1500, once: true ,easing:"ease-in-out" }); // Increased duration for smoother animation
  }, []);

  return (
    <div className="mx-auto text-center max-w-[514px]">
      <div
        className="w-100 h-[70vh] flex items-center justify-center flex-col"
        data-aos="fade-up"
      >
        <div className="mx-auto text-center py-12 md:max-w-[514px]">
          <p className="text-[22px] text-black dark:text-white font-semibold">
            We help start-ups build their products. Looking to hire professional talent?{" "}
            <Link href="/contact" className="underline">
              Contact Us
            </Link>
          </p>
        </div>

        <div className="mx-auto text-center md:max-w-[514px]" data-aos="fade-up">
          <p className="text-[32px] md:text-[40px] text-black dark:text-white font-semibold">
            Powerful <br /> Collaboration technic.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SecondPage;
