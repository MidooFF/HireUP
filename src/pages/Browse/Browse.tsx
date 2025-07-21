import React, { useContext, useEffect, useState } from "react";
import Navbar from "../../components/Navbar";

import { useSearchTerm } from "../../context/SearchContext";
import { useSearchUpdate } from "../../context/SearchContext";
import { FetchContext } from "../../App";
import Job from "./Job";
import LoadingJob from "./LoadingJob";
import Footer from "../../components/Footer";

import { CiSearch } from "react-icons/ci";
import { TiInfoLarge } from "react-icons/ti";
import { FaCheck } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import useDebounce from "../../hooks/useDebounce";

const Browse = () => {
  const searchTerm = useSearchTerm();
  const [openJobsTypes, setOpenJobsTypes] = useState(false);
  const setSearchTerm = useSearchUpdate();
  const data = useContext(FetchContext);
  const [newLoading, setNewLoading] = useState(true);
  const tags = [
    "managment",
    "team leader",
    "marketing",
    "manager",
    "engineering",
    "it",
    "controlling",
    "finance",
    "hr",
    "development",
  ];

  const [randomImages, setRandomImages] = useState<any>();
  const [randomTypes, setRandomTypes] = useState<any>();
  const [randomTimes, setRandomTimes] = useState<any>();

  useEffect(() => {
    window.scrollTo(0, 0);

    setRandomImages(data.data.map((job) => Math.floor(Math.random() * 5) + 1));
    setRandomTypes(
      data.data.map((job) =>
        Math.floor(Math.random() * 3) == 0
          ? "Marketing"
          : Math.floor(Math.random() * 3) == 1
          ? "Design"
          : Math.floor(Math.random() * 3) == 2
          ? "Technology"
          : "Business"
      )
    );
    setRandomTimes(
      data.data.map((job) =>
        Math.floor(Math.random() * 3) == 0
          ? "Full Time"
          : Math.floor(Math.random() * 3) == 1
          ? "Part Time"
          : "Casual"
      )
    );
  }, [data.loading]);
  const [remoteFilter, setRemoteFilter] = useState(false);
  const [remoteFilterConfirm, setRemoteFilterConfirm] = useState(false);
  const [jobsTypes, setJobsTypes] = useState<any>([]);

  const filterJobs = (data: any) => {
    let tempData: any = [];

    // If both job types and remote filters are active
    if (jobsTypes.length > 0 && remoteFilter) {
      data.forEach((job: any) => {
        if (job.remote) {
          // Check if any of the job's tags match the selected job types
          const hasMatchingTag = job.tags.some((tag: string) => {
            const lowerTag = tag.toLowerCase();
            return jobsTypes.some((type: string) => lowerTag.includes(type));
          });
          if (hasMatchingTag) {
            tempData.push(job);
          }
        }
      });
    }
    // If only remote filter is active
    else if (remoteFilter) {
      tempData = data.filter((job: any) => job.remote);
    }
    // If only job types filter is active
    else if (jobsTypes.length > 0) {
      tempData = data.filter((job: any) => {
        return job.tags.some((tag: string) => {
          const lowerTag = tag.toLowerCase();
          return jobsTypes.some((type: string) => lowerTag.includes(type));
        });
      });
    }

    // If only search term is active
    else if (searchTerm) {
      tempData = data.filter((job: any) => {
        return job.company_name
          .toLowerCase()
          .trim()
          .includes(searchTerm.toLowerCase());
      });
    }

    // if search term and remote is acitve
    else if (searchTerm && remoteFilter) {
      tempData = data.filter(
        (job: any) =>
          job.company_name
            .toLowerCase()
            .trim()
            .includes(searchTerm.toLowerCase()) && job.remote
      );
    }
    // If no filters are active
    else {
      tempData = [...data];
    }

    return tempData;
  };

  return (
    <>
      <Navbar page="browse"></Navbar>
      <div className="pt-[110px] max-md:pt-[60px] max-lg:pt-[60px]">
        <h2
          className="text-[45px] text-center font-bold mt-[60px] leading-[1.2]
        max-sm:text-[30px] popup popup-1"
        >
          Build a complete job board
          <br className="max-md:hidden" /> with Webflow memberships
        </h2>
        <p
          className="text-[var(--text-grey-color)] text-center leading-[1.6]
        mt-[20px] text-[18px] max-sm:text-[16px] popup popup-2"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius <br className="max-md:hidden" /> enim in eros elementum
          tristique. Duis cursus, mi quis viverra ornar.
        </p>

        <div
          className="border-solid border-[1px] border-[var(--grey-color)] w-[700px]
        mx-[auto] flex items-center px-[15px] py-[10px] justify-between mt-[100px]
        max-md:w-full"
        >
          <div className="flex items-center popup popup-3">
            <CiSearch className="text-[25px] mr-[10px]" />
            <input
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
              }}
              placeholder="Search.."
              className="border-none outline-none"
            />
          </div>
          <button
            className="bg-[var(--main-color)] text-white py-[10px] px-[30px]
          font-bold popup popup-3"
          >
            Search
          </button>
        </div>

        <div
          className="flex items-start section-padding mt-[80px] gap-[60px]
         max-lg:flex-col"
        >
          <div className="flex-1 max-lg:w-full">
            <p
              className="flex items-center text-[var(--main-color)] text-[20px] 
            font-bold"
            >
              <TiInfoLarge className="text-[var(--text-grey-color)] " /> Filter
              Jobs
            </p>
            <div
              className="flex items-end mt-[40px] border-solid
        border-[#ccc] border-b-[1px] pb-[20px]"
            >
              <div
                onClick={() => {
                  setRemoteFilter((prev) => !prev);
                }}
                className="rounded-[5px] overflow-hidden border-solid 
              border-[1px] border-[#ccc] cursor-pointer mr-[10px]"
              >
                <FaCheck
                  className={`w-[20px] h-[20px] bg-[var(--main-color)] text-white
              flex justify-center items-center p-[2px] duration-300 ${
                remoteFilter ? " translate-y-[0]" : " translate-y-[100%]"
              }`}
                />
              </div>
              <h2
                className="cursor-pointer"
                onClick={() => {
                  setRemoteFilter((prev) => !prev);
                }}
              >
                Remote
              </h2>
            </div>
            <div
              className="py-[20px] border-solid
        border-[#ccc] border-b-[1px] pb-[20px]"
            >
              <div className="flex items-center justify-between  ">
                <p
                  className="cursor-pointer"
                  onClick={() => {
                    setOpenJobsTypes((prev) => !prev);
                  }}
                >
                  Job Types
                </p>
                <IoIosArrowDown
                  onClick={() => {
                    setOpenJobsTypes((prev) => !prev);
                  }}
                  className={`duration-300 cursor-pointer ${
                    openJobsTypes ? " rotate-180" : " rotate-0"
                  }`}
                />
              </div>
              <div
                className={`flex flex-col duration-300 overflow-hidden ${
                  openJobsTypes ? " h-[440px]" : "h-[0]"
                }`}
              >
                {tags.map((tag, i) => {
                  const [open, setOpen] = useState(false);
                  return (
                    <div className="flex items-end mt-[20px] " key={i}>
                      <div
                        onClick={() => {
                          setOpen((prev) => !prev);

                          if (!open) {
                            setJobsTypes((prev: any) => [...prev, tag]);
                          } else {
                            setJobsTypes(
                              jobsTypes.filter((type: any) => !(type == tag))
                            );
                          }
                          true;
                        }}
                        className="rounded-[5px] overflow-hidden border-solid 
                border-[1px] border-[#ccc] cursor-pointer mr-[10px]"
                      >
                        <FaCheck
                          className={`w-[20px] h-[20px] bg-[var(--main-color)] text-white
                flex justify-center items-center p-[2px] duration-300 ${
                  open ? " translate-y-[0]" : " translate-y-[100%]"
                }`}
                        />
                      </div>
                      <h2
                        className="cursor-pointer"
                        onClick={() => {
                          setOpen((prev) => !prev);
                          setJobsTypes((prev: any) => [...prev, tag.trim()]);
                          true;
                        }}
                      >
                        {tag.charAt(0).toUpperCase() + tag.slice(1)}
                      </h2>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div
            className="grid grid-cols-2 gap-[20px] flex-3
          max-lg:w-full max-md:grid-cols-1"
          >
            {data.loading || !randomTypes || !randomTimes || !randomImages
              ? [1, 2, 3, 4].map((item, i) => (
                  <LoadingJob key={i} popup={i}></LoadingJob>
                ))
              : filterJobs(data.data).map((job: any, i: any) => (
                  <Job
                    time={randomTimes[i]}
                    type={randomTypes[i]}
                    img={randomImages[i]}
                    popup={i}
                    key={i}
                    name={job.company_name}
                    tag={job.tags[0]}
                    location={job.location}
                  />
                ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Browse;
