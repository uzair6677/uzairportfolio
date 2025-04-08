import React from "react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 ">
      <div className="col-span-7 place-self-center px-4">
        <h1 className="text-white mb-4 text-4xl lg:text-6xl font-extrabold">
          Hello, i'm uzair tariq
        </h1>
        <p className="text-[#ADB7BE] text-lg lg:text-xl mb-6 ">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur
          explicabo, at iure impedit neque aliquid a saepe quia laudantium
          assumenda.
        </p>
        <div>
          <button className="px-6 py-3 mr-4 bg-white hover:bg-slate-200 rounded-full">
            Hire Me
          </button>
          <button className="px-6 py-3 bg-transparent hover:bg-slate-800 mt-3 text-white rounded-full border border-b-white">
            Download CV
          </button>
        </div>
      </div>
      <div className="col-span-5 place-self-center mt-4 lg:mt-0 px-4">
        <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px]  relative">
          <Image
            src="/assets/images/hero-image.jpg"
            width={250}
            height={250}
            className="absolute transform -translate-x-1/2 -translate-y-1/2 mt-4 top-1/2 left-1/2"
            alt="my-image"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
