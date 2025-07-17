import React from "react";
import Quest from "../../components/faq";

const FAQ = () => {
  return (
    <div className="mt-[100px] section-padding">
      <p
        className="text-[var(--main-color)] text-center font-bold text-[18px]
      tracking-[1.2px]"
      >
        About HireUP
      </p>
      <h2 className="text-center text-[40px] max-sm:text-[30px] font-bold mb-[40px]">
        Frequently asked questions
      </h2>
      <Quest />
      <Quest />
      <Quest />
    </div>
  );
};

export default FAQ;
