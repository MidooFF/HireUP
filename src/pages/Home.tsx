import React, { useEffect, useState, useCallback, useContext } from "react";
import { CiSearch } from "react-icons/ci";
import useFetch from "../hooks/useFetch";
import useRandom from "../hooks/useRandom";
import { FetchContext } from "../App";

import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
import { CiLocationOn } from "react-icons/ci";
import { TbCoins } from "react-icons/tb";

const Home = () => {
  const DataContext = useContext(FetchContext);
  const { loading, data, error } = DataContext;
  const { randomCompanies, randomCompanyImages } = useRandom(6);
  const renderCompanies = useCallback((index: number) => {
    for (let i = 0; i < randomCompanies.length; i++) {
      return randomCompanies.includes(index);
    }
  }, []);

  const [randomCompType, setRandomCompType] = useState(
    Math.floor(Math.random() * 4)
  );
  const [randomCompTime, setRandomCompTime] = useState(
    Math.floor(Math.random() * 4)
  );

  const [exiCompanies, setExiCompanies] = useState([
    { name: "Facebook", emp: 3000, img: "./../../public/company-3.svg" },
    { name: "Dribble", emp: 65, img: "./../../public/company-1.svg" },
    { name: "Paypal", emp: 6000, img: "./../../public/company-4.svg" },
    { name: "Spotify", emp: 2000, img: "./../../public/company-5.svg" },
    { name: "Slack", emp: 2000, img: "./../../public/company-6.svg" },
  ]);

  const exiCompLeft = () => {
    setMoveExiCompLeft(true);
  };
  const exiCompRight = () => {
    setMoveExiCompRight(true);
  };
  const [moveExiCompLeft, setMoveExiCompLeft] = useState(false);

  // Moves the first company to the end of the array
  const [moveExiCompRight, setMoveExiCompRight] = useState(false);

  useEffect(() => {
    if (moveExiCompLeft) {
      let timeout = setTimeout(() => {
        setExiCompanies((prevCompanies) => {
          if (prevCompanies.length === 0) return prevCompanies;
          const lastCompany = prevCompanies[prevCompanies.length - 1];
          const newCompanies = [
            lastCompany,
            ...prevCompanies.slice(0, prevCompanies.length - 1),
          ];
          setMoveExiCompLeft(false);

          return newCompanies;
        });
      }, 300);
    }
  }, [moveExiCompLeft]);

  useEffect(() => {
    if (moveExiCompRight) {
      let timeout = setTimeout(() => {
        setExiCompanies((prevCompanies) => {
          if (prevCompanies.length === 0) return prevCompanies;
          const [firstCompany, ...remainingCompanies] = prevCompanies;
          setMoveExiCompRight(false);

          return [...remainingCompanies, firstCompany];
        });
      }, 300);
    }
  }, [moveExiCompRight]);
  return (
    <div className="home section-padding pt-[80px] relative">
      <div
        className="flex justify-between items-end gap-[90px] max-lg:flex-col
       max-lg:items-start mt-[80px] max-lg:gap-[20px] mb-[150px] max-sm:mb-[100px]"
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
      <div className="w-full landing h-[500px] relative popup popup-3">
        <div
          className="w-[65%] bg-white absolute h-[80px] top-0 flex items-center
        translate-y-[-50%] border-1 border-[#ccc] border-solid max-md:w-[100%]
        max-sm:flex-col max-sm:h-[120px] max-sm:pb-[10px] max-sm:p-[10px]"
        >
          <div className="flex flex-2 items-center max-sm:justify-start max-sm:w-full">
            <CiSearch />
            <input
              className="border-none outline-none flex-2"
              placeholder="Search..."
            />
          </div>
          <button
            className="px-[25px] py-[8px] text-white bg-[var(--main-color)] mr-[10px]
          cursor-pointer text-[18px] max-sm:w-[100%] max-sm:mr-[0] "
          >
            Search
          </button>
        </div>
        <img
          className="max-h-full w-full object-cover max-sm:w-auto max-sm:h-[100%]"
          src="https://assets.website-files.com/63337525695d8ba70ab44222/6358b2bbb9fdec69f1b1c7a4_adam-rhodes-ep5lX958f7E-unsplash-p-1080.webp"
        />
      </div>
      <p className="text-[var(--text-grey-color)] text-center mt-[10px]">
        Work for <span className="text-black">industry leading</span> global
        companies
      </p>
      <div className="companies flex justify-between mt-[60px] flex-wrap max-md:mt-[30px]">
        <div>
          <img src="https://cdn.prod.website-files.com/63337525695d8ba70ab44222/63337525695d8b8f23b4428c_Grey%20Logo%20Large%20(2).svg" />
        </div>
        <div>
          <img src="https://cdn.prod.website-files.com/63337525695d8ba70ab44222/63337525695d8b2d66b4428f_Grey%20Logo%20Large%20(5).svg" />
        </div>{" "}
        <div>
          <img src="https://cdn.prod.website-files.com/63337525695d8ba70ab44222/63337525695d8b464eb4428d_Grey%20Logo%20Large%20(4).svg" />
        </div>
        <div>
          <img src="https://cdn.prod.website-files.com/63337525695d8ba70ab44222/63337525695d8b1160b4428a_Grey%20Logo%20Large%20(1).svg" />
        </div>
        <div>
          <img src="https://cdn.prod.website-files.com/63337525695d8ba70ab44222/63337525695d8b0585b4428b_Grey%20Logo%20Large%20(3).svg" />
        </div>
        <div>
          <img src="https://cdn.prod.website-files.com/63337525695d8ba70ab44222/63337525695d8bb6c6b4428e_Grey%20Logo%20Large%20(6).svg" />
        </div>
      </div>
      <div className="mt-[120px] popup popup-1">
        <h2 className="text-[40px] font-bold mb-[20px]">
          Explore the latest job openings{" "}
        </h2>
        <div className="flex items-center mb-[40px] max-md:flex-col">
          <p className="text-[var(--text-grey-color)] flex-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a mi
            rhoncus, pharetra leo et, efficitur tortor. Fusce vel convallis
            magna.
          </p>
          <div className="flex-2 flex justify-end max-md:w-full max-md:mt-[10px]">
            <button
              className="bg-[var(--main-color)] px-[25px] py-[10px] font-bold
            text-white cursor-pointer max-md:w-full max-md:mt-[10px]"
            >
              See All Jobs
            </button>
          </div>
        </div>
      </div>
      <div
        className="grid grid-cols-3 gap-[30px] popup popup-2 max-lg:grid-cols-2
      max-md:grid-cols-1"
      >
        {loading ? (
          <>
            <div
              className="bg-[#ccc] overflow-hidden p-[30px] rounded-[30px] loading
        relative"
            >
              <div className="flex items-start relative z-3">
                <div
                  className="w-[60px] h-[60px] flex justify-center items-center
            bg-[#c1c1c1] mr-[15px] rounded-[50%]"
                >
                  {" "}
                  <img
                    className="
             w-[70%] object-cover"
                  />
                </div>
                <div className="w-[60%]">
                  <h2
                    className=" bg-[#c1c1c1] 
              w-[100px] h-[30px] rounded-[10px]"
                  ></h2>
                  <p
                    className="w-[80px] h-[20px] 
              bg-[#c1c1c1] rounded-[5px] mt-[10px]"
                  ></p>
                </div>
              </div>
              <h2
                className="bg-[#c1c1c1] 
              w-[200px] h-[30px] rounded-[10px] mt-[20px] mb-[15px]"
              >
                {}
              </h2>
              <span
                className="w-[80px] h-[20px] inline-block
              bg-[#c1c1c1] rounded-[5px] mt-[10px]"
              ></span>
              <span
                className="w-[80px] h-[20px] inline-block
              bg-[#c1c1c1] rounded-[5px] mt-[10px]
        ml-[10px]"
              ></span>
              <div className=" flex items-center ">
                <span
                  className="w-[80px] h-[20px] inline-block
              bg-[#c1c1c1] rounded-[5px] mt-[10px]"
                ></span>
                <span
                  className="w-[80px] h-[20px] inline-block
              bg-[#c1c1c1] rounded-[5px]
              mt-[10px] ml-[10px]"
                ></span>
              </div>
            </div>
            <div
              className="bg-[#ccc] overflow-hidden p-[30px] rounded-[30px] loading
        relative"
            >
              <div className="flex items-start relative z-3">
                <div
                  className="w-[60px] h-[60px] flex justify-center items-center
            bg-[#c1c1c1] mr-[15px] rounded-[50%]"
                >
                  {" "}
                  <img
                    className="
             w-[70%] object-cover"
                  />
                </div>
                <div className="w-[60%]">
                  <h2
                    className=" bg-[#c1c1c1] 
              w-[100px] h-[30px] rounded-[10px]"
                  ></h2>
                  <p
                    className="w-[80px] h-[20px] 
              bg-[#c1c1c1] rounded-[5px] mt-[10px]"
                  ></p>
                </div>
              </div>
              <h2
                className="bg-[#c1c1c1] 
              w-[200px] h-[30px] rounded-[10px] mt-[20px] mb-[15px]"
              >
                {}
              </h2>
              <span
                className="w-[80px] h-[20px] inline-block
              bg-[#c1c1c1] rounded-[5px] mt-[10px]"
              ></span>
              <span
                className="w-[80px] h-[20px] inline-block
              bg-[#c1c1c1] rounded-[5px] mt-[10px]
        ml-[10px]"
              ></span>
              <div className=" flex items-center ">
                <span
                  className="w-[80px] h-[20px] inline-block
              bg-[#c1c1c1] rounded-[5px] mt-[10px]"
                ></span>
                <span
                  className="w-[80px] h-[20px] inline-block
              bg-[#c1c1c1] rounded-[5px]
              mt-[10px] ml-[10px]"
                ></span>
              </div>
            </div>
            <div
              className="bg-[#ccc] overflow-hidden p-[30px] rounded-[30px] loading
        relative"
            >
              <div className="flex items-start relative z-3">
                <div
                  className="w-[60px] h-[60px] flex justify-center items-center
            bg-[#c1c1c1] mr-[15px] rounded-[50%]"
                >
                  {" "}
                  <img
                    className="
             w-[70%] object-cover"
                  />
                </div>
                <div className="w-[60%]">
                  <h2
                    className=" bg-[#c1c1c1] 
              w-[100px] h-[30px] rounded-[10px]"
                  ></h2>
                  <p
                    className="w-[80px] h-[20px] 
              bg-[#c1c1c1] rounded-[5px] mt-[10px]"
                  ></p>
                </div>
              </div>
              <h2
                className="bg-[#c1c1c1] 
              w-[200px] h-[30px] rounded-[10px] mt-[20px] mb-[15px]"
              >
                {}
              </h2>
              <span
                className="w-[80px] h-[20px] inline-block
              bg-[#c1c1c1] rounded-[5px] mt-[10px]"
              ></span>
              <span
                className="w-[80px] h-[20px] inline-block
              bg-[#c1c1c1] rounded-[5px] mt-[10px]
        ml-[10px]"
              ></span>
              <div className=" flex items-center ">
                <span
                  className="w-[80px] h-[20px] inline-block
              bg-[#c1c1c1] rounded-[5px] mt-[10px]"
                ></span>
                <span
                  className="w-[80px] h-[20px] inline-block
              bg-[#c1c1c1] rounded-[5px]
              mt-[10px] ml-[10px]"
                ></span>
              </div>
            </div>
          </>
        ) : (
          data.map((company, index) => (
            <>
              {renderCompanies(index) ? (
                <div
                  key={index}
                  className="border-solid border-[1px] border-[var(--grey-color)] p-[20px]
                  hover:border-[var(--text-grey-color)] duration-300 shadow-2"
                >
                  <div className="flex items-start">
                    <div
                      className="w-[60px] h-[60px] flex justify-center items-center
                   border-solid border-[1px] border-[var(--grey-color)] mr-[15px]"
                    >
                      {" "}
                      <img
                        src={`../../public/company-${
                          randomCompanyImages[Math.floor(index / 16)]
                        }.svg`}
                        className="
                      w-[70%] object-cover"
                      />
                    </div>
                    <div className="w-[60%]">
                      <h2 className="">{company.company_name}</h2>
                      <p className="text-[var(--text-grey-color)]">
                        October 25, 2022
                      </p>
                    </div>
                  </div>
                  <h2 className="my-[20px] font-bold">{company.tags[0]}</h2>
                  <span className="text-blue-800 bg-[#0000ff1c] px-[5px] py-[2px] rounded-[4px]">
                    {randomCompType === 0
                      ? "Marketing"
                      : randomCompType === 1
                      ? "Technology"
                      : randomCompType === 2
                      ? "Business"
                      : "Design"}
                  </span>
                  <span
                    className="text-orange-500 bg-[#ffa50036] px-[5px] py-[2px] rounded-[4px]
                 ml-[10px]"
                  >
                    {randomCompTime === 0
                      ? "Part Time"
                      : randomCompTime === 1
                      ? "Full Time"
                      : randomCompTime === 2
                      ? "Contract"
                      : "Casual"}
                  </span>
                  <div className="mt-[20px] flex items-center ">
                    <span className="flex items-center text-[var(--text-grey-color)]">
                      <CiLocationOn className="text-[22px] mr-[5px]" />
                      {company.location}
                    </span>
                    <span className="flex items-center text-[var(--text-grey-color)] ml-[10px]">
                      <TbCoins className="text-[22px] mr-[5px]" />$ 50k-70k
                    </span>
                  </div>
                </div>
              ) : null}
            </>
          ))
        )}
      </div>

      <div className="mt-[120px]">
        <h2 className="text-[40px] font-bold mb-[10px]">
          Work with exciting companies
        </h2>
        <div className="flex items-center mb-[40px] max-md:flex-col max-md:items-start">
          <p className="text-[var(--text-grey-color)] flex-4">
            Discover more than 1,600 open positions
          </p>
          <div className="flex-2 flex justify-end max-md:mt-[15px]">
            <div
              onClick={exiCompLeft}
              className="w-[50px] h-[50px] border-solid border-[var(--grey-color)]
             border-[1px] flex justify-center items-center text-[20px]
             cursor-pointer hover:bg-[var(--grey-color)] duration-300"
            >
              <FaArrowLeftLong />
            </div>
            <div
              onClick={exiCompRight}
              className="w-[50px] h-[50px] border-solid border-[var(--grey-color)]
             border-[1px] flex justify-center items-center text-[20px] ml-[20px]
             cursor-pointer hover:bg-[var(--grey-color)] duration-300"
            >
              <FaArrowRightLong />
            </div>
          </div>
        </div>
        <div
          className={`w-[170%] max-lg:w-[260%] max-md:w-[550%] gap-[3%] flex translate-x-[-20%] max-lg:translate-x-[0 ${
            moveExiCompLeft ? " move-left" : ""
          } ${moveExiCompRight ? " move-right" : ""}`}
        >
          {exiCompanies.map(({ name, emp, img }, index) => {
            return (
              <div
                key={index}
                className={`w-[30%] max-lg:w-[50%] max-md:w-[100%] 
                  inline-block "border-solid border-[1px] 
                  border-[var(--grey-color)] p-[20px] hover:border-[var(--text-grey-color)]
                  duration-300 shadow-2`}
              >
                <div className="flex items-center">
                  <div
                    className="w-[60px] h-[60px] flex justify-center items-center
                   border-solid border-[1px] border-[var(--grey-color)] mr-[15px]"
                  >
                    {" "}
                    <img
                      src={img}
                      className="
                      w-[70%] object-cover"
                    />
                  </div>
                  <h3 className="font-bold">{name}</h3>
                </div>
                <p className="mt-[15px] text-[var(--text-grey-color)]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Doloremque veniam
                </p>
                <p className="mt-[30px] w-fit text-[#246b49] bg-[#f1f8f4] px-[15px] py-[10px]">
                  {emp} Employes
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
