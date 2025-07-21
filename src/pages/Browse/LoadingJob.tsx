import React from "react";

const LoadingJob = ({ popup }: { popup: number }) => {
  return (
    <div>
      <>
        <div
          className={`bg-[#ccc] overflow-hidden p-[30px] rounded-[30px] loading
        relative mb-[20px] popup popup-${popup}`}
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
    </div>
  );
};

export default LoadingJob;
