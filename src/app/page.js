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
    <div className=" dark:bg-[#151929]">
      <FirstPage />
      <div className="md:px-14 mx-auto max-w-screen-xl  px-8 dark:bg-[#151929] dark:text-white">
        <SecondPage />
        <ThirdBanner />
        <FourthBanner />
        <div className="grid md:grid-cols-2">
        <Carreers title='Backend Developers' description=' Proficient in building the server-side of web applications using programming languages such as Py...More' />
        <Carreers title='Digital marketers' description=' Experienced in promoting products or services online through various marketing chann,...More' />
        <Carreers title='Product designers' description=' Skilled in creating user-centered designs for digital products, including wireframes, prototypes,....More' />
        <Carreers title='Frontend Developers' description=' Skilled in developing the user interface and user experience of websites and applications using HT...More' />
        <Carreers title='Product managers' description=' Responsible for defining and managing the strategy, roadmap, and feature set of a product, and collabo...More' />
        <Carreers title='Technical writers' description='  Proficient in creating clear, concise, and accurate documentation for technical products...More' />
          </div>
        <MissionPage />
        <TrustedPage />
        <FAQS />
      </div>
    </div>
  );
};

export default page;
