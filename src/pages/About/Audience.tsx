import { FaCheckCircle } from "react-icons/fa";
const Audience = () => {
  return (
    <div
      className="section-padding mt-[200px] flex gap-[20px] justify-between 
    items-center max-md:flex-col max-sm:mt-[100px]"
    >
      <div>
        <h3 className="text-[var(--main-color)] font-bold tracking-[1.2px] ">
          About Hireup
        </h3>
        <h2 className="text-[40px] font-bold leading-[1] my-[15px] max-sm:text-[30px]">
          Who is<br></br> our audience?
        </h2>
        <p className="text-[var(--text-grey-color)] text-[18px] my-[30px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris{" "}
          rhoncus pharetra cursus. Suspendisse sodales porta leo, ac placerat ex
          pretium quis.
        </p>
        <p className="flex items-center mb-[10px]">
          <FaCheckCircle
            className="text-[var(--main-color)] font-bold text-[20px]
          mr-[10px]"
          />{" "}
          Add your feature here
        </p>
        <p className="flex items-center">
          <FaCheckCircle
            className="text-[var(--main-color)] font-bold text-[20px]
          mr-[10px]"
          />{" "}
          Add your feature here
        </p>
      </div>
      <div className="flex gap-[30px]">
        <div>
          <img src="https://assets.website-files.com/63337525695d8ba70ab44222/63337525695d8bf367b442ac_About%20Page%20Image%20(4).webp" />
        </div>
        <div className="flex flex-col gap-[30px]">
          <img src="https://assets.website-files.com/63337525695d8ba70ab44222/63337525695d8b053bb442a8_About%20Page%20Image%20(3).webp" />
          <img src="https://assets.website-files.com/63337525695d8ba70ab44222/63337525695d8bd838b442a9_About%20Page%20Image%20(2).webp" />
        </div>
      </div>
    </div>
  );
};

export default Audience;
