// tailwind.config.js

import React, { useState, useEffect } from "react";
const images = [
  "pic1.jpg",
  "pic2.jpg",
  "pic3.jpg",
  "pic4.jpg",
];

export default function Intro() {
  const [currentIndex, setCurrentIndex] = useState(0);
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentIndex((prev) => (prev + 1) % images.length);
  //   }, 3000);

  //   return () => clearInterval(interval);
  // }, []);

  return (
    <>
      <div className="flex flex-col md:flex-row items-center bg-white rounded-md w-full overflow-hidden">
        <div className="flex flex-col md:flex-row w-full ">
          {/* <div className="p-8 w-64">
            <div className="text-2xl font-semibold tracking-wide text-indigo-500 uppercase">Bestchill inc.,</div>
            <p className="mt-2 text-gray-500">
              Your Best Choice to Coolness!
            </p>
          </div> */}
          <div className="p-8 md:w-1/2 w-full flex flex-col items-center justify-center">
            <h1 className="text-3xl font-bold text-indigo-600 uppercase tracking-wide">
              Your Best Choice to Coolness!
            </h1>

          </div>

          <div className="md:w-100% w-full">
            {/* <img
            class="h-48 w-full object-cover md:h-full md:w-48"
            src="/img/building.jpg"
            alt="Modern building architecture"
          /> */}
            <div className="clip-custom-shape flex flex-col items-center justify-center -ml-[130px] right-1">
              <div className="animate-loopRightDouble flex">
                <img
                  src={images[currentIndex]}
                  alt={`Slide ${currentIndex + 1}`}
                  className="h-48 w-full object-cover md:h-48 md:w-full"
                />
                {/* Repeat if needed for smooth loop */}
                <img
                  src={images[currentIndex]}
                  alt={`Slide ${currentIndex + 1}`}
                  className="h-48 w-full object-cover md:h-48 md:w-full"
                />

                <img
                  src={images[currentIndex]}
                  alt={`Slide ${currentIndex + 1}`}
                  className="h-48 w-full object-cover md:h-48 md:w-full"
                />

                <img
                  src={images[currentIndex]}
                  alt={`Slide ${currentIndex + 1}`}
                  className="h-48 w-full object-cover md:h-48 md:w-full"
                />
                <img
                  src={images[currentIndex]}
                  alt={`Slide ${currentIndex + 1}`}
                  className="h-48 w-full object-cover md:h-48 md:w-full"
                />
                <img
                  src={images[currentIndex]}
                  alt={`Slide ${currentIndex + 1}`}
                  className="h-48 w-full object-cover md:h-48 md:w-full"
                />
              </div>
            </div>
          </div>
        </div>



      </div>


    </>
  );
}


