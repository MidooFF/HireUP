import React from "react";

const Home = () => {
  return (
    <div className="home section-padding pt-[80px] relative">
      <div
        className="flex justify-between items-end gap-[90px] max-lg:flex-col
       max-lg:items-start mt-[80px] max-lg:gap-[20px]"
      >
        <div className="flex-1 popup">
          <p>
            <span className="text-[var(--main-color)] font-bold mr-[5px]">
              New
            </span>{" "}
            Stay connected to get upcoming jobs
          </p>
          <h2 className="text-[45px] font-bold mt-[25px]">
            Find the most exciting jobs in tech
          </h2>
        </div>
        <div className="flex-1 popup popup-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a mi
          rhoncus, pharetra leo et.{" "}
          <span className="text-[var(--main-color)]">Sign in</span> or{" "}
          <span className="text-[var(--main-color)]">Sign up</span> to get
          started!
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Home;
