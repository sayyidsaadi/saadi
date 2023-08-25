"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import SectionHeading from "../SectionHeading/SectionHeading";
import project1 from "@/public/images/project1.jpg";
import AOS from "aos";
function Blog() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);
  return (
    <>
      <section id="blog" className="mt-10" data-aos="fade-up">
        <SectionHeading title="Blog" subtitle="Latest Posts" />
        <div className="card-wraper grid grid-cols-1 justify-items-center md:grid-cols-2 xl:grid-cols-3 xl:justify-items-center 3xl:grid-cols-4 gap-5 mt-10">
          <div className="dark:bg-color-bg-primary-variant rounded-lg p-3 3xl:p-4 dark:border dark:border-1 dark:border-color-bg-primary-variant dark:hover:bg-transparent hover:transition-all duration-500 bg-color-bg-primary hover:bg-color-bg-primary-variant">
            <Image
              src={project1}
              width={200}
              height={200}
              alt="project"
              className="rounded-lg w-[100%] h-[200px] object-cover"
            />
            <div className="card-text">
              <div className="my-3">
                <p className="font-medium font-sans - serif text-sm sm:text-lg text-text-light 3xl:text-2xl">
                  Lorem ipsum dolor, sit amet consectetur
                </p>
                <span className="text-[10px] flex gap-1 my-2 text-text-light-variant 3xl:text-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-3 h-3 3xl:w-5 3xl:h-5 3xl:mt-1"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
                    />
                  </svg>
                  3 days ago
                </span>
              </div>
              <div className="">
                <button className="lg:py-2 lg:px-4 py-1 px-3 3xl:py-2 3xl:px-5 3xl:text-lg lg:text-md text-sm dark:bg-color-primary rounded-md dark:hover:bg-color-primary-variant transition-all duration-500 text-color-bg-primary hover:bg-color-bg-primary hover:text-text-light-variant bg-text-light">
                  Read More
                </button>
              </div>
            </div>
          </div>
          <div className="dark:bg-color-bg-primary-variant rounded-lg p-3 3xl:p-4 dark:border dark:border-1 dark:border-color-bg-primary-variant dark:hover:bg-transparent hover:transition-all duration-500 bg-color-bg-primary hover:bg-color-bg-primary-variant">
            <Image
              src={project1}
              width={200}
              height={200}
              alt="project"
              className="rounded-lg w-[100%] h-[200px] object-cover"
            />
            <div className="card-text">
              <div className="my-3">
                <p className="font-medium font-sans - serif text-sm sm:text-lg text-text-light 3xl:text-2xl">
                  Lorem ipsum dolor, sit amet consectetur
                </p>
                <span className="text-[10px] flex gap-1 my-2 text-text-light-variant 3xl:text-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-3 h-3 3xl:w-5 3xl:h-5 3xl:mt-1"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
                    />
                  </svg>
                  3 days ago
                </span>
              </div>
              <div className="">
                <button className="lg:py-2 lg:px-4 py-1 px-3 3xl:py-2 3xl:px-5 3xl:text-lg lg:text-md text-sm dark:bg-color-primary rounded-md dark:hover:bg-color-primary-variant transition-all duration-500 text-color-bg-primary hover:bg-color-bg-primary hover:text-text-light-variant bg-text-light">
                  Read More
                </button>
              </div>
            </div>
          </div>
          <div className="dark:bg-color-bg-primary-variant rounded-lg p-3 3xl:p-4 dark:border dark:border-1 dark:border-color-bg-primary-variant dark:hover:bg-transparent hover:transition-all duration-500 bg-color-bg-primary hover:bg-color-bg-primary-variant">
            <Image
              src={project1}
              width={200}
              height={200}
              alt="project"
              className="rounded-lg w-[100%] h-[200px] object-cover"
            />
            <div className="card-text">
              <div className="my-3">
                <p className="font-medium font-sans - serif text-sm sm:text-lg text-text-light 3xl:text-2xl">
                  Lorem ipsum dolor, sit amet consectetur
                </p>
                <span className="text-[10px] flex gap-1 my-2 text-text-light-variant 3xl:text-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-3 h-3 3xl:w-5 3xl:h-5 3xl:mt-1"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
                    />
                  </svg>
                  3 days ago
                </span>
              </div>
              <div className="">
                <button className="lg:py-2 lg:px-4 py-1 px-3 3xl:py-2 3xl:px-5 3xl:text-lg lg:text-md text-sm dark:bg-color-primary rounded-md dark:hover:bg-color-primary-variant transition-all duration-500 text-color-bg-primary hover:bg-color-bg-primary hover:text-text-light-variant bg-text-light">
                  Read More
                </button>
              </div>
            </div>
          </div>
          <div className="dark:bg-color-bg-primary-variant rounded-lg p-3 3xl:p-4 dark:border dark:border-1 dark:border-color-bg-primary-variant dark:hover:bg-transparent hover:transition-all duration-500 bg-color-bg-primary hover:bg-color-bg-primary-variant">
            <Image
              src={project1}
              width={200}
              height={200}
              alt="project"
              className="rounded-lg w-[100%] h-[200px] object-cover"
            />
            <div className="card-text">
              <div className="my-3">
                <p className="font-medium font-sans - serif text-sm sm:text-lg text-text-light 3xl:text-2xl">
                  Lorem ipsum dolor, sit amet consectetur
                </p>
                <span className="text-[10px] flex gap-1 my-2 text-text-light-variant 3xl:text-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-3 h-3 3xl:w-5 3xl:h-5 3xl:mt-1"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
                    />
                  </svg>
                  3 days ago
                </span>
              </div>
              <div className="">
                <button className="lg:py-2 lg:px-4 py-1 px-3 3xl:py-2 3xl:px-5 3xl:text-lg lg:text-md text-sm dark:bg-color-primary rounded-md dark:hover:bg-color-primary-variant transition-all duration-500 text-color-bg-primary hover:bg-color-bg-primary hover:text-text-light-variant bg-text-light">
                  Read More
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Blog;
