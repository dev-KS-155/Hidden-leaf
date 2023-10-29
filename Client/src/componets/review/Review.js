import React from "react";
import { Helper } from "@/componets/review/Helper";
import ReviewCard from "@/componets/review/ReviewCard";
import ProgressHelper from "@/componets/review/ProgressHelper";
import Image from "next/image";
import myImage from "../../assest/blue-star-15592.png";
export default function Review() {
  return (
    <div className="flex flex-col py-7 bg-slate-200">
      <h1 className="font-bold mb-12 text-center text-5xl">
        What do<span className=" text-cyan-500 px-2">people think</span>about us
      </h1>
      <div className="flex sm:flex-row flex-col sm:justify-around ">
        <div className="flex flex-col sm:justify-around ">
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-3xl mb-2 font-bold"> Rating and Reviews</h1>
            <p className="px-4 text-center">
              Rating and reviews are verified and are form people who use the
              same device
            </p>
          </div>
          <div className="flex flex-row justify-center lg:gap-8 xl:gap-10 gap-6">
            <div className="flex flex-col justify-center items-center">
              <span className=" text-8xl">4.0</span>
              <div className="flex flex-row justify-center items-center px-3">
                <Image
                  src={myImage}
                  alt="My Image"
                  className="h-[1rem] w-[1rem] cursor-pointer"
                />
                <Image
                  src={myImage}
                  alt="My Image"
                  className="h-[1rem] w-[1rem] cursor-pointer"
                />
                <Image
                  src={myImage}
                  alt="My Image"
                  className="h-[1rem] w-[1rem] cursor-pointer"
                />
                <Image
                  src={myImage}
                  alt="My Image"
                  className="h-[1rem] w-[1rem] cursor-pointer"
                />
              </div>
              <span className="mt-2 text-indigo-950">47,599,425</span>
            </div>
            <ProgressHelper />
          </div>
          <div className="form-group flex flex-col justify-center items-center px-5 ">
            <label
              htmlFor="message"
              className="block mb-2 text-lg font-medium "
            >
              Your Review
            </label>
            <textarea
              id="message"
              rows="4"
              className="block p-2.5  w-[16rem] h-[8rem]  md:w-[20rem] md:h-[10rem] lg:w-[30rem] lg:h-[10rem] sm:w-[18rem] dark:placeholder:text-black sm:h-[10rem] text-sm text-black-900 bg-slate-100 rounded-lg border border-gray-300 resize hover:border-2 hover:border-neutral-800 mb-3 focus:border-2 focus:border-neutral-500 hover:shadow-xl duration-300"
              placeholder="Write your suggestion here..."
            ></textarea>
            <button
              className="duration-300 px-5 py-2.5 font-[Poppins]
           rounded-md text-white md:w-auto bg-sky-500 hover:bg-sky-600 "
            >
              Submit
            </button>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          {Helper.map((review, index) => (
            <ReviewCard key={index} {...review} />
          ))}
        </div>
      </div>
    </div>
  );
}
