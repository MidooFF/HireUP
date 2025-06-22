import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar flex items-center justify-between section-padding py-[30px]">
      <div className="logo flex items-center text-[25px] cursor-pointer">
        <FaArrowRight />
        <div className="font-bold">HireUP</div>
      </div>
      <div className="links flex items-center gap-[30px]">
        <NavLink to="/" className="hover:text-[var(--main-color)] duration-300">
          Home
        </NavLink>
        <NavLink
          to="company"
          className="hover:text-[var(--main-color)] duration-300"
        >
          Company
        </NavLink>
        <NavLink
          to="browse"
          className="hover:text-[var(--main-color)] duration-300"
        >
          Browse
        </NavLink>
        <NavLink
          to="blog"
          className="hover:text-[var(--main-color)] duration-300"
        >
          Blog
        </NavLink>
      </div>
      <div>
        <button className="mr-[20px] cursor-pointer">Post A Job</button>
        <button
          className="py-[10px] px-[20px] bg-[var(--main-color)] text-white 
        font-bold cursor-pointer"
        >
          Log In
        </button>
      </div>
    </div>
  );
};

export default Navbar;
