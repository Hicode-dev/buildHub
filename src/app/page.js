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
      <div className="px-14">
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
