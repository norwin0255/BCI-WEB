import React, { useState, useEffect } from "react";

export default function AboutUs() {

  return (
    <>
      <div className="flex flex-col w-full h-full 
      bg-gradient-to-r from-blue-200 via-blue-400 to-blue-200 p-8">

        <div className="flex flex-col md:flex-row w-full h-full">
          <div className="w-full items-center justify-center h-full flex-row p-5 text-justify" >
            {/* <div className="flex-col text-2xl font-bold uppercase tracking-wide">Welcome to Bestchill Inc.</div> */}
            <div className="text-3xl font-bold uppercase tracking-wide mt-2">About Us</div>
            <div className="text-lg font-bold mt-4 uppercase tracking-wide mt-2">Your Trusted Partner in Advanced Cooling Solutions</div>
            <div className="text-md uppercase mt-4 text-justify">At Bestchill Inc., we specialize in high-performance, </div>
              <div className="text-md uppercase text-justify">portable cooling systems designed to keep you—and your cargo—cool, safe, </div>
              <div className="text-md uppercase text-justify">and comfortable. Whether you're on the road, at a campsite, or transporting perishable goods, </div>
              <div className="text-md uppercase text-justify">we’ve got you covered.</div>            
          </div>

          
          
        </div>
      </div>
    </>
  );
}
