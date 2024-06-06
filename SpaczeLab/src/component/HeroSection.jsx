import React from "react";
import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";

const HeroSection = () => {
  return (
    <>
      <div className="flex flex-col items-center mt-6 lg:mt-20">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
          SpaczeLab build tools
          <div className="bg-gradient-to-r from-purple-500 to-blue-800 text-transparent bg-clip-text">
            {""}
            for developers
          </div>
        </h1>
        <p className="mt-10 text-lg text-center text-neutral-500 max-w-4x-l"> 
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum iste
          aliquid quo numquam quas non quidem neque. Dolore, eos consequuntur!
          Quae velit vitae animi et doloremque, aspernatur ipsum harum? Minus.
        </p>
        <div className="flex justify-center my-10">
          <a href="#" className="bg-gradient-to-r from-purple-500 to-blue-800 py-3 px-4 mx-3 round-md">
            Get Started
          </a>
          <a href="#" className=" py-3 px-4 mx-3 round-md border">
            Documentation
          </a>
        </div>
      </div>
    </>
  );
};

export default HeroSection