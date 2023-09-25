'use client'
import React from "react";
import FirstPage from "./Components/FirstPage";
import SecondPage from "./Components/SecondPage";
import ThirdBanner from "./Components/ThirdBanner/page";
import FourthBanner from "./Components/FourthBanner/page";
import Carreers from "./Components/Carreers";
import MissionPage from "./Components/MissionPage";
const page = () => {
  return (
    <div className="p">
      <FirstPage />
      <div className="md:px-14 px-8 dark:bg-[#151929] dark:text-white">
        <SecondPage />
        <ThirdBanner />
        <FourthBanner />
        <Carreers />
        <MissionPage />
      </div>
    </div>
  );
};

export default page;
