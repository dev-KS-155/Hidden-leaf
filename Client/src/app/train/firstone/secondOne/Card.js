import React from 'react';
import Image from 'next/image';
export default function Card({ imageSrc, title, description, expiryDate }) {
  return (
    <div className=" m-4 rounded-xl shadow-xl p-3 flex flex-col md:flex-row w-full md:w-2/3 lg:w-1/2 xl:w-1/3 h-full bg-slate-200">
      <div className="flex flex-col w-full md:w-2/4 lg:w-3/4">    
        <Image   
          src={imageSrc} alt=" NETWORK ISSEUES" 
          width="10" height="10"
          className="cursor-pointer object-cover w-full rounded-t-lg md:rounded-t-lg h-64 md:h-full"
 />
        <h1 className="rounded-b-lg bg-sky-300 text-white text-center py-2 md:py-1 xl:py-2 ">{expiryDate}</h1>
        <span className="font-medium text-slate-600 text-center mt-2">T&C's Apply</span>
  </div>
      <div className="flex flex-col items-center lg:gap-6 lg:pt-4">
          <h1 className="font-bold cursor-pointer text-xl md:text-sm lg:text-lg mt-2 md:mt-0 text-center m-2">{title}</h1>
          <h1 className="font-medium text-slate-600 block text-center ">{description}</h1>
        <button className="bg-blue-500 hover:bg-blue-600 text-white rounded-md p-2 w-fit text-center mt-3">Book Now</button>
      </div> 
    </div>
  );
}

  
