import React, { useEffect } from "react";

import Landing from "./Landing";
import Companies from "./Companies";
import Audience from "./Audience";
import OurTeam from "./OurTeam";
import FAQ from "./FAQ";
import ContactUs from "./ContactUs";
import Footer from "../../components/Footer";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-[110px] max-md:pt-[60px] max-lg:pt-[60px]">
      <Landing />
      <Companies />
      <Audience />
      <OurTeam />
      <FAQ />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default About;
