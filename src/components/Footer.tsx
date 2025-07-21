import React from "react";

import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div
      className="section-padding pb-[100px] border-t-solid 
    border-t-[var(--grey-color)] border-t-[1px] pt-[60px]"
    >
      <div
        className="logo flex flex-1 items-center text-[25px] cursor-pointer
               bg-white z-15 mb-[60px]"
      >
        <FaArrowRight className="text-[var(--main-color)]" />
        <div className="font-bold">HireUP</div>
      </div>
      <div className="flex justify-between gap-[100px] max-sm:flex-col max-sm:gap-[50px]">
        <div className="grid grid-cols-2 gap-[100px] flex-2">
          <div className="flex flex-col gap-[15px]">
            <h2 className="text-[var(--text-grey-color)] text-[1.2em] mb-[10px] font-bold">
              Pages
            </h2>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/pricing">Pricing</Link>
            <Link to="/browse">Jobs</Link>
            <Link to="/login">Post A Job</Link>
          </div>
          <div className="flex flex-col gap-[15px]">
            <h2 className="text-[var(--text-grey-color)] text-[1.2em] mb-[10px] font-bold">
              Account
            </h2>
            <Link to="/login">Sign In</Link>
            <Link to="/sign-up">Sign Up</Link>
            <Link to="/reset-password">Reset Password</Link>
            <Link to="/login">User Account</Link>
          </div>
        </div>
        <div className="flex-1">
          <h2 className="text-[var(--text-grey-color)] text-[1.2em] mb-[10px] font-bold">
            Sign up to our newsletter
          </h2>
          <form className="flex items-center pt-[20px] gap-[10px] max-sm:flex-col">
            <input
              type="mail"
              placeholder="Email Adress"
              className="border-solid max-sm:w-full
              border-[var(--grey-color)] border-[1px] p-[10px] flex-1"
            />
            <button
              type="submit"
              className="bg-[var(--main-color)] text-white py-[10px] px-[20px]
              max-sm:w-full"
            >
              Get Started
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Footer;
