/* eslint-disable @next/next/no-img-element */
import React from "react";
import logo from "./logo.png";

const Hero = () => {
  return (
    <div className="mt-20 lg:mt-0 min-h-60 sm:min-h-96 xl:min-h-[50vh] w-full px-5 py-10 max-w-screen-md 2xl:max-w-screen-xl 3xl:max-w-screen-2xl mx-auto grid grid-cols-2">
      <div className="flex flex-col gap-4 items-center justify-center text-primary">
        <h1 className="text-primary text-xl">Fire Divini Games</h1>
        <p className=" text-white text-sm italic 2xl:text-center">
          It&apos;s all about stories. Our past, future, and present. Now we
          want to tell our stories - meaningful and unique.
        </p>
      </div>
      <div className="flex justify-center items-center">
        <img src={logo.src} alt="" />
      </div>
    </div>
  );
};

export default Hero;
