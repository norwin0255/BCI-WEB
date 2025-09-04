// tailwind.config.js

import React, { useState, useEffect } from "react";
const images = [
  "pic1.jpg",
  "pic2.jpg",
  "pic3.jpg",
  "pic4.jpg",
];

export default function Fst() {
  const [currentIndex, setCurrentIndex] = useState(0);


  return (
    <div className="relative mx-auto h-[400px] w-full bg-[#0C59C3]">
      <div className="relative items-center">
        <div className="relative mx-auto">
          <span className="text-4xl font-semibold text-white">BESTCHILL INC.,</span>
        </div>
        <div className="relative mx-auto">
          <span className="text-3xl font-semibold mx-auto text-white">Your Best Choice to Coolness!</span>
        </div>
      </div>

      <div className="clip-custom-shape -mt-20 mx-auto h-[450px] w-[800px] right-0 absolute">
        {/* <div className="relative overflow-hidden w-full h-[500px]"> */}
        <div className="flex animate-loopRightDouble w-max">
          <img
            src={images[currentIndex]}
            alt={`Slide ${currentIndex + 1}`}
            className="w-full h-full object-cover"
          />
          {/* Repeat if needed for smooth loop */}
          <img
            src={images[currentIndex]}
            alt={`Slide ${currentIndex + 1}`}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}


