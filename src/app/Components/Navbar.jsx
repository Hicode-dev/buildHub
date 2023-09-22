import React from "react";
import Image from "next/image";
import Logo from "../../../public/build_hub-logo.png";
import Link from "next/link";
import Button from "./Button";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  return (
    <div className="w-full h-16 flex items-center justify-between py-10 px-5 md:px-16">
      <div className="flex md:hidden items-center w-[45px] border-gray-700 rounded-xl bg-gray-800 mx-4">
        <div className="w-[20px] h-[20px] bg-gray-100  rounded-full"></div>
        🌙
      </div>
      <Image src={Logo} className=" w-[30%] md:w-[100px] " alt="logo" />
      <ul className=" items-center justify-between hidden md:flex ">
        <li className="p-4">Home</li>
        <li className="p-4">About</li>
        <li className="p-4">Contact</li>
      </ul>

      <div className="hidden md:flex items-center ">
        <Link href="/subscribe" className="p-4">
          Subscribe to premium
        </Link>
        <Button
          className="mx-4 bg-black text-white rounded-3xl py-2 px-5"
          text="Get Started"
        />
        <div className="flex items-center w-[45px] border-gray-700 rounded-xl bg-gray-800 mx-4">
          <div className="w-[20px] h-[20px] bg-gray-100  rounded-full"></div>
          🌙
        </div>
      </div>
      <div className="block md:hidden">
        <AiOutlineMenu size={25} />
      </div>
    </div>
  );
};

export default Navbar;
