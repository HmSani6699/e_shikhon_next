import React, { FC } from "react";

type Props = {};

const Hero: FC<Props> = (props) => {
  return (
    <div className="w-full 1000px:flex items-center h-screen">
      {/* left site content */}
      <div className="lg:w-1/2">
        <h2
          className={`text-[25px] font-Josefin font-[500] text-black dark:text-white`}
        >
          Left site
        </h2>
      </div>
      {/* Right digte content */}
      <div className="lg:w-1/2">
        <h2
          className={`text-[60px] font-Josefin font-[500] text-black dark:text-white`}
        >
          Improve Your Online Learning Experience Better Instantiy
        </h2>
        <p
          className={`text-[16px] font-Josefin font-[500] text-black dark:text-white`}
        >
          We have 40k+ Online courses & 500k+ Online registered student. Find
          your desired Courses from them
        </p>
      </div>
    </div>
  );
};

export default Hero;
