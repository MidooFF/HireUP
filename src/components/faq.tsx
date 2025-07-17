import React, { useState } from "react";

import { IoIosArrowDown } from "react-icons/io";

const Quest = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <div
        className="bg-white shadow-1 py-[20px] px-[30px] mt-[20px] cursor-pointer"
        onClick={() => {
          setOpen((prev) => !prev);
        }}
      >
        <div className="flex justify-between items-center max-sm:gap-[40px]">
          <p className="font-bold text-[18px] max-sm:text-[15px]">
            How do I get started lorem ipsum dolor at?
          </p>
          <IoIosArrowDown
            className={`text-[25px] font-bold duration-300 ${
              open ? " rotate-180" : " rotate-0"
            }`}
          />
        </div>
      </div>
      <p
        className={`bg-white shadow-1 px-[30px] text-[var(--text-grey-color)]
      leading-[1.6] duration-300 overflow-hidden max-sm:text-[14px] ${
        open
          ? " h-[160px] max-lg:h-[205px] max-md:h-[260px] max-sm:h-[340px]"
          : " h-0"
      }`}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus at dui
        mollis metus gravida tristique. Morbi semper ornare euismod. Morbi magna
        urna, pulvinar ac massa ultricies, molestie finibus sem. Sed facilisis
        velit nisi, non efficitur nibh tincidunt at. Cras condimentum ante sit
        amet rutrum euismod. Fusce porttitor ipsum consequat tortor feugiat
        varius ac et ipsum. Quisque sed est non erat ultricies condimentum sed
        quis nisi. Nullam rutrum sapien nec sapien venenatis, vitae auctor elit
        malesuada. Nam feugiat enim a urna blandit ullamcorper. Nunc purus urna,
        auctor quis aliquet eget, consectetur quis metus.
      </p>
    </div>
  );
};

export default Quest;
