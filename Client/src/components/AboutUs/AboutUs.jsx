import React from "react";

function AboutUs() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="flex flex-col items-center md:flex-row hover:shadow-lg transition duration-300 ease-in-out transform hover:scale-105 dark:border-gray-700 relative w-96 h-100 md:w-4/5 md:h-80 bg-opacity-50 bg-gradient-to-br from-gray-200 via-gray-100 to-gray-200 backdrop-filter backdrop-blur-md border rounded-lg shadow-lg p-4 md:p-6">
        <img
          className="object-cover w-72 h-72 md:w-60 md:h-88 rounded-l-lg"
          src="/images/AboutUs.jpg"
          alt="image"
        />
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-xl md:text-2xl font-bold tracking-tight text-gray-900">
            Noteworthy technology acquisitions 2021
          </h5>
          <p className="mb-3 font-normal text-sm md:text-base text-gray-700 ">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
