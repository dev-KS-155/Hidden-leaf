"use client"
import React, { useState } from 'react';
import AnimatedShapes from './AnimatedShapes';

const images = [
  'https://picsum.photos/800/600?random=1',
  'https://picsum.photos/800/600?random=2',
  'https://picsum.photos/800/600?random=3',
];

const ImageSlider = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className=" sticky flex flex-row items-center justify-evenly">
      <AnimatedShapes />
      <div className=" sticky text-center mb-8">
        <h1 className="text-4xl bg-gradient-to-bl font-bold mb-4">
          WEL<span className="text-red-600">COME</span> TO
        </h1>
        <h1 className="text-6xl font-extrabold">
          Hid<span className="text-cyan-500">den</span> -Leaf Fam
          <span className="text-cyan-500">ily</span>
        </h1>
      </div>

      <div className="max-w-xl relative">
        <img src={images[currentImage]} alt={`slide-${currentImage}`} className="w-full h-auto sticky" />
        <div className="absolute top-1/2 left-4 transform -translate-y-1/2">
          <button
            onClick={prevImage}
            className="text-black  bg-transparent rounded-full p-4 focus:outline-none font-extrabold text-xl duration-300 hover:bg-sky-600"
          >
            &lt;
          </button>
        </div>
        <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
          <button
            onClick={nextImage}
            className="text-black  bg-transparent rounded-full p-4 focus:outline-none duration-300 hover:bg-sky-600"
          >
            &gt;
          </button>
        </div>
      </div>
      <AnimatedShapes />
    </div>
  );
};

export default ImageSlider;

