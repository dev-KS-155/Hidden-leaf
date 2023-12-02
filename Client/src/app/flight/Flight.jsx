import React from "react";
import Booked from "@/app/train/firstone/Booked";
import Offer1 from "@/app/train/firstone/secondOne/Offer1";
import Footer from "@/componets/footer/Footer";
import UserNavbar from "@/app/train/navbar/UserNavbar";
import Navbar from '@/components/Navbar/Navbar'
import ImageSlider from '@/app/flight/ImageSlider';
import Review from "@/componets/review/Review";

export default function Train() {
  return (
    <>
    {/* <div> */}
    < Navbar />
      <UserNavbar />
      <ImageSlider/>
      <Booked path={"/Seats"}/>
      <Offer1/>
      <Review/>
      <Footer/> 
    </>
  );
}