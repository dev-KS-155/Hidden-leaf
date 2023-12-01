import React from "react";
import ItemsContainer from "./ItemsContainer";
import SocialIcons from "@/componets/footer/SocialIcons";
import { Icons } from '@/componets/footer/Menus';
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white flex flex-col">
      <ItemsContainer />
      <hr className=" m-5"/>
      <div className="flex flex-col items-center gap-y-5 p-4" >
        <div className=" flex flex-col my-5 sm:flex-row gap-x-2 items-center">
          <span className="font-bold inline my-3">Let's get social</span>
          <div>
         <SocialIcons/>
          </div>
        </div>
        <div>
        <span>© 2020 Appy. All rights reserved. Terms · Privacy Policy</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
