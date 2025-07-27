import { CiLocationOn } from "react-icons/ci";
import { TbCoins } from "react-icons/tb";

const Job = ({
  name,
  tag,
  location,
  popup,
  img,
  type,
  time,
}: {
  name: string;
  tag: string;
  location: string;
  popup: number;
  img: number;
  type: string;
  time: string;
}) => {
  return (
    <div
      className={`border-solid border-[1px] border-[var(--grey-color)] p-[20px]
     hover:border-[var(--text-grey-color)] duration-300 shadow-2 popup popup-${popup}`}
    >
      <div className="flex items-start">
        <div
          className="w-[60px] h-[60px] flex justify-center items-center
                     border-solid border-[1px] border-[var(--grey-color)] mr-[15px]"
        >
          {" "}
          <img
            src={
              img == 1
                ? "https://cdn.prod.website-files.com/63337525695d8b8aebb4423f/63337525695d8b342eb4424d_Dribble%20Icon.svg"
                : img == 2
                ? "https://cdn.prod.website-files.com/63337525695d8b8aebb4423f/63337525695d8b775fb4424c_PayPal%20Icon.svg"
                : img == 3
                ? "https://cdn.prod.website-files.com/63337525695d8b8aebb4423f/63337525695d8b6942b4424b_Spotify%20Icon.svg"
                : img == 4
                ? "https://cdn.prod.website-files.com/63337525695d8b8aebb4423f/63337525695d8bb874b4424a_Slack%20Icon.svg"
                : img == 5
                ? "https://cdn.prod.website-files.com/63337525695d8b8aebb4423f/63337525695d8b1e2eb44249_Facebook%20Icon.svg"
                : ""
            }
            className="
                        w-[70%] object-cover"
          />
        </div>
        <div className="w-[60%]">
          <h2 className="">{name}</h2>
          <p className="text-[var(--text-grey-color)]">October 25, 2022</p>
        </div>
      </div>
      <h2 className="my-[20px] font-bold">{tag}</h2>
      <span className="text-blue-800 bg-[#0000ff1c] px-[5px] py-[2px] rounded-[4px]">
        {type}
      </span>
      <span
        className="text-orange-500 bg-[#ffa50036] px-[5px] py-[2px] rounded-[4px]
                   ml-[10px]"
      >
        {time}
      </span>
      <div className="mt-[20px] flex items-center ">
        <span className="flex items-center text-[var(--text-grey-color)]">
          <CiLocationOn className="text-[22px] mr-[5px]" />
          {location}
        </span>
        <span className="flex items-center text-[var(--text-grey-color)] ml-[10px]">
          <TbCoins className="text-[22px] mr-[5px]" />$ 50k-70k
        </span>
      </div>
    </div>
  );
};

export default Job;
