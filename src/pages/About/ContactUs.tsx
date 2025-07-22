import { FaArrowRight } from "react-icons/fa";

const ContactUs = () => {
  return (
    <div className="section-padding mt-[150px] mb-[200px]">
      <h2 className="text-[40px] font-bold max-sm:text-[30px] text-center">
        Contact Us
      </h2>
      <p
        className="text-[var(--text-grey-color)] text-center text-[18px] mt-[15px]
       leading-[1.2]"
      >
        Questions about Hireup? Get in touch and let us know how we{" "}
        <br className="max-sm:hidden" /> can help.
      </p>
      <div
        className="flex gap-[80px] items-start mt-[40px] max-lg:flex-col
      max-lg:gap-[40px]"
      >
        <div className="flex-1 w-full">
          <img
            className="w-full"
            src="https://assets.website-files.com/63337525695d8ba70ab44222/6345158a36516a477226909d_Feature%20Image.webp"
          />
          <p className="text-center mt-[5px] text-[var(--text-grey-color)] ">
            Partnership with <span className="text-black">Glassdoor</span> and{" "}
            <span className="text-black">LinkedIn</span>
          </p>
        </div>
        <form className="flex-col flex justify-between w-full flex-1 gap-[35px]">
          <div className="flex-col flex w-full">
            <label htmlFor="name" className="font-bold">
              Name
            </label>
            <input
              required
              placeholder="Your Name"
              id="name"
              className="border-solid border-[1px] border-[var(--grey-color)] 
              outline-none p-[10px] w-full"
            />
          </div>
          <div className="flex-col flex w-full">
            <label htmlFor="mail" className="font-bold">
              Email
            </label>
            <input
              required
              type="email"
              placeholder="Your Email"
              id="mail"
              className="border-solid border-[1px] border-[var(--grey-color)] 
              outline-none p-[10px] w-full"
            />
          </div>
          <div className="flex-col flex w-full">
            <label htmlFor="subject" className="font-bold">
              Subject
            </label>
            <input
              required
              placeholder="Your Subject"
              id="subject"
              className="border-solid border-[1px] border-[var(--grey-color)] 
              outline-none p-[10px] w-full"
            />
          </div>
          <div className="flex-col flex w-full">
            <label htmlFor="message" className="font-bold">
              Message
            </label>
            <textarea
              required
              placeholder="Your Message"
              id="message"
              className="border-solid border-[1px] border-[var(--grey-color)] 
              outline-none p-[10px] w-full resize-none h-[60px]"
            ></textarea>
          </div>
          <button
            type="submit"
            className="flex justify-center w-full bg-[var(--main-color)] text-white
            items-center font-bold text-[15px] p-[10px] cursor-pointer"
          >
            Submit <FaArrowRight className="ml-[10px]" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
