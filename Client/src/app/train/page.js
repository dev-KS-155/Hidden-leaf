import React from "react";
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
import Booked from "@/app/train/firstone/Booked";
import Offer1 from "@/app/train/firstone/secondOne/Offer1";
import Footer from "@/componets/footer/Footer";

export default function Train() {
  return (
    <>
      <Image
        src={myImage}
        alt="My Image"
        className="cursor-pointer object-cover w-screen h-52"
      />
      <div className="-mt-6 bg-slate-200  pb-4 ">
        <div className="border-2 bg-slate-100 rounded-3xl m-6 justify-evenly md:hidden">
          <ul className="flex flex-row justify-evenly -mt-5 pb-5 ">
            <li className="m-2 flex flex-col justify-center items-center ">
              <FaPlane
                color="blue"
                size={50}
                className=" rounded-full border-4 border-white p-1 bg-sky-200 cursor-pointer "
              />
              <h1 className="font-bold mt-2">Flights</h1>{" "}
            </li>
            <li className="m-2 flex flex-col justify-center items-center">
              <FaHotel
                color="red"
                size={50}
                className=" rounded-full border-4 border-white p-1 cursor-pointer bg-red-300"
              />
              <h1 className="font-bold mt-2">Hotels</h1>{" "}
            </li>
            <li className="m-2 flex flex-col justify-center items-center">
              <FaTrain
                color="orange"
                size={50}
                className=" rounded-full border-4 border-white p-1 cursor-pointer bg-yellow-100"
              />
              <h1 className="font-bold mt-2">Trains</h1>{" "}
            </li>
            <li className="m-2 flex flex-col justify-center items-center">
              <FaBus
                color="teal"
                size={50}
                className=" rounded-full border-4 border-white p-1 cursor-pointer bg-lime-200"
              />
              <h1 className="font-bold mt-2">Cab</h1>{" "}
            </li>
          </ul>
        </div>
        <div className="flex flex-row border-2 bg-slate-100 rounded-3xl justify-evenly m-6 p-3 md:hidden">
          <li className="m-2 flex flex-col justify-center items-center w-1/3">
            <FaGift color="red" size={30} className="cursor-pointer " />
            <h1 className="font-semibold mt-2 text-center">Gift </h1>{" "}
          </li>
          <li className="m-2 flex flex-col justify-center items-center w-1/3">
            <FaRegCreditCard
              color="orange"
              size={30}
              className="cursor-pointer "
            />
            <h1 className="font-semibold mt-2 text-center">Train PNR</h1>{" "}
          </li>
          <li className="m-2 flex flex-col justify-center items-center w-1/3">
            <FaDolly color="green" size={30} className="cursor-pointer " />
            <h1 className="font-semibold sm:mt-2 text-center">Forex Card</h1>{" "}
          </li>
        </div>
        {/* big devices */}
        <div className="md:block hidden bg-slate-100 border-2 rounded-3xl m-6 justify-evenly">
          <ul className="flex flex-row justify-evenly -mt-5 pb-5  ">
            <li className="m-2 flex flex-col justify-center items-center ">
              <FaPlane
                color="blue"
                size={50}
                className=" rounded-full border-4 border-white p-1 bg-sky-200 cursor-pointer "
              />
              <h1 className="font-bold mt-2">Flights</h1>{" "}
            </li>
            <li className="m-2 flex flex-col justify-center items-center">
              <FaHotel
                color="red"
                size={50}
                className=" rounded-full border-4 border-white p-1 cursor-pointer bg-sky-200"
              />
              <h1 className="font-bold mt-2">Hotels</h1>{" "}
            </li>
            <li className="m-2 flex flex-col justify-center items-center">
              <FaTrain
                color="orange"
                size={50}
                className=" rounded-full border-4 border-white p-1 cursor-pointer bg-sky-200"
              />
              <h1 className="font-bold mt-2">Trains</h1>{" "}
            </li>
            <li className="m-2 flex flex-col justify-center items-center">
              <FaBus
                color="teal"
                size={50}
                className=" rounded-full border-4 border-white p-1 cursor-pointer bg-sky-200"
              />
              <h1 className="font-bold mt-2">Cab</h1>{" "}
            </li>
            <li className="m-2 flex flex-col justify-center items-center">
              <FaGift
                color="red"
                size={50}
                className="cursor-pointer rounded-full border-4 border-white p-1 bg-sky-200  "
              />
              <h1 className="font-semibold mt-2 text-center">Gift </h1>{" "}
            </li>
            <li className="m-2 flex flex-col justify-center items-center">
              <FaRegCreditCard
                color="orange"
                size={50}
                className="rounded-full border-4 border-white p-1 bg-sky-200  cursor-pointer "
              />
              <h1 className="font-semibold mt-2 text-center">Train PNR</h1>{" "}
            </li>
            <li className="m-2 flex flex-col justify-center items-center">
              <FaDolly
                color="green"
                size={50}
                className="rounded-full border-4 border-white p-1 bg-sky-200  cursor-pointer "
              />
              <h1 className="font-semibold mt-2 text-center">Forex Card</h1>{" "}
            </li>
          </ul>
        </div>
        {/* Search */}
        <div className=" bg-slate-100 shadow-lg m-8 p-4 flex flex-col rounded-xl">
          <div className="flex flex-row gap-5">
            <div className="flex flex-row justify-center items-center border-1 rounded-lg bg-sky-300 hover:bg-sky-400 p-1 duration-300">
              <input type="checkbox" defaultChecked={true} />
              <label
                htmlFor="message"
                className="block text-sm font-medium mx-2 text-center"
              >
                Book Train Ticket
              </label>
            </div>
          </div>
          <Booked />
        </div>
        <Offer1/>
      </div>
      <Footer/>
    </>
  );
}