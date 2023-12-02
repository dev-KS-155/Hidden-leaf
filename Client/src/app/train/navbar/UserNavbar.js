"use client"
import React ,{useState,useEffect} from "react";
import Image from "next/image";
import {
  FaTrain,
  FaPlane,
  FaBus,
  FaHotel,
  FaGift,
  FaRegCreditCard,
  FaDolly,
} from "react-icons/fa";
import myImage from "@/assest/bg.jpg";
export default function UserNavbar(){

const [a, b] = useState("blue-600"); const [x, y] = useState("white");
const [m, n] = useState("white");  const [c, d] = useState("white");
const [u, v] = useState("white"); const [r, s] = useState("white");
const [h, l] = useState("white");
  return( 
    <>
    <div className=" pt-14">
      <Image
        src={myImage}
        alt="My Image"
        className="cursor-pointer object-cover w-screen h-52"/>
      <div className="-mt-6 pb-4 ">
        <div className=" bg-slate-100 shadow-lg rounded-2xl m-6 justify-evenly md:hidden">
          <ul className="flex flex-row justify-evenly -mt-5 pb-5 ">
          <li className={`m-2 flex flex-col justify-center items-center border-b-[6px] border-${a}`}onClick={()=>{b("blue-600");
            y("white");d("white"); v("white"); s("white"); n("white");l("white")}}>
              <FaTrain
                color="orange"
                size={50}
                className={`rounded-full border-4 border-white p-1 cursor-pointer bg-yellow-100 border-${a}`}
              />
              <h1 className="font-bold mt-2 cursor-pointer" >Trains</h1>{" "}
            </li>
            <li className={`m-2 flex flex-col justify-center items-center border-b-[6px] border-${a}`}onClick={ () => {b("blue-600");
            y("white");d("white"); v("white"); s("white"); n("white")}}>
              <FaPlane
                color="blue"
                size={50}
                className={`rounded-full border-4 border-white p-1 cursor-pointer bg-yellow-100 border-${x}`}
              />
              <h1 className="font-bold mt-2 cursor-pointer" >Flights</h1>{" "}
            </li>
      <li className={`m-2 flex flex-col justify-center items-center border-b-[6px] border-${a}`}onClick={()=>{b("blue-600");
            y("white");d("white"); v("white"); s("white"); n("white");l("white")}}>
              <FaHotel
                color="red"
                size={50}
                className={`rounded-full border-4 border-white p-1 cursor-pointer bg-yellow-100 border-${m}`} />
              <h1 className="font-bold mt-2 cursor-pointer">Hotels</h1>{" "}
            </li>
           
            <li className={`m-2 flex flex-col justify-center items-center border-b-[6px] border-${a}`}onClick={()=>{b("blue-600");
            y("white");d("white"); v("white"); s("white"); n("white");l("white")}}>
              <FaBus
                color="teal"
                size={50}
                className=" rounded-full border-4 border-white p-1 cursor-pointer bg-lime-200"
              />
              <h1 className="font-bold mt-2 cursor-pointer">Cab</h1>{" "}
            </li>
          </ul>
        </div>
        <div className="flex flex-row  bg-slate-100 rounded-xl shadow-lg justify-evenly m-6 p-3 md:hidden">
          <li className={`m-2 flex flex-col justify-center items-center border-b-[6px] border-${a}`}onClick={()=>{b("blue-600");
            y("white");d("white"); v("white"); s("white"); n("white");l("white")}}>
            <FaGift color="red" size={30} className="cursor-pointer " />
            <h1 className="font-semibold mt-2 text-center cursor-pointer">Gift </h1>{" "}
          </li>
          <li className={`m-2 flex flex-col justify-center items-center border-b-[6px] border-${a}`}onClick={()=>{b("blue-600");
            y("white");d("white"); v("white"); s("white"); n("white")}}>
            <FaRegCreditCard
              color="orange"
              size={30}
              className="cursor-pointer "
            />
            <h1 className="font-semibold mt-2 text-center">Train PNR</h1>{" "}
          </li>
          <li className={`m-2 flex flex-col justify-center items-center border-b-[6px] border-${a}`}onClick={()=>{b("blue-600");
            y("white");d("white"); v("white"); s("white"); n("white");l("white")}}>
            <FaDolly color="green" size={30} className="cursor-pointer " />
            <h1 className="font-semibold sm:mt-2 text-center cursor-pointer border-b-[6px] border-white">Forex Card</h1>{" "}
          </li>
        </div>

                                            {/* big devices */}

        <div className="md:block hidden bg-slate-100 shadow-xl rounded-2xl m-6 justify-evenly">
          <ul className="flex flex-row justify-evenly -mt-5 ">
          <li className={`m-2 flex flex-col justify-center items-center duration-300 hover:border-blue-500 border-b-[6px] border-${a}`}onClick={()=>{b("blue-600");
                y("white");d("white"); v("white"); s("white");n("white");l("white")}}>
              <FaTrain
                color="orange"
                size={50}
                className={`rounded-full border-4 border-${a} p-1 cursor-pointer duration-300 hover:border-blue-500 bg-sky-200`}
           />
              <h1 className="font-bold mt-2 cursor-pointer">Trains</h1>{" "}
            </li>
            <li className={`m-2 flex flex-col justify-center items-center border-b-[6px] border-${x} duration-300 hover:border-blue-500`}onClick={()=>{b("white");
                y("blue-600");d("white"); v("white"); s("white");n("white");l("white")}}>
              <FaPlane
                color="blue"
                size={50}
                className={`duration-300 hover:border-blue-500 rounded-full border-4 border-${x} p-1 cursor-pointer bg-sky-200`}
                 />
              <h1 className="font-bold mt-2 cursor-pointer">Flights</h1>{" "}
            </li>
            <li className={`m-2 flex flex-col justify-center items-center border-b-[6px] border-${m} duration-300 hover:border-blue-500 `}onClick={()=>{b("white");
                y("white");d("white"); v("white"); s("white");n("blue-600");l("white")}}>
              <FaHotel
                color="red"
                size={50}
                className={`duration-300 hover:border-blue-500 rounded-full border-4 border-${m} p-1 cursor-pointer bg-sky-200`}
                 />
              <h1 className="font-bold mt-2 cursor-pointer">Hotels</h1>{" "}
            </li>
          
            <li className={`m-2 flex flex-col justify-center items-center border-b-[6px] border-${u} hover:border-b-blue-500 `}onClick={()=>{b("white");
                y("white");d("white"); v("blue-600"); s("white");n("white");l("white")}}>
              <FaBus
                color="teal"
                size={50}
                className={`duration-300 hover:border-blue-500 rounded-full border-4 border-${u} p-1 cursor-pointer bg-sky-200`}
              />
              <h1 className="font-bold mt-2 cursor-pointer">Cab</h1>{" "}
            </li>
            <li className={`m-2 flex flex-col justify-center items-center border-b-[6px] border-${r} duration-300 hover:border-blue-500`}onClick={()=>{b("white");
                y("white");d("white"); v("white"); s("blue-600");n("white");l("white")}}>
              <FaGift
                color="red"
                size={50}
                className={`duration-300 hover:border-blue-500 rounded-full border-4 border-${r} p-1 cursor-pointer bg-sky-200`}
              />
              <h1 className="font-semibold mt-2 text-center cursor-pointer">Gift </h1>{" "}
            </li>
            <li className={`m-2 flex flex-col justify-center items-center border-b-[6px] border-${c} duration-300 hover:border-blue-500`}onClick={()=>{b("white");
                y("white");d("blue-600"); v("white"); s("white");n("white");l("white")}}>
              <FaRegCreditCard
                color="orange"
                size={50}
                className={`duration-300 hover:border-blue-500 rounded-full border-4 border-${c} p-1 cursor-pointer bg-sky-200`}
              />
              <h1 className="font-semibold mt-2 text-center cursor-pointer">Train PNR</h1>{" "}
            </li>
            <li className={`m-2 flex flex-col justify-center items-center border-b-[6px] border-${h} duration-300 hover:border-blue-500`}onClick={()=>{b("white");
                y("white");d("white"); v("white"); s("white");n("white");l("blue-600")}}>
              <FaDolly
                color="green"
                size={50}
                className={ `duration-300 hover:border-blue-500 rounded-full border-4 border-${h} p-1 cursor-pointer bg-sky-200`}
              />
        <h1 className="font-semibold mt-2 text-center cursor-pointer">Forex Card</h1>
            </li>
          </ul>
        </div>
        </div>
        </div>
    </>
  );
}