import React, { useState, useEffect } from "react";

import Prodreefer from "../components/Prodreefer.jsx";
import ProductsReefer from "../components/ProductsReefer.jsx";
import ProductsPortable from "../components/ProductsPortable.jsx";

const pages = [
  <ProductsReefer />,
  <ProductsPortable />,
];

export default function Products() {
  const [currentPage, setCurrentPage] = useState(0);

  // // Auto loop every 3 seconds
  //   useEffect(() => {
  //     const interval = setInterval(() => {
  //       setCurrentPage((prev) => (prev + 1) % pages.length);
  //     }, 10000);

  //     return () => clearInterval(interval);
  //   }, []);

  return (
    <>
        <div className="
        flex 
        w-full 
        items-center justify-center 
        bg-yellow-500 
        shadow 
        z-10 
        outline outline-1 outline-red-500">
          <h1 className="text-4xl font-bold text-white uppercase tracking-wide">
            our Products
          </h1>
        </div>

        <div className="flex flex-col items-center bg-white w-full h-full">
          {pages[currentPage]}

          <div className="flex flex-row w-full h-full transform justify-center -mt-10 gap-2">
            {pages.map((Page, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index)}
                className={`w-3 h-3 rounded-full ${index === setCurrentPage ? "bg-blue-600" : "bg-gray-300"
                  }`}
              />
            ))}
          </div>
          {/* <div className="relative w-full items-center object-center-left">
          <button
            onClick={prevPage}
            className="px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-900"
          >
            {"<"}
          </button>
          <button
            onClick={nextPage}
            className="px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-900"
          >
            {">"}
          </button>
        </div> */}
        </div>
        
    </>
  );
}
