
import React, { useState, useEffect } from "react";

export default function ProductsReefer() {

  const portable = [
    ['/attachment/pic1.jpg', 'Reefer Box', 'Details of Reefer Box'],
    ['/attachment/pic2.jpg', 'Air condition', 'Details of Air condition'],
    ['/attachment/pic3.jpg', 'curtain', 'Details of curtain']
  ]

  const rowCount = portable.length;
  // bg-gradient-to-r from-blue-200 via-blue-400 to-blue-200 
  return (
    <>
      <div className="w-full h-[10%] flex items-center justify-center">
        <h1 className="text-3xl font-bold uppercase tracking-wide">
          Portable Aircon Unit
        </h1>
      </div>

      <div className="w-full flex flex-col lg:flex-row">
        <div className="flex w-full">
          <div className="flex mx-auto items-center">
            <img className="lg:scale-75 flex"
              src="/attachment/pic4.jpg" alt="" />
          </div>
        </div>
        <div className="flex w-full p-5 flex-col gap-3">
          {portable.map((portable, index) => (
            <div key={index} className="flex flex-row gap-4" style={{ height: `${100 / rowCount}%` }}>
              <div className="w-[30%] flex">
                <img
                  src={portable[0]}
                  alt=""
                  className="object-fill"
                />
              </div>
              <div className="w-full flex flex-col">
                <h2 className="text-lg font-bold uppercase tracking-wide">
                  {'>'} {portable[1]}
                </h2>
                <h2 className="text-md uppercase tracking-wide">
                  {portable[2]}
                </h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}