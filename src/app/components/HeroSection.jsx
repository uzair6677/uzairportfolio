"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-12 ">
      <div className="col-span-7 text-center sm:text-left place-self-center px-4">
        <h1 className="text-white mb-4 text-4xl lg:text-6xl font-extrabold">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            Hello, i'm{" "}
          </span>{" "}
          <br />
          <TypeAnimation
            sequence={[
              // Same substring at the start will only be typed out once, initially
              "uzair tariq ",
              1000,
              "Frontend Developer | React & Next.js Specialist",1000
            ]}
            wrapper="span"
            speed={50}
            className="text-4xl sm:text-xl md:text-xl"
            repeat={Infinity}
          />
        </h1>
        <p className="text-[#ADB7BE] w-full text-lg lg:text-xl mb-6 ">
          I build performant, accessible, and beautiful web applications with
          modern technologies. Passionate about creating intuitive user
          experiences with clean, efficient code.
        </p>
        <div>
          {/* <button className="px-6 py-3 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 sm:w-fit w-full sm:fit mr-4 bg-white hover:bg-slate-200 rounded-full text-white">
            Hire Me
          </button>
          <button className="sm:w-fit px-1 py-1 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 w-full bg-transparent hover:bg-slate-800 mt-3 text-white rounded-full ">
            <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
              {" "}
              Download CV
            </span>
          </button> */}
        </div>
      </div>
      <div className="col-span-5 place-self-center mt-4 lg:mt-0 px-4">
        <div className="rounded-full bg-indigo-950 w-[400px] h-[400px] lg:w-[400px] lg:h-[400px]  relative">
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
