"use client";
import React, { useEffect } from "react";
import SectionHeading from "../SectionHeading/SectionHeading";
import Image from "next/image";
import project1 from "@/public/images/project1.jpg";
import AOS from "aos";
import Slider from "react-slick";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "black",
        borderRadius: "50%",
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "black",
        borderRadius: "50%",
      }}
      onClick={onClick}
    />
  );
}

function Portfolio() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  const portfolio = [
    {
      id: 1,
      projectTitle: "Wolmart E-commerce",
      frondEndDesc:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam suscipit pariatur quis, commodi, repudiandae porro voluptas nobis provident quod optio eaque illo eligendi fuga modi tempore illum voluptates vel veritatis",
      backEndDesc:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam suscipit pariatur quis, commodi, repudiandae porro voluptas nobis provident quod optio eaque illo eligendi fuga modi tempore illum voluptates vel veritatis",
      projectFuturesDesc:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam suscipit pariatur quis, commodi, repudiandae porro voluptas nobis provident quod optio eaque illo eligendi fuga modi tempore illum voluptates vel veritatis",
      photo: project1,
      futureOne:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam suscipit pariatur quis",
      futureTwo:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam suscipit pariatur quis",
      futurethree:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam suscipit pariatur quis",
      futureFour:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam suscipit pariatur quis",
      liveSite: "#",
      clientCode: "#",
      serverCode: "#",
    },
    {
      id: 1,
      projectTitle: "Wolmart E-commerce",
      frondEndDesc:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam suscipit pariatur quis, commodi, repudiandae porro voluptas nobis provident quod optio eaque illo eligendi fuga modi tempore illum voluptates vel veritatis",
      backEndDesc:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam suscipit pariatur quis, commodi, repudiandae porro voluptas nobis provident quod optio eaque illo eligendi fuga modi tempore illum voluptates vel veritatis",
      projectFuturesDesc:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam suscipit pariatur quis, commodi, repudiandae porro voluptas nobis provident quod optio eaque illo eligendi fuga modi tempore illum voluptates vel veritatis",
      photo: project1,
      futureOne:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam suscipit pariatur quis",
      futureTwo:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam suscipit pariatur quis",
      futurethree:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam suscipit pariatur quis",
      futureFour:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam suscipit pariatur quis",
      liveSite: "#",
      clientCode: "#",
      serverCode: "#",
    },
  ];

  let settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <section id="portfolio" className="mt-10" data-aos="fade-up">
        <SectionHeading title="Portfolio" subtitle="My Recent Work" />
        <div className="port-folio mt-10 grid grid-cols-1 gap-5">
          <Slider {...settings}>
            {portfolio.map((item, index) => {
              return (
                <>
                  <div className="dark:bg-color-bg-primary-variant rounded-xl dark:border dark:border-color-bg-primary-variant dark:hover:bg-transparent bg-color-bg-primary hover:bg-color-bg-primary-variant grid lg:grid-cols-2 lg:items-center gap-5 3xl:gap-8 p-3">
                    <div className="left bg-red-600">
                      <Image
                        src={item.photo}
                        width="{100}"
                        height="{100}"
                        className="w-[100%] h-[200px] lg:h-[300px] 3xl:h-[450px] object-cover"
                        alt="project"
                      />
                    </div>
                    <div>
                      <h3 className="text-md font-sans - serif font-medium text-text-light 2xl:text-lg 3xl:text-3xl">
                        {item.projectTitle}
                      </h3>
                      <ul>
                        <li className="flex mt-2 3xl:mt-4">
                          <div>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke-width="1.5"
                              stroke="currentColor"
                              class="w-5 h-5 inline dark:text-color-primary-variant text-text-light-variant"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M4.5 12.75l6 6 9-13.5"
                              />
                            </svg>
                            <span className="mx-1 text-text-light-variant font-sans - serif font-300 text-sm 2xl:text-[16px] 3xl:text-2xl font-medium">
                              Frontend:
                            </span>
                            <p className="text-text-light-variant font-sans - serif font-300 text-sm 2xl:text-[16px] 3xl:text-2xl">
                              {item.frondEndDesc}
                            </p>
                          </div>
                        </li>
                        <li className="flex mt-2 3xl:mt-4">
                          <div>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke-width="1.5"
                              stroke="currentColor"
                              class="w-5 h-5 inline dark:text-color-primary-variant text-text-light-variant"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M4.5 12.75l6 6 9-13.5"
                              />
                            </svg>
                            <span className="mx-1 text-text-light-variant font-sans - serif font-300 text-sm 2xl:text-[16px] 3xl:text-2xl font-medium">
                              Backend:
                            </span>
                            <p className="text-text-light-variant font-sans - serif font-300 text-sm 2xl:text-[16px] 3xl:text-2xl">
                              {item.backEndDesc}
                            </p>
                          </div>
                        </li>
                      </ul>

                      <h3 className="mt-2 3xl:mt-4 text-md font-sans - serif font-medium text-text-light 2xl:text-lg 3xl:text-3xl">
                        Project Futures
                      </h3>
                      <ul>
                        <li className="flex mt-2">
                          <div className="">
                            <ul>
                              <li className="flex mt-2">
                                <div className="ml-5">
                                  <ul className="list-disc list-outside text-justify flex flex-col gap-1 2xl:gap-2">
                                    {item.futureOne && (
                                      <li className="text-text-light-variant font-sans - serif font-300 text-sm 2xl:text-[16px] 3xl:text-2xl">
                                        {item.futureOne}
                                      </li>
                                    )}{" "}
                                    {item.futureTwo && (
                                      <li className="text-text-light-variant font-sans - serif font-300 text-sm 2xl:text-[16px] 3xl:text-2xl">
                                        {item.futureTwo}
                                      </li>
                                    )}{" "}
                                    {item.futurethree && (
                                      <li className="text-text-light-variant font-sans - serif font-300 text-sm 2xl:text-[16px] 3xl:text-2xl">
                                        {item.futurethree}
                                      </li>
                                    )}{" "}
                                    {item.futureFour && (
                                      <li className="text-text-light-variant font-sans - serif font-300 text-sm 2xl:text-[16px] 3xl:text-2xl">
                                        {item.futureFour}
                                      </li>
                                    )}
                                  </ul>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </li>
                      </ul>

                      <div className="flex flex-wrap justify-center gap-5 mt-4">
                        <a href="{item.liveSite}" className="flex gap-1">
                          <span className=" dark:text-color-primary-variant text-text-light-variant font-sans - serif font-300 text-xs sm:text-sm 2xl:text-[16px] 3xl:text-2xl">
                            Live Site
                          </span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            class="w-3 h-3 sm:w-4 sm:h-4 2xl:w-5 2xl:h-5 3xl:w-7 3xl:h-7 text-color-primary-variant "
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                            />
                          </svg>
                        </a>
                        <a href="{item.clientCode}" className="flex gap-1">
                          <span className=" dark:text-color-primary-variant text-text-light-variant font-sans - serif font-300 text-xs sm:text-sm 2xl:text-[16px] 3xl:text-2xl">
                            Client Code
                          </span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            class="w-3 h-3 sm:w-4 sm:h-4 2xl:w-5 2xl:h-5 3xl:w-7 3xl:h-7 text-color-primary-variant t"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                            />
                          </svg>
                        </a>
                        <a href="{item.serverCode}" className="flex gap-1">
                          <span className=" dark:text-color-primary-variant text-text-light-variant font-sans - serif font-300 text-xs sm:text-sm 2xl:text-[16px] 3xl:text-2xl">
                            Server Code
                          </span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            class="w-3 h-3 sm:w-4 sm:h-4 2xl:w-5 2xl:h-5 3xl:w-7 3xl:h-7 text-color-primary-variant"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                            />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </Slider>
        </div>
      </section>
    </>
  );
}

export default Portfolio;
