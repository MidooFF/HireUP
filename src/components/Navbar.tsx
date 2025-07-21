import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

const Navbar = ({ page }: { page: string }) => {
  const [menu, setMenu] = useState(false);
  return (
    <div
      className={`navbar shadow-1 flex items-center  py-[15px] fixed w-full z-10 bg-white
    max-w-[100vw] pl-[var(--section-padding)] pr-[var(--section-padding)]`}
    >
      {/* ${
      page === "home"
        ? " pl-[var(--section-padding)] pr-[var(--section-padding)] max-sm:pl-[1.25%] max-sm:pr-[1.25%]"
        : " pl-[var(--section-padding)] pr-[var(--section-padding)]"
    } */}
      <div
        className="bg-white w-full h-full absolute top-0 left-0 z-15 hidden max-lg:block
      justify-evenly  max-lg:gap-0 max-lg:justify-start"
      ></div>
      <div
        className="logo flex flex-1 items-center text-[25px] cursor-pointer
      relative bg-white z-15"
      >
        <FaArrowRight />
        <div className="font-bold">HireUP</div>
      </div>
      <div
        className={`burger-icon hidden max-lg:flex relative z-15${
          menu ? ` on` : ` off`
        }`}
        onClick={() => {
          setMenu((prev) => !prev);
        }}
      >
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div
        className={`links flex justify-between flex-2 max-lg:absolute items-center mt-[15px]
      max-lg:translate-y-[100%] max-lg:flex-col max-lg:bg-white max-lg:z-10 max-lg:w-full
      duration-300 max-lg:items-start max-lg:pr-[var(--section-padding)]
      max-lg:ml-[-5%] max-lg:pl-[var(--section-padding)] pb-[20px] ${
        menu ? ` on` : ` off`
      }`}
      >
        <div
          className=" flex items-center gap-[30px] max-lg:flex-col max-lg:items-start
        mr-[-90px] max-lg:mr-[0] ml-[20px] max-lg:ml-0"
        >
          <NavLink
            to="/"
            className="hover:text-[var(--main-color)] duration-300"
            onClick={() => {
              setMenu((prev) => !prev);
            }}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className="hover:text-[var(--main-color)] duration-300"
            onClick={() => {
              setMenu((prev) => !prev);
            }}
          >
            Company
          </NavLink>
          <NavLink
            to="/browse"
            className="hover:text-[var(--main-color)] duration-300"
            onClick={() => {
              setMenu((prev) => !prev);
            }}
          >
            Browse
          </NavLink>
          <NavLink
            to="/blog"
            className="hover:text-[var(--main-color)] duration-300"
            onClick={() => {
              setMenu((prev) => !prev);
            }}
          >
            Blog
          </NavLink>
        </div>
        <div className="max-lg:w-full">
          <button className="mr-[20px] cursor-pointer max-lg:hidden">
            Post A Job
          </button>
          <button
            className="py-[10px] px-[20px] bg-[var(--main-color)] text-white 
        font-bold cursor-pointer max-lg:mt-[20px] max-lg:w-full"
          >
            Log In
          </button>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Navbar);
