import React, { useEffect } from "react";

import Landing from "./Landing";
import Companies from "./Companies";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-[110px]">
      <Landing />
      <Companies />
    </div>
  );
};

export default About;
