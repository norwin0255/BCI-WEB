// tailwind.config.js

import{ useState} from "react";
const images = [
  "/attachment/pic1.jpg"
];

export default function Intro() {
  const [currentIndex] = useState(0);

  return (
    <>


      <div className="
      flex 
      items-center 
      h-full w-full
      overflow-hidden
      bg-gradient-to-r from-blue-500 via-indigo-900 to-indigo-300
      lg:flex-row flex-col">
       
        <div className="w-[60%] p-8 flex h-1/2 lg:h-full lg:text-left text-center text-4xl lg:text-5xl font-bold uppercase tracking-wide text-blue-900">
          <div className="flex items-center justify-center flex-col">
            {/* <p>𝙆𝙚𝙚𝙥𝙞𝙣𝙜 𝙮𝙤𝙪𝙧 𝘾𝙊𝙊𝙇...</p> */}
            {/* <p>𝕂𝕖𝕖𝕡𝕚𝕟𝕘 𝕐𝕠𝕦𝕣 ℂ𝕠𝕠𝕝</p> */}

            <p className="w-full flex text-5xl font-semibold tracking-tight text-balance text-blue-300 subpixel-antialiased text-stroke sm:text-7xl">Keeping</p>
            <p className="w-full flex text-3xl font-semibold tracking-tight text-balance text-blue-300 subpixel-antialiased text-stroke sm:text-7xl">Your Cool...</p>
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


