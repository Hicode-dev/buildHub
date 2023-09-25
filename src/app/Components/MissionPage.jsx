import React from "react";
import SideCard from "./SIdeCard";
import MissionCard from "./MissionCard";
import Button from "./Button";

const MissionPage = () => {
  return (
    <div>
      <div className="grid md:flex justify-between items-center">
        <div>

          <h1 className="text-2xl font-bold">Mission</h1>
          <p className="text-lg font-semibold">
            At Buildhubb, we are committed to:
          </p>
          <p className="text-gray-800 text-md">

          <h1 className='font-semibold md:text-[40px]'>Mission</h1>
          <p className='leading-[
28.8px] text-[20px]x1 py-4'>At Buildhubb, we are committed to:</p>
          <p>

            - Empower individuals to discover their path in the tech <br />{" "}
            industry <br /> - Teach in-demand tech skills through structured
            learning <br /> programs <br /> - Foster vibrant tech communities
            for networking and <br /> knowledge sharing <br /> - Connect
            professionals to build their portfolios by <br /> collaborating on
            full-stack projects <br /> - Support startups in building products
            and assembling high- <br /> performing teams <br /> - Serve as a
            trusted platform for talent acquisition in the tech <br /> industry
          </p>
        </div>
        <div>
          <div>
            <MissionCard
              className="shadow-lg bg-white rounded-xl flex items-center p-5 my-5 w-[90%] "
              svg={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                >
                  <circle
                    cx="24"
                    cy="24"
                    r="24"
                    fill="#7BDCB5"
                    fill-opacity="0.141176"
                  />
                  <path
                    d="M29 12H20C18.35 12 17 13.35 17 15V33C17 34.65 18.35 36 20 36H29C30.65 36 32 34.65 32 33V15C32 13.35 30.65 12 29 12ZM29.75 33C29.75 33.45 29.45 33.75 29 33.75H20C19.55 33.75 19.25 33.45 19.25 33V15C19.25 14.55 19.55 14.25 20 14.25H29C29.45 14.25 29.75 14.55 29.75 15V33ZM23 32.25H26V30H23V32.25Z"
                    fill="#00D084"
                  />
                </svg>
              }
              title="Responsive Syncing"
              text="Sync with others on a Go!"
            />
            <MissionCard
              className="shadow-lg bg-white rounded-xl flex items-center p-5 my-5 w-[90%] mx-[-50px]"
              svg={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                >
                  <circle
                    cx="24"
                    cy="24"
                    r="24"
                    fill="#5637F0"
                    fill-opacity="0.219608"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M34.3333 22.3333H36V19.2227L34.5 13H13.5L12 19.2227V22.3333H13.6667V34H34.3333V22.3333ZM32.3333 22.3333H15.6667V32H21.3333V25H26.6667V32H32.3333V22.3333ZM25 15H27.756L28.404 19.32L28.4413 20.3333H25V15ZM20.244 15H23V20.3333H19.5587L19.596 19.32L20.244 15ZM30.3973 19.1333L29.7787 15H32.9253L34 19.46V20.3333H30.4427L30.3973 19.1333ZM18.2213 15H15.0747L14 19.46V20.3333H17.5573L17.6027 19.1333L18.2213 15Z"
                    fill="#573EF7"
                  />
                </svg>
              }
              title="Sell Yourself"
              text="Nice portfolios will increase your chances of making it Big"
            />
            <MissionCard
              className="shadow-lg bg-white rounded-xl flex items-center p-5 my-5 w-[90%] "
              svg={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                >
                  <circle
                    cx="24"
                    cy="24"
                    r="24"
                    fill="#F300DE"
                    fill-opacity="0.141176"
                  />
                  <path
                    d="M22.4 12H24.8V36H22.4V12ZM14 20H16.4V36H14V20ZM33.2 26.4H30.8V36H33.2V26.4Z"
                    fill="#ED26D0"
                  />
                </svg>
              }
              title="Conversation focused"
              text="Convert more visitors into customers"
            />
          </div>
        </div>
      </div>
      <div className="text-center py-24">
        <Button
          className="mx-4 bg-black text-white rounded-3xl py-2 px-5"
          text="Suscribe to Premium"
        />
      </div>
    </div>
  );
};

export default MissionPage;
