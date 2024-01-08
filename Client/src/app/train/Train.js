import React from "react";
import Booked from "@/app/train/firstone/Booked";
import Offer1 from "@/app/train/firstone/secondOne/Offer1";
import Footer from "@/componets/footer/Footer";
import UserNavbar from "@/app/train/navbar/UserNavbar";
import Navbar from '@/components/Navbar/Navbar'
import Review from "@/componets/review/Review";
export default function Train() {
  return (
    <>
    <div>
    < Navbar />
        <UserNavbar/>
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
          <Booked path={"/TrainList"}/>
        </div>
       <Offer1/>
      </div>
      <Review/>
      <Footer/>
    </>
  );
}