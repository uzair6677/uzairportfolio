"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  return (
    <div
      className="h-screen bg-contain min-w-full   " 
      style={{ backgroundImage: "url('/assets/images/about.avif')" }} // Replace with your background path
    >
      {/* Text Content */}
      <div className="text-center text-white py-20">
        <h1 className="mb-4 text-4xl lg:text-6xl font-extrabold">
          <span className="text-white bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            Hello, I'm{" "}
          </span>
          <br />
          <TypeAnimation
            sequence={[
              "Uzair Tariq ",
              1000,
              "Frontend Developer | React & Next.js Specialist",
              1000,
            ]}
            wrapper="span"
            speed={50}
            className="text-4xl text-[#ff004f] sm:text-xl md:text-xl"
            repeat={Infinity}
          />
        </h1>
        <p className="text-white py-19 font-bold text-lg lg:text-xl max-w-xl mx-auto mt-4">
          I build performant, accessible, and beautiful web applications with
          modern technologies. Passionate about creating intuitive user
          experiences with clean, efficient code.
        </p>
      </div>

    
    </div>
  );
};

export default HeroSection;
