"use client"
import { BookDate } from "@/app/train/firstone/BookDate";
import {Class} from "@/app/train/firstone/Class";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import {TrainSearch} from "@/app/train/firstone/TrainSearch()";
import React, { useState } from "react";
import "react-calendar/dist/Calendar.css";
import Link from 'next/link';

export default function Booked() {
  const [kartik,setkartik]=useState('');
  const[krishna,setkrishna]=useState('');
  const [date, setDate] = useState(new Date());
 const [selectedClass, setSelectedClass]=useState('All class');
  return (
    <div className="">
    <div className="sticky border-2 border-gray-400 rounded-lg md:flex  md:flex-row my-16 mx-4 md:pl-0 bg-slate-100 gap-2 md:gap-0 shadow-xl shadow-slate-300">
    <div className="flex flex-col pl-2 justify-center md:border-r-2 rounded-l-lg md:border-slate-300 w-[35%] pb-2 px-1 hover:bg-sky-100">
    <h1 className="p-2 text-2xl sm:text-1xl md:2xl font-semibold m-2">From</h1>
    <TrainSearch men={kartik} women={setkartik}/>
      </div>
      <div className="flex flex-col pl-2 justify-center md:border-r-2 md:border-slate-300 w-[35%] pb-2 hover:bg-sky-100">
        <h1 className="p-2 text-2xl sm:text-1xl md:2xl font-semibold">To</h1>
        <TrainSearch men={krishna} women={setkrishna} />
      </div>
      <div className="flex flex-col md:flex-row w-[30%] ">
        <div className="flex md:flex-col sm:flex-row pt-2 pl-2 flex-col hover:bg-sky-100" style={{ width:'-webkit-fill-available'}}>
          <div className="flex flex-row cursor-pointer mr-3 md:mr-0">
            <h1 className="font-semibold">Travel Date</h1>
            <ChevronDownIcon
              className="-mr-1 h-5 w-5 text-gray-500 ml-2"
              aria-hidden="true"
            />
          </div>
          <BookDate
            date={date} 
          setDate={setDate}
           />
        </div>
        <div className="md:border-l-2 md:border-slate-300 pl-2 hover:bg-sky-100 rounded-r-lg" style={{ width:'-webkit-fill-available'}}>
          <Class selectedClass={selectedClass} setSelectedClass={setSelectedClass} />
        </div>
      </div> </div>
      <div className="flex justify-center items-center ">

                   {/* for serach  */}

      <button className=" bg-blue-500 hover:bg-blue-600 rounded-3xl sm:w-[12rem] w-fit p-3 text-xl duration-300 font-bold border-2 border-slate-400"  onClick={()=>{}} >
      <Link href="/TrainList">
      Search
</Link>
        </button>
    </div>
    </div>
  );
}
