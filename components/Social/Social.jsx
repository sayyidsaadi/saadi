import React from "react";
import { BsFacebook, BsLinkedin, BsGithub } from "react-icons/bs";

function Social() {
  return (
    <>
      <div className="absolute hidden sm:block bottom-10 right-[10%] sm:flex flex-col gap-4 items-center after:w-1 after:h-8 3xl:after:h-10 dark:after:bg-color-primary after:bg-color-bg-primary ">
        <a href="" className="social-btn">
          <BsLinkedin />
        </a>
        <a href="" className="social-btn">
          <BsGithub />
        </a>
        <a href="" className="social-btn">
          <BsFacebook />
        </a>
      </div>
    </>
  );
}

export default Social;
