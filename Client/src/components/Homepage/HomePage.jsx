import React from "react";
import Navbar from "@/components/Navbar/Navbar";
import AboutUs from "../AboutUs/AboutUs";
import HomeImage from "../HomeImage/HomeImage";
import Footer from "@/componets/footer/Footer";
import Review from "@/componets/review/Review";
import Text from "./TextArea/Text";

function HomePage() {
  return (
    <>
      <HomeImage />
      <AboutUs />
      <Review />
      <Text />
      <Footer />
    </>
  );
}

export default HomePage;
