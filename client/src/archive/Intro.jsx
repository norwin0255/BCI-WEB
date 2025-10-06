// tailwind.config.js

import React, { useState, useEffect } from "react";
const images = [
  "/attachment/pic1.jpg"
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
      <div className="bg-yellow-500 
          text-black font-bold text-sm text-center
          h-full w-full 
          align-center justify-center p-1
          hidden lg:flex ">
        Your one-stop shop for smart, portable cooling. Whether you’re driving cross-country or camping under the stars, we help you stay cool and comfortable the whole way.
      </div>


      <div className="
      flex 
      items-center 
      h-full w-full
      rounded-md 
      overflow-hidden
      bg-gradient-to-r from-blue-200 via-blue-400 to-blue-200
      flex-col md:flex-row">

        {/* <div className="p-8 md:w-1/2 flex flex-col items-center justify-center lg:h-full text-blue-900 lg:text-left text-center"> */}
        {/* <div className="text-3xl lg:text-5xl font-bold uppercase tracking-wide flex">
              𝙆𝙚𝙚𝙥𝙞𝙣𝙜 𝙮𝙤𝙪𝙧 𝘾𝙊𝙊𝙇...
            </div> */}
        {/* <div className="text-7xl font-bold uppercase tracking-wide flex">
              BEST
            </div>
            <div className="text-4xl font-bold uppercase tracking-wide flex">
              𝕔𝕙𝕠𝕚𝕔𝕖 𝕥𝕠
            </div>
            <div className="text-7xl font-bold uppercase tracking-wide flex">
              coolness!
            </div> */}
        {/* </div> */}

        <div className="
          p-8 flex flex-col         
          h-1/2 lg:h-full
          lg:text-left text-center 
          text-4xl lg:text-5xl font-bold uppercase tracking-wide text-blue-900
          outline outline-1 outline-red-500">
          <div className="flex flex-col justify-center h-full w-full">
            <p>𝙆𝙚𝙚𝙥𝙞𝙣𝙜 𝙮𝙤𝙪𝙧 𝘾𝙊𝙊𝙇...</p>
          </div>
        </div>

        <div className="w-full h-1/2 lg:h-full mx-auto">
          <div className="clip-custom-shape flex bg-yellow-500 items-center justify-center -ml-[300px] lg:-ml-[50px] h-full">
            <div className="clip-custom-shape flex flex-col items-center justify-center ml-[10px] h-full right-1">
              <div className="animate-loopRightDouble flex">
                <img
                  src={images[currentIndex]}
                  alt={`Slide ${currentIndex + 1}`}
                  className="flex h-full w-full object-cover md:h-full md:w-full"
                />
                {/* Repeat if needed for smooth loop */}
                <img
                  src={images[currentIndex]}
                  alt={`Slide ${currentIndex + 1}`}
                  className="flex h-full w-full object-cover md:h-full md:w-full"
                />

                <img
                  src={images[currentIndex]}
                  alt={`Slide ${currentIndex + 1}`}
                  className="flex h-full w-full object-cover md:h-full md:w-full"
                />

                <img
                  src={images[currentIndex]}
                  alt={`Slide ${currentIndex + 1}`}
                  className="flex h-full w-full object-cover md:h-full md:w-full"
                />
                <img
                  src={images[currentIndex]}
                  alt={`Slide ${currentIndex + 1}`}
                  className="flex h-full w-full object-cover md:h-full md:w-full"
                />
                <img
                  src={images[currentIndex]}
                  alt={`Slide ${currentIndex + 1}`}
                  className="flex h-full w-full object-cover md:h-full md:w-full"
                />
              </div>
            </div>
          </div>
        </div>



      </div>
    </>
  );
}


