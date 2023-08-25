"use client";
import React, { useEffect } from "react";
import SectionHeading from "../SectionHeading/SectionHeading";
import AOS from "aos";
function Contact() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);
  return (
    <>
      <section id="contact" className="mt-10" data-aos="fade-up">
        <SectionHeading title="Contact Me" subtitle="Get In Touch" />
        <div className="contact-wrap grid grid-cols-1 gap-5 mt-10 md:grid-cols-2">
          <div className="contact-left flex flex-col gap-5 justify-center items-center">
            <div className="bg-color-bg-primary-variant border border-color-bg-primary-variant rounded-xl p-5 flex justify-center flex-col items-center hover:bg-transparent transition-all duration-500 w-[70%] lg:w-[50%]">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6 text-color-primary"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>
              </span>

              <h5 className="font-sans - serif font-500 text-sm my-1">Email</h5>
              <p className="text-[12px] font-sans - serif font-300 text-text-light-variant">
                hammad.sadi@gmail.com
              </p>
            </div>
            <div className="bg-color-bg-primary-variant border border-color-bg-primary-variant rounded-xl p-5 flex justify-center flex-col items-center hover:bg-transparent transition-all duration-500 w-[70%] lg:w-[50%]">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6 text-color-primary"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0l6-6m-3 18c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z"
                  />
                </svg>
              </span>

              <h5 className="font-sans - serif font-500 text-sm my-1">
                WhatsApp
              </h5>
              <p className="text-[12px] font-sans - serif font-300 text-text-light-variant">
                +8801760170010
              </p>
            </div>
            <div className="bg-color-bg-primary-variant border border-color-bg-primary-variant rounded-xl p-5 flex justify-center flex-col items-center hover:bg-transparent transition-all duration-500 w-[70%] lg:w-[50%]">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6 text-color-primary"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
                  />
                </svg>
              </span>

              <h5 className="font-sans - serif font-500 text-sm my-1">
                Messenger
              </h5>
              <p className="text-[12px] font-sans - serif font-300 text-text-light-variant">
                <a href="https://www.facebook.com/sayyidhammadsaadi">
                  Hammad Sadi
                </a>
              </p>
            </div>
          </div>

          <div className="contact-right">
            <div>
              <h3 className="text-md font-sans - serif font-medium text-text-light text-center mb-4">
                FEEL FREE TO DROP ME A LINE
              </h3>
              <p className="text-text-light-variant font-sans - serif font-300 text-sm">
                If you have any suggestion, project or even you want to say
                Hello.. please fill out the form below and I will reply you
                shortly.
              </p>
            </div>
            <div>
              <form action="">
                <div className="mt-4 mb-3">
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    className="w-full border border-text-light-variant bg-transparent py-3 px-4 rounded-xl text-text-light-variant text-xs lg:text-sm focus:outline-none"
                  />
                </div>
                <div className="my-2">
                  <input
                    type="email"
                    name="name"
                    placeholder="Your Email"
                    className="w-full border border-text-light-variant bg-transparent py-3 px-4 rounded-xl text-text-light-variant text-xs  lg:text-sm focus:outline-none"
                  />
                </div>
                <div className="my-2">
                  <textarea
                    name=""
                    id=""
                    cols="30"
                    rows="10"
                    placeholder="Your Message"
                    className="w-full h-24 border border-text-light-variant bg-transparent py-3 px-4 rounded-xl text-text-light-variant text-xs  lg:text-sm focus:outline-none"
                  ></textarea>
                </div>
                <div className="my-2">
                  <button className="btn-primary flex gap-1 text-sm  lg:text-sm">
                    Send Message{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                      />
                    </svg>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
