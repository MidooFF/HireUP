import React from "react";

const OurTeam = () => {
  return (
    <div className="mt-[200px] max-sm:mt-[100px] section-padding text-center">
      <h2 className="text-[var(--main-color)] text-[18px] font-bold">
        About HireUP
      </h2>
      <h1 className="text-[40px] font-bold max-sm:text-[30px]">Our Team</h1>
      <p className="text-[var(--text-grey-color)] text-[17px] mt-[15px] mb-[30px] ">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        <br className="max-sm:hidden" /> Mauris rhoncus pharetra cursus.
        Suspendisse sodales porta
        <br /> leo, ac placerat ex pretium quis.
      </p>
      <div className="flex flex-col gap-[30px] max-sm:gap-[15px]">
        <div className="flex gap-[15px] overflow-hidden justify-between">
          <div className="flex flex-col flex-[0.937] gap-[30px] max-sm:gap-[15px]">
            <div>
              <img src="https://assets.website-files.com/63337525695d8ba70ab44222/63337525695d8b1fdeb442ab_About%20Page%20Image%20(6).webp" />
            </div>
            <div>
              {" "}
              <img src="https://assets.website-files.com/63337525695d8ba70ab44222/63337525695d8b307ab442a7_About%20Page%20Image%20(5).webp" />
            </div>
          </div>
          <div className="flex-2 flex justify-end">
            <img src="https://assets.website-files.com/63337525695d8ba70ab44222/63337525695d8b2818b442aa_About%20Page%20Image%20(1).webp" />
          </div>
        </div>
        <div className="flex max-w-[100vw] gap-[30px] max-sm:gap-[15px]">
          <div>
            <img src="https://assets.website-files.com/63337525695d8ba70ab44222/63337525695d8b18b1b442b0_About%20Page%20Image%20(7).webp" />
          </div>
          <div>
            <img src="https://assets.website-files.com/63337525695d8ba70ab44222/63337525695d8b2ba9b442b1_About%20Page%20Image%20(8).webp" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
