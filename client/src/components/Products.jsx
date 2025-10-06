import React, { useState, useEffect } from "react";

import ProductsReefer from "../components/ProductReefer.jsx";
import ProductsPortable from "../components/ProductsPortable.jsx";

const pages = [
  <ProductsReefer />,
  <ProductsPortable />
];

export default function Products() {
  const [currentPage, setCurrentPage] = useState(0);

  // Auto loop every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPage((prev) => (prev + 1) % pages.length);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
    
      <div className="
      flex flex-col
      items-center 
      h-full w-full
      rounded-md 
      overflow-hidden
      bg-gradient-to-r from-blue-200 via-blue-400 to-blue-200
      ">
        <div className="w-full flex bg-yellow-500 h-1" />

        <div className="w-full h-auto bg-gradient-to-r from-blue-500 via-indigo-900 to-indigo-300 top-0">
          <h1 className="text-4xl font-bold text-white uppercase tracking-wide justify-center flex">
            our Products
          </h1>
        </div>
        <div className="w-full p-5 flex flex-col h-full w-full text-black">
          {pages[currentPage]}

          <div className="flex flex-row w-full h-full transform justify-center gap-2">
            {pages.map((Page, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index)}
                className={`w-3 h-3 rounded-full ${index === setCurrentPage ? "bg-blue-600" : "bg-gray-300"
                  }`}
              />
            ))}
          </div>
        </div>
      </div>
    </>

  );
}
