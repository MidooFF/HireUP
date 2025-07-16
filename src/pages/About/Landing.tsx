import React from "react";
import { FaPlay } from "react-icons/fa6";

const Landing = () => {
  return (
    <div
      className="section-padding pt-[60px] pb-[330px] bg-[var(--main-color)]
    relative mb-[300px]"
    >
      <p
        className="bg-[#f9f9fb1a] w-fit p-[5px] flex items-center text-[14px] gap-[14px]
      pr-[20px] text-white popup popup-1"
      >
        <span
          className="bg-white text-[var(--main-color)] font-bold py-[1px] px-[3px]
         tracking-[2px] block w-fit text-[15px]"
        >
          New
        </span>
        Stay connected to get upcoming jobs
      </p>
      <div className="flex justify-between items-end py-[25px] pb-[30px]">
        <h2
          className="text-[40px] leading-[1.2] text-white font-bold
        popup popup-1"
        >
          Hireup is a webflow membership template.
        </h2>
        <h3 className="text-white popup popup-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
          rhoncus pharetra cursus. Suspendisse sodales porta.
        </h3>
      </div>
      <div
        className="absolute w-full left-0 h-[600px]
        bottom-[-50%] section-padding overflow-hidden popup popup-3"
      >
        <img
          className="w-full object-cover "
          src="https://assets.website-files.com/63337525695d8ba70ab44222/6358b2bbb9fdec69f1b1c7a4_adam-rhodes-ep5lX958f7E-unsplash-p-1080.webp"
        />
        <div
          className="bg-[#ffffff87] w-[80px] h-[80px] rounded-[50%] cursor-pointer translate-y-[50%]
        absolute bottom-[50%] left-[50%] translate-x-[-50%] flex justify-center items-center"
        >
          <FaPlay className="text-white text-[25px]" />
        </div>
      </div>
    </div>
  );
};

export default Landing;
