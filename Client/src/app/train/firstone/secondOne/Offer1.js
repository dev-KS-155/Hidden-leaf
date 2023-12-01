"use client";
import React, { useState } from "react";
import Card from "@/app/train/firstone/secondOne/Card";
import { Train,Flight,Hotel } from "@/app/train/firstone/secondOne/Menu";
const Offer1 = () => {
  const [a, b] = useState("flex");
  const [x, y] = useState("hidden");
  const [m, n] = useState("hidden");
  let [manish,z]=useState("text-sky-500 duration-300  border-b-2 border-sky-500 cursor-pointer");
  let [rawat,aa]=useState("hover:text-sky-500 duration-300   cursor-pointer");
  let [mohit,bb]=useState("hover:text-sky-500 duration-300   cursor-pointer");
  return (
    <div className="flex flex-col m-8 bg-slate-100 rounded-xl shadow-lg justify-center items-center p-10 gap-6">
      <div className="flex flex-row justify-between mb-4 xl:gap-96 lg:gap-72 md:gap-64 sm:gap-14 gap-3">
        <span className="font-bold text-3xl cursor-pointer "> Offers</span>
        <ul className="  flex flex-row sm:gap-5 md:gap-6 lg:gap-7 gap-3 justify-center items-center font-semibold">
          <li
            className={manish}
            onClick={() => { 
              b("flex");        //b  a
              y("hidden");
              n("hidden");
             z("text-sky-500 duration-300  border-b-2 border-sky-500 cursor-pointer");
             aa("hover:text-sky-500 duration-300   cursor-pointer");
             bb("hover:text-sky-500 duration-300   cursor-pointer");
            }}
          >
            Train
          </li>
          <li
            className={rawat}
            onClick={() => {
              n("flex");       //  n  m
              y("hidden");
              b("hidden");
              aa("text-sky-500 duration-300  border-b-2 border-sky-500 cursor-pointer");
              z("hover:text-sky-500 duration-300   cursor-pointer");
              bb("hover:text-sky-500 duration-300 cursor-pointer");
            }}
          >
            Flight
          </li>
          <li
            className={mohit}
            onClick={() => {
              y("flex");         // y  x
              n("hidden");
              b("hidden");
              bb("text-sky-500 duration-300  border-b-2 border-sky-500 cursor-pointer");
              aa("hover:text-sky-500 duration-300   cursor-pointer");
              z("hover:text-sky-500 duration-300  cursor-pointer");
            }}
          >
            Hotels
          </li>
        </ul>
      </div>
      <div className={a}>
      <div className="flex flex-col md:flex-row justify-center  items-center ">
        {Train.map((a, b) => (
          <Card
            key={b}
            imageSrc={a.imageSrc}
            title={a.title}
            description={a.description}
            expiryDate={a.expiryDate}
          />
        ))}</div></div>
        <div className={x}>
        <div className="flex flex-col md:flex-row justify-center items-center ">
           {Hotel.map((a, b) => (
          <Card
            key={b}
            imageSrc={a.imageSrc}
            title={a.title}
            description={a.description}
            expiryDate={a.expiryDate}
          />
        ))}</div></div>
        <div className={m}> 
        <div className="flex flex-col md:flex-row justify-center items-center ">
          {Flight.map((a, b) => (
          <Card
            key={b}
            imageSrc={a.imageSrc}
            title={a.title}
            description={a.description}
            expiryDate={a.expiryDate}
          />
        ))}</div>
      </div>
    </div>
  );
};

export default Offer1;
