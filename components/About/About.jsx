"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import hammad from "@/public/images/sadi.JPG";
import sadi from "@/public/images/sa.jpg";
import SectionHeading from "../SectionHeading/SectionHeading";
import AOS from "aos";
function About() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);
  return (
    <>
      <section id="about" className="mt-10" data-aos="fade-up">
        <SectionHeading title="About Me" subtitle="Get To Know" />

        <div className="flex flex-col items-center justify-center md:flex-row md:gap-3 md:mt-10 ">
          <div className="mb-3 mt-6 md:flex-[35%] lg:flex-[40%] lg:flex lg:justify-center">
            <Image
              src={sadi}
              width={300}
              height={300}
              alt="Hammad Sadi"
              className="w-[200px] h-[200px] md:w-[250px] md:h-[250px] 3xl:w-[450px] 3xl:h-[400px] object-cover rounded-xl"
            />
          </div>
          <div className="md:flex-[65%] lg:flex-[60%]">
            <div className="grid grid-cols-2 gap-2 xs:grid-cols-3">
              <div className="dark:bg-color-bg-primary-variant border dark:border-color-bg-primary-variant rounded-xl p-3 3xl:p-5 flex justify-center flex-col flex-1 items-center dark:hover:bg-transparent transition-all duration-500 bg-color-bg-primary hover:bg-color-bg-primary-variant">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6 text-color-primary 3xl:w-10 3xl:h-10"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
                    />
                  </svg>
                </span>

                <h5 className="font-sans - serif font-500 my-1 text-sm 3xl:text-2xl">
                  Experience
                </h5>
                <p className="text-[12px] font-sans - serif font-300 text-text-light-variant 3xl:text-xl">
                  3 + Years
                </p>
              </div>
              <div className="dark:bg-color-bg-primary-variant border dark:border-color-bg-primary-variant rounded-xl p-3 3xl:p-5 flex justify-center flex-col flex-1 items-center dark:hover:bg-transparent transition-all duration-500 bg-color-bg-primary hover:bg-color-bg-primary-variant">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6 text-color-primary 3xl:w-10 3xl:h-10"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
                    />
                  </svg>
                </span>

                <h5 className="font-sans - serif font-500 my-1 text-sm 3xl:text-2xl">
                  Clients
                </h5>
                <p className="text-[12px] font-sans - serif font-300 text-text-light-variant 3xl:text-xl">
                  100 + Clients{" "}
                </p>
              </div>
              <div className="dark:bg-color-bg-primary-variant border dark:border-color-bg-primary-variant rounded-xl p-3 3xl:p-5 flex justify-center flex-col flex-1 items-center dark:hover:bg-transparent transition-all duration-500 bg-color-bg-primary hover:bg-color-bg-primary-variant">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6 text-color-primary 3xl:w-10 3xl:h-10"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M10.125 2.25h-4.5c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125v-9M10.125 2.25h.375a9 9 0 019 9v.375M10.125 2.25A3.375 3.375 0 0113.5 5.625v1.5c0 .621.504 1.125 1.125 1.125h1.5a3.375 3.375 0 013.375 3.375M9 15l2.25 2.25L15 12"
                    />
                  </svg>
                </span>

                <h5 className="font-sans - serif font-500 text-sm my-1 3xl:text-2xl">
                  Projects
                </h5>
                <p className="text-[12px] font-sans - serif font-300 text-text-light-variant 3xl:text-xl">
                  70 + Completed
                </p>
              </div>
            </div>
            <div className="mt-3">
              <p className="dark:text-text-light-variant font-sans - serif font-300 text-sm 3xl:text-xl text-color-bg-primary">
                Hi there! Im Hammad Sadi, MERN Stack Developer with a passion
                for creating efficient, scalable, and user-friendly web
                applications. My expertise lies in crafting elegant and
                efficient solutions by combining the power of MongoDB,
                Express.js, React, and Node.js, I strive to create seamless user
                experiences through clean and efficient code.
              </p>
              <button className="btn-primary mt-3">Lets Talk</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
