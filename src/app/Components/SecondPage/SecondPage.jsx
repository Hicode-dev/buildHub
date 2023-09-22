import Link from "next/link";
import React from "react";

const SecondPage = () => {
  return (
    <div className="w-100 h-[80vh] flex  items-center justify-center flex-col">
      <h3 className="text-xl text-center my-8">
        We help start-ups build their products. Looking <br /> to hire
        professional talent? <br/>
        <Link href="/contact" className="underline">Contact Us</Link>
      </h3>
      <h2 className="text-4xl mt-12  text-center">
        Powerful <br />
        Collaboration technic.
      </h2>
    </div>
  );
};

export default SecondPage;
