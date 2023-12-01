import React from "react";
import img from "../../../public/images/HomeImage.jpg";
import Image from "next/image";

const HomeImage = () => {
  return (
    <>
      <div className="w-full h-0 pb-[40%] relative mt-10">
        <Image
          src={img}
          alt="IMAGE"
          className="w-full h-full object-cover absolute top-0 left-0"
        />
        <div className="flex bg-gradient-to-r from-gray-950 w-full h-0 object-cover absolute top-0 left-0 text-white pb-[40%]">
          <div className="m-9 my-32 font-extrabold text-[6vw] relative">
            <div className="">
              <h1>Welcome</h1>
              <h1>To</h1>
              <h1>Inisdious</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeImage;
