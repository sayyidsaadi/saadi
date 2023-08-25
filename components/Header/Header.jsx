"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import sadi from "@/public/images/sadi.JPG";
import sadihammad from "@/public/images/hammad.JPG";
import { Typewriter } from "react-simple-typewriter";
import AOS from "aos";

function Header() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);
  return (
    <>
      <header
        id="header"
        className=" flex flex-col justify-center items-center mt-8"
        data-aos="fade-up"
      >
        <div className="text-center">
          <h3 className="text-sm md:text-2xl 3xl:text-3xl dark:text-text-light font-light font-sans - serif font-300  text-color-bg-primary">
            Im
          </h3>
          <h2 className="text-3xl md:text-5xl 3xl:text-7xl md:my-3 2xl:my-4 3xl:my-5 my-2 dark:text-text-light capitalize font-sans - serif font-medium text-color-bg-primary">
            Hammad sadi
          </h2>
          <h4 className="text-lg md:text-2xl 3xl:text-3xl dark:text-text-light capitalize font-light text-color-bg-primary">
            <span>
              {/* Style will be inherited from the parent element */}
              <Typewriter
                words={[
                  "Full Stack Developer",
                  "React Developer",
                  "Next JS Developer",
                  "Node JS Developer",
                ]}
                loop={5}
                cursor
                cursorStyle="|"
                typeSpeed={100}
                deleteSpeed={100}
                delaySpeed={1000}
              />
            </span>
          </h4>
          <div className="flex gap-2 justify-center my-3 2xl:my-4 3xl:my-5">
            <button className="resume-btn">Download</button>
            <button className="dark:bg-color-primary dark:hover:bg-color-primary-variant dark:hover:text-text-light py-2 px-6 bg-color-bg-primary text-text-light hover:text-text-light-variant rounded-md font-light transition-all duration-500 2xl:py-3 2xl:px-7 2xl:text-lg 3xl:p-4 3xl:px-8 3xl:text-2xl">
              Lets Talk
            </button>
          </div>
        </div>
        <div className="mt-3 lg:mt-10">
          <Image
            src={sadihammad}
            width={300}
            height={300}
            className="w-[250px] h-[300px] object-cover 2xl:w-[300px] 2xl:h-[350px] 3xl:w-[350px] 3xl:h-[400px] rounded-xl"
            alt="Hammad Sadi"
          />
        </div>
      </header>
    </>
  );
}

export default Header;
