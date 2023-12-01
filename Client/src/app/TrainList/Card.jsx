"use client";
import React, { useState } from "react";
import Slider from "react-slick";
import { FaBed } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "@/app/TrainList/TimePass.css";
export const Card = ({ data }) => {
  const [a, b] = useState("hidden");
  const [c, d] = useState("hidden");
  const settings = {
    dots: false,
    infinite: false,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    prevArrow: <div className="slick-arrow slick-prev"></div>,
    nextArrow: <div className="slick-arrow slick-next"></div>,
    slideCount: data.length,
  };
  return (
    <>
      <div className=" border-2 border-gray-500 rounded-xl my-10 p-6 bg-white flex flex-col gap-4">
        <div className="flex justify-between flex-col lg:flex-row gap-3 lg:gap-0">
          <div className=" flex flex-col">
            <h1 className="text-xl font-bold ">Train Name</h1>
            <div className=" flex flex-row gap-2">
              <div className="flex flex-row gap-2 items-center">
                <h1 className=" text-xl"># 82503</h1>
                <span className=" text-3xl"> | </span>
              </div>
              <div className=" flex flex-col">
                <h1 className="">Departs on :</h1>
                <h1 className="text-lime-600 text-xs">S M T W T F S </h1>
              </div>
            </div>
          </div>
          <div className=" flex flex-col ">
            <h1 className="text-md font-semibold ">Starting time </h1>
            <h1>Railway Station Name</h1>
          </div>
          <div className=" flex flex-col justify-items-center ">
            <div className=" flex flex-row justify-items-center">
              <span className="  text-slate-500 font-bold"> ---- </span>
              <span className="mx-2 font-semibold"> Time </span>
              <span className=" text-slate-500 font-bold"> ----</span>
            </div>
            <h1
              className=" text-blue-400 cursor-pointer hover:text-blue-600 font-bold text-center"
              onClick={() => {
                b("flex");
              }}
            >
              View route{" "}
            </h1>
          </div>
          <div className=" flex flex-col ">
            <h1 className="text-md font-semibold ">Starting time </h1>
            <h1>Railway Station Name</h1>
          </div>
        </div>
        <div className="block max-h-[200px] overflow-hidden rounded-xl my-3">
          <Slider {...settings}>
            {data.map((item, index) => (
              <>
                <div
                  className="bg-slate-200 rounded-lg mr-[20px] h-[130px] w-[220px] overflow-hidden   p-3 cursor-pointer "
                  onClick={() => {
                    d("flex");
                  }}
                  key={index}
                >
                  <div className="flex flex-col justify-between">
                    <div className="flex flex-row justify-around mb-4">
                      <div className="flex flex-row justify-center items-center gap-2">
                        <FaBed color="violet" />
                        <h1 className=" text-lg">{item.CName}</h1>
                      </div>
                      <h1 className="text-lg ">&#8377; {item.Amount}</h1>
                    </div>
                    <h1 className=" text-center">Free Cancelation</h1>
                    <div className=" flex justify-center items-center">
                    <button className="border border-blue-900 bg-blue-200 rounded-lg px-2 hover:bg-blue-300 duration-300">
                        {" "}
                        try it{" "}
                      </button>
                    </div>
                  </div>
                </div>
              </>
            ))}
          </Slider>
        </div>
      </div>

      <div className={`fixed inset-0 bg-gray-900 bg-opacity-50 z-50 ${a}`}>
        <div className=" absolute p-3 bg-slate-50 top-1/4 sm:left-[23%] sm:right-[23%] lg:left-[28%] lg:right-[28%] xl:left-[33%] xl:right-[33%] left-[18%] right-[18%] bottom-1/3 rounded-xl shadow-lg shadow-slate-400">
          <div className="flex flex-row justify-between ">
            <div className="flex flex-row">
              <h1 className="text-xl font-bold mr-1 sm:mr-2 ">Train Name </h1>
              <h1 className=" pt-[2px]"> / 82502</h1>
            </div>
            <svg
              className="h-6 w-6 text-gray-900 font-bold cursor-pointer pt-[4px] rounded-full bg-blue-400 hover:bg-blue-500 duration-300 "
              xmlns="http://www.w3 org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
              onClick={() => {
                b("hidden");
              }}
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />{" "}
            </svg>
          </div>
        </div>
      </div>
      <div className={`fixed inset-0 bg-gray-900 bg-opacity-50 z-[1000] ${c}`}>
        <div
          className={` absolute flex flex-col bg-slate-50 top-[30%] left-[30%] right-[30%] shadow-lg shadow-slate-400 rounded-xl pb-2 pl-3 pr-3 pt-2`}
        >
          <div className="flex justify-end mb-2 ">
            <svg
              className="h-6 w-6 text-gray-900 font-bold cursor-pointer pt-[4px] rounded-full bg-blue-400 hover:bg-blue-500 duration-300 "
              xmlns="http://www.w3 org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
              onClick={() => {
                d("hidden");
              }}
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />{" "}
            </svg>
          </div>
          <div className="my-3">
            <hr className="p-2 text-black font-bold" />
            <div className=" flex flex-row justify-between ">
              <div className="flex flex-row gap-2">
                <h1>Day ,</h1>
                <h1>Date</h1>
              </div>
              <h1 className=" text-red-400">Train ____</h1>
              <div className="flex flex-row gap-6 justify-center items-center">
                <h1 className="text-center"> &#8377; price</h1>
                <button className="border border-blue-900 bg-blue-200 rounded-lg px-2 hover:bg-blue-300 duration-300">
                  Book
                </button>
              </div>
            </div>
            <hr className="p-2 text-black font-bold" />
          </div>
        </div>
      </div>
    </>
  );
};
