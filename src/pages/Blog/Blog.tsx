import { useEffect } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

import { GoDotFill } from "react-icons/go";
import { FaArrowRightLong } from "react-icons/fa6";

const Blog = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const blogs = [
    {
      img: "https://cdn.prod.website-files.com/63337525695d8b8aebb4423f/63561be639e4e57a35cf71d2_Blog%20Image-p-500.jpg",
      name: "Resources",
      desc: "Finding employees in the gig economy",
      date: "October 24, 2022",
    },
    {
      img: "https://cdn.prod.website-files.com/63337525695d8b8aebb4423f/63561bd8f9e1cc06c2dd3337_Blog%20Image%2003-p-500.jpg",
      name: "Education",
      desc: "How to make a great first impression everytime",
      date: "October 24, 2022",
    },
    {
      img: "https://cdn.prod.website-files.com/63337525695d8b8aebb4423f/63561bccf9e1cc47c1dd3328_Blog%20Image%2002-p-500.jpg",
      name: "Trends",
      desc: "Find out the best paying careers in 2022",
      date: "October 24, 2022",
    },
    {
      img: "https://cdn.prod.website-files.com/63337525695d8b8aebb4423f/63337525695d8bf728b44250_Blog%2520Thumbnail%2520(3)-p-800.jpeg",
      name: "Careers",
      desc: "Ten things to nail your next job Interview",
      date: "March 24, 2021",
    },
    {
      img: "https://cdn.prod.website-files.com/63337525695d8b8aebb4423f/63337525695d8b1af3b4424f_Blog%20Thumbnail%20(2).jpg",
      name: "Resources",
      desc: "Why Every Student Should Get a Startup Job",
      date: "March 24, 2021",
    },
    {
      img: "https://cdn.prod.website-files.com/63337525695d8b8aebb4423f/63337525695d8b15bcb4424e_Blog%20Thumbnail%20(1).jpg",
      name: "Education",
      desc: "The Ultimate Guide to Employee Onboarding",
      date: "March 24, 2021",
    },
  ];
  return (
    <>
      <Navbar page="blog" />
      <div className="pt-[110px] max-md:pt-[60px] max-lg:pt-[60px]">
        <p
          className="text-[var(--main-color)] text-[18px] text-center
        mt-[80px] tracking-[1.2px] popup popup-1"
        >
          Blog
        </p>
        <h2
          className="text-[45px] max-sm:text-[30px] text-center mt-[15px] font-bold
         leading-[1.2] popup popup-2"
        >
          Get the latest news
          <br /> about careers
        </h2>
        <p
          className="text-[var(--text-grey-color)] text-[17px] text-center mt-[10px]
        popup popup-3 max-sm:text-[15px]"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
          <br className="max-sm:hidden" />. Suspendisse varius enim in eros
          elementum tristique. Duis
          <br className="max-sm:hidden" />
          cursus, mi quis viverra ornare
        </p>
        <div
          className="grid grid-cols-3 mt-[60px] gap-[20px] section-padding
        popup popup-4 mb-[100px] max-lg:grid-cols-2 max-md:grid-cols-1"
        >
          {blogs.map((blog: any, i: number) => (
            <div
              key={i}
              className={`shadow-2 border-solid border-[2px] border-[var(--grey-color)]`}
            >
              <div className="w-full">
                <img
                  className="w-full object-cover max-h-[200px] max-md:max-h-[300px ]"
                  src={blog.img}
                />
              </div>
              <p
                className="ml-[30px] text-[var(--main-color)] mt-[40px] bg-[#f3f3fc]
                          w-fit p-[5px]"
              >
                {blog.name}
              </p>
              <h2 className="p-[10px] font-bold text-[20px]">{blog.desc}</h2>
              <h3
                className="flex items-center text-[var(--text-grey-color)] tracking-[4px]
                          pl-[10px]"
              >
                <GoDotFill className="text-[var(--text-grey-color)] text-[15px] mr-[5px]" />
                {blog.date}
              </h3>
              <button
                className="w-full flex items-center text-center bg-white duration-300
                          justify-center mt-[20px] cursor-pointer hover:bg-[var(--grey-color)]
                          py-[10px] "
              >
                Read More <FaArrowRightLong className="ml-[10px]" />
              </button>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Blog;
