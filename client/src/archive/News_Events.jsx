import React, { useState, useEffect } from "react";

export default function News_Events() {

  return (
    <>
      <div className="flex flex-col md:flex-col w-full bg-gradient-to-r from-blue-200 via-blue-400 to-blue-200 text-black">
        <div className="flex mx-auto w-full items-center justify-center p-4">
          <h1 className="text-3xl font-bold uppercase tracking-wide">NEWS & EVENTS</h1>
        </div>

        <div className="flex flex-col md:flex-row w-full h-[500px]">
          <div className="w-full items-center md:w-1/3 h-full flex-row p-10" >
            <div className="w-full md:h-1/2 flex h-full bg-blue-300 top-0">
              <img src="attachment/pic1.jpg" alt="" className="flex mx-auto w-full" />
            </div>
            <div className="w-full md:h-1/2 flex h-full bg-gray-200">
              <h3>
                event 1
              </h3>
            </div>
          </div>
          <div className="w-full items-center md:w-1/3 h-full flex-row p-10" >
            <div className="w-full md:h-1/2 flex h-full bg-blue-300 top-0">
              <img src="attachment/pic3.jpg" alt="" className="flex mx-auto w-full" />
            </div>
            <div className="w-full md:h-1/2 flex h-full bg-gray-300">
              <h3>
                event 2
              </h3>
            </div>
          </div>
          <div className="w-full items-center md:w-1/3 h-full flex-row p-10" >
            <div className="w-full md:h-1/2 flex h-full bg-white-300 top-0">
              <img src="attachment/pic4.jpg" alt="" className="flex mx-auto w-full" />
            </div>
            <div className="w-full md:h-1/2 flex h-full bg-gray-200">
              <h3>
                event 3
              </h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
