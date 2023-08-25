"use client";
import React, { useState } from "react";

function Nav() {
  const [isActive, setIsActive] = useState("nav-active");
  return (
    <>
      <nav className="flex gap-4 justify-center items-center bg-color-bg-primary-variant backdrop-blur-lg py-2 px-3 3xl:py-4 3xl:px-5 rounded-3xl fixed left-1/2 bottom-4 translate-x-[-50%] lg:left-16 lg:flex-col lg:top-1/2 lg:translate-y-[-50%] w-fit lg:h-fit z-50">
        <a
          href="#header"
          className={`text-text-light block lg:inline-block transition-all duration-500 p-2 3xl:p-4 rounded-[50%] dark:hover:bg-color-primary-variant hover:bg-color-bg-primary ${
            isActive === "header" ? "nav-active" : ""
          }`}
          onClick={() => setIsActive("header")}
          title="Home"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-5 h-5 3xl:w-8 3xl:h-8"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
            />
          </svg>
        </a>
        <a
          href="#about"
          className={`text-text-light block lg:inline-block transition-all duration-500 p-2 3xl:p-4 rounded-[50%] dark:hover:bg-color-primary-variant hover:bg-color-bg-primary ${
            isActive === "about" ? "nav-active" : ""
          }`}
          onClick={() => setIsActive("about")}
          title="About"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-5 h-5 3xl:w-8 3xl:h-8"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
            />
          </svg>
        </a>
        <a
          href="#skills"
          className={`text-text-light block lg:inline-block transition-all duration-500 p-2 3xl:p-4 rounded-[50%] dark:hover:bg-color-primary-variant hover:bg-color-bg-primary ${
            isActive === "skills" ? "nav-active" : ""
          }`}
          onClick={() => setIsActive("skills")}
          title="Skills"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-5 h-5 3xl:w-8 3xl:h-8"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
            />
          </svg>
        </a>
        <a
          href="#portfolio"
          className={`text-text-light block lg:inline-block transition-all duration-500 p-2 3xl:p-4 rounded-[50%] dark:hover:bg-color-primary-variant hover:bg-color-bg-primary ${
            isActive === "portfolio" ? "nav-active" : ""
          }`}
          onClick={() => setIsActive("portfolio")}
          title="Portfolio"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-5 h-5 3xl:w-8 3xl:h-8"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"
            />
          </svg>
        </a>
        <a
          href="#blog"
          className={`text-text-light block lg:inline-block transition-all duration-500 p-2 3xl:p-4 rounded-[50%] dark:hover:bg-color-primary-variant hover:bg-color-bg-primary ${
            isActive === "blog" ? "nav-active" : ""
          }`}
          onClick={() => setIsActive("blog")}
          title="Blog"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-5 h-5 3xl:w-8 3xl:h-8"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
            />
          </svg>
        </a>
        <a
          href="#contact"
          className={`text-text-light block lg:inline-block transition-all duration-500 p-2 3xl:p-4 rounded-[50%] dark:hover:bg-color-primary-variant hover:bg-color-bg-primary ${
            isActive === "contact" ? "nav-active" : ""
          }`}
          onClick={() => setIsActive("contact")}
          title="Contact"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-5 h-5 3xl:w-8 3xl:h-8"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21.75 9v.906a2.25 2.25 0 01-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 001.183 1.981l6.478 3.488m8.839 2.51l-4.66-2.51m0 0l-1.023-.55a2.25 2.25 0 00-2.134 0l-1.022.55m0 0l-4.661 2.51m16.5 1.615a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V8.844a2.25 2.25 0 011.183-1.98l7.5-4.04a2.25 2.25 0 012.134 0l7.5 4.04a2.25 2.25 0 011.183 1.98V19.5z"
            />
          </svg>
        </a>
      </nav>
    </>
  );
}

export default Nav;

// w-fit flex gap-4 justify-center items-center bg-color-bg-primary-variant backdrop-blur-lg py-2 px-3 rounded-3xl fixed bottom-4 left-1/2 translate-x-[-50%]

// w-fit flex flex-col gap-4 justify-center items-center bg-color-bg-primary-variant backdrop-blur-lg py-2 px-3 rounded-3xl fixed top-1/2 left-4 translate-y-[-50%]
