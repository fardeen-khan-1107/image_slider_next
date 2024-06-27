"use client";
import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
// import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';
// import { transform } from "next/dist/build/swc";

const Slideshow = () => {
  const images = [
    "assets/images/Image1.jpg",
    "assets/images/Image2.jpg",
    "assets/images/Image3.jpg",
    "assets/images/Image4.jpg",
    "assets/images/Image5.jpg",
  ];

  const slideProperties = {
    duration: 2000,
    transitionDuration: 1000,
    infinite: true,
  };

  return (
    <div className="relative w-11/12 h-[60vh] mt-10 mx-auto">
      <Slide {...slideProperties}>
        {images.map((each, index) => (
          <div key={index} className="relative w-full h-full px-10">
            <div className="absolute inset-0 mx-10 h-full bg-gradient-to-r from-red-900 to-transparent opacity-90 z-20 rounded-5"></div>
            <div className="absolute inset-y-0 left-0 flex flex-col justify-center p-8 z-30">
              <h1 className="text-4xl md:text-6xl m-10 font-bold text-white mb-4">Hello, Nik</h1>
              <p className="text-xl md:text-2xl font-bold m-10 text-white">"Everything you can imagine is real."</p>
            </div>
            <img
              className="w-full h-[60vh] object-cover rounded-md"
              src={each}
              alt={`Slide ${index + 1}`}
            />
          </div>
        ))}
      </Slide>
      <div className="absolute top-1/2 transform -translate-y-1/2 left-0 z-30 rounded-full ml-10">
        {/* <ChevronLeftIcon className="h-12 w-12 cursor-pointer text-black" /> */}
      </div>
      <div className="absolute top-1/2 transform -translate-y-1/2 right-0 z-30 rounded-full mr-10">
        {/* <ChevronRightIcon className="h-12 w-12 cursor-pointer text-black" /> */}
      </div>
    </div>
  );
};

export default Slideshow;
