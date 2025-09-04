import React, { useState, useEffect } from "react";

const images = [
  "pic1.jpg",
  "pic2.jpg",
  "pic3.jpg",
  "pic4.jpg",
];

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto loop every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Manual navigation
  const goPrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <div className="relative mx-auto h-[500px] w-full bg-[#0C59C3]">
      <img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        className="w-full h-full object-cover"
      />
      <button
        onClick={goPrev}
        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white bg-opacity-0 p-2 rounded-full shadow"
      >
        ◀
      </button>
      <button
        onClick={goNext}
        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white bg-opacity-0 p-2 rounded-full shadow"
      >
        ▶
      </button>
      <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 flex space-x-2 p-2">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`w-3 h-3 rounded-full ${
              idx === currentIndex ? "bg-blue-600" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
