import React from "react";

function SectionHeading({ subtitle, title }) {
  return (
    <>
      <div className="text-center ">
        <h3 className="text-sm font-sans - serif font-300 dark:text-text-light text-color-bg-primary font-light 2xl:text-lg 3xl:text-xl">
          {subtitle}
        </h3>
        <h2 className="text-2xl md:my-3 my-1 dark:text-text-light text-color-bg-primary capitalize font-sans - serif font-medium 2xl:text-4xl 3xl:text-5xl">
          {title}
        </h2>
      </div>
    </>
  );
}

export default SectionHeading;
