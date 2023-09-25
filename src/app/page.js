import React from "react";
import FirstPage from "./Components/FirstPage";
import SecondPage from "./Components/SecondPage";
import ThirdBanner from "./Components/ThirdBanner/page";
import FourthBanner from "./Components/FourthBanner/page";
import Carreers from "./Components/Carreers";
import MissionPage from "./Components/MissionPage";
import TrustedPage from "./Components/TrustedPage";
import FAQS from "./Components/FAQ/page";
import Footer from "./Components/Footer/page";

const page = () => {
  return (
    <div className="">
      <FirstPage />
      <div className="px-14">
        <SecondPage />
        <ThirdBanner />
        <FourthBanner />
        <Carreers />
        <MissionPage />
        <TrustedPage />
        <FAQS />
      </div>
      <Footer/>
    </div>
  );
};

export default page;
