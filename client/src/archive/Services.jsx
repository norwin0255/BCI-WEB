import React, { useState, useEffect } from "react";

export default function Services() {


  const services = [
    "PREVENTIVE MAINTENANCE SERVICE",
    "REFRIGERATION SYSTEM REPAIR",
    "BODY AND COLLISION REPAIR",
    "PRE-COOLING"
  ];



  return (


    <>
      <div className="h-full w-full flex">

        <div className="flex w-full items-center flex flex-col md:flex-row w-full">
          <div className="flex w-full h-full">
            <img
              src="attachment/services.jpg"
              alt=""
              className="object-cover md:w-full h-full">
            </img>
          </div>

          <div className="w-full md:w-1/2 h-full flex p-10">
            <div className="bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 text-white w-full flex h-full opacity-75">
              <div className="flex mx-auto w-full items-top justify-center p-4 grid grid-rows-6 opacity-100
              ">

                <h1 className="w-full flex text-4xl font-bold text-white uppercase tracking-wide row-span-2 row-start-1 items-center justify-center">
                  our services
                </h1>

                {services.map((item, index) => {
                  const gridRow = 3;
                  return (
                    <div className={`row-span-1 row-start-${gridRow + index} grid grid-cols-4 h-full`}>
                      <img src="attachment/logo.png" alt="" className="object-cover h-[50px] mx-auto col-span-1 col-start-1" />
                      <h1 className="text-sm/6 font-bold text-white uppercase tracking-wide col-span-3 col-start-2 p-2 align-middle text-left">
                        {item}
                      </h1>
                    </div>
                  );

                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <button>
          See more Services!
        </button>
      </div>
    </>
  );
}
