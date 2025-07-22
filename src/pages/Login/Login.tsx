import { useEffect } from "react";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Navbar />
      <div className="pt-[110px] max-md:pt-[60px] max-lg:pt-[60px] mb-[150px]">
        <div className="flex gap-[60px] max-lg:flex-col-reverse max-lg:gap-[20px]">
          <div className="flex-1 pl-[5%] max-lg:pr-[5%] popup popup-1 max-lg:popup-2">
            <h2 className="mt-[100px] text-[45px] font-bold">Log in</h2>
            <p className="text-[18px] my-[10px]">
              Sign in to create and apply for jobs
            </p>

            <form className="mt-[40px]" action="#">
              <label className="block font-bold">Email</label>
              <input
                type="email"
                required
                className="outline-none border-solid border-[1px] border-[#ccc]
                 py-[10px] px-[10px] mt-[5px] w-full"
              />
              <label className="block font-bold mt-[15px]">Password</label>
              <input
                className="outline-none border-solid border-[1px] border-[#ccc]
                 py-[10px] px-[10px] mt-[5px] w-full"
                type="password"
                required
              />
              <button
                className="block bg-[var(--main-color)] text-white py-[10px] text-center
                w-full mt-[20px] cursor-pointer duration-300 hover:bg-[#312bdc]"
                type="submit"
              >
                Log In
              </button>
            </form>
            <p className="text-[var(--text-grey-color)] mt-[30px] ">
              Don't have an account?{" "}
              <span
                className="text-[var(--main-color)]"
                onClick={() => {
                  navigate("/sign-up");
                }}
              >
                Sign Up
              </span>
            </p>
          </div>
          <div
            className="flex-1 login-bg pr-[5%] pl-[5%] pb-[40px] max-lg:bg-cover
          popup popup-2 max-lg:popup-1"
          >
            <p className="mt-[100px] bg-[#ffffff4a] w-fit text-white p-[5px] text-[15px]">
              <span
                className="text-[var(--main-color)] bg-white py-[2px] px-[5px] font-bold
              mr-[5px] "
              >
                New
              </span>
              Login Page
            </p>
            <h2 className="text-white text-[55px] font-bold leading-[1.2] mt-[20px]">
              Welcome To <br />
              HirUP.
            </h2>
            <div className="flex items-start mt-[80px]">
              <p className="text-white text-[20px]">
                “Hireup puts the focus in the right place: on the people who are
                using it.”
              </p>
              <div className="w-[120px] h-[120px] ">
                <img
                  className="w-full"
                  src="https://assets.website-files.com/63337525695d8ba70ab44222/63476f8e7346711b5a267d23_Quote%20Icon.svg"
                />
              </div>
            </div>
            <div className="flex mt-[-20px] items-center gap-[20px]">
              <div className="w-[60px] h-[60px] rounded-[50%] overflow-hidden">
                <img
                  className="w-full"
                  src="https://assets.website-files.com/63337525695d8ba70ab44222/63337525695d8bb62eb44259_Testimonial%20Avatar%20(1).webp"
                />
              </div>
              <div>
                <h3 className="text-white mb-[2px]">Sarah Lovelace</h3>
                <p className="text-[var(--text-grey-color)]">UI Designer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Login;
