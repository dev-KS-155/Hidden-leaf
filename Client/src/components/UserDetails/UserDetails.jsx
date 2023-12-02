"use client";

import React, { useEffect } from "react";
import UserProfile from "../UserProfile/UserProfile";
import "./UserDetails.css";

const UserDetails = () => {

  useEffect(() => {
    const downloadButton = document.querySelector(`.download-button`);
    const downloadIcon = document.querySelector(`.download-icon`);
    const downloadLoader = document.querySelector(`.download-loader`);
    const downloadCheckMark = document.querySelector(`.check-svg`);
    const downloadText = document.querySelector(`.button-copy`);

    const handleButtonClick = () => {
      downloadIcon.classList.add(`hidden`);
      downloadLoader.classList.remove(`hidden`);
      downloadText.innerHTML = "SAVING";
    };

    const handleAnimationEnd = () => {
      downloadLoader.classList.add(`hidden`);
      downloadCheckMark.classList.remove(`hidden`);
      downloadText.innerHTML = "SAVED";
    };

    downloadButton.addEventListener("click", handleButtonClick, { once: true });
    downloadLoader.addEventListener("animationend", handleAnimationEnd);

    return () => {
      downloadButton.removeEventListener("click", handleButtonClick);
      downloadLoader.removeEventListener("animationend", handleAnimationEnd);
    };
  }, []);
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-slate-200 via-slate-300 to-slate-700">
      <UserProfile />
      <div className="mt-5 md:mt-0 md:col-span-2 max-w-3xl w-full ml-40">
        <form className="bg-opacity-90 backdrop-blur-md overflow-hidden sm:rounded-md bg-transparent p-8 ">
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Basic Details</h2>
            <div className="grid grid-cols-6 gap-6">
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="name"
                  className="block text-md font-semibold text-gray-700"
                >
                  Name
                </label>
                <input
                  id="name"
                  className="mt-1 block w-full py-2 px-3 border-b-2 border-black bg-transparent shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 transition-transform transform duration-300 hover:scale-110 text-xl"
                  value="Uzumaki Naruto"
                  disabled
                />
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="email"
                  className="block text-md font-semibold text-gray-700"
                >
                  Email
                </label>
                <div className="flex items-center">
                  <input
                    id="email"
                    value="Konoha@flame.com"
                    disabled
                    className="mt-1 block w-full py-2 px-3 border-b-2 border-black bg-transparent shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500  transition-transform transform duration-300 hover:scale-105 text-xl"
                  />
                  <button className="bg-indigo-500 text-white px-4 py-2 rounded-md ml-4 hover:bg-indigo-600 focus:outline-none focus:ring focus:border-indigo-700 transition-all duration-300">
                    Verify
                  </button>
                </div>
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="phone"
                  className="block text-md font-semibold text-gray-700"
                >
                  Phone Number
                </label>
                <div className="flex items-center">
                  <input
                    id="email"
                    placeholder="8925627113"
                    className="mt-1 block w-full py-2 px-3 border-b-2 border-black bg-transparent shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition-transform transform duration-300 hover:scale-105"
                  />
                  <button className="bg-indigo-500 text-white px-4 py-2 rounded-md ml-4 hover:bg-indigo-600 focus:outline-none focus:ring focus:border-indigo-700 transition-all duration-300">
                    Verify
                  </button>
                </div>
              </div>
              <div className="col-span-6">
                <label
                  htmlFor="phone"
                  className="block text-md font-semibold text-gray-700"
                >
                  IRCTC ID
                </label>
                <input
                  id="phone"
                  placeholder="1w33E"
                  className="mt-1 block w-full py-2 px-3 border-b-2 border-black bg-transparent shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition-transform transform duration-300 hover:scale-105"
                />
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Credentials</h2>
            <div className="grid grid-cols-6 gap-6">
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="new_password"
                  className="block text-md font-semibold text-gray-700"
                >
                  New Password
                </label>
                <input
                  id="new_password"
                  type="password"
                  className="mt-1 block w-full py-2 px-3 border border-black bg-transparent rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition-transform transform duration-300 hover:scale-105"
                />
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="confirm_password"
                  className="block text-md font-semibold text-gray-700"
                >
                  Confirm Password
                </label>
                <input
                  id="confirm_password"
                  type="password"
                  className="mt-1 block w-full py-2 px-3 border border-black bg-transparent rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition-transform transform duration-300 hover:scale-105"
                />
              </div>
            </div>
          </div>

          <button className="download-button transform active:scale-95 hover:scale-[110%] text-black px-16 py-6 rounded-lg font-bold tracking-widest ml-96 transition-all duration-300">
            <div className="flex justify-center items-center relative">
              <div className="svg-container text-black">
                <svg
                  className="download-icon text-black"
                  width={18}
                  height={22}
                  viewBox="0 0 18 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    className="download-arrow"
                    d="M13 9L9 13M9 13L5 9M9 13V1"
                    stroke="#F2F2F2"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M1 17V18C1 18.7956 1.31607 19.5587 1.87868 20.1213C2.44129 20.6839 3.20435 21 4 21H14C14.7956 21 15.5587 20.6839 16.1213 20.1213C16.6839 19.5587 17 18.7956 17 18V17"
                    stroke="#F2F2F2"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <div className="download-loader text-black hidden" />
                <svg
                  className="check-svg hidden"
                  width={20}
                  height={20}
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20ZM15.1071 7.9071C15.4976 7.51658 15.4976 6.88341 15.1071 6.49289C14.7165 6.10237 14.0834 6.10237 13.6929 6.49289L8.68568 11.5001L7.10707 9.92146C6.71655 9.53094 6.08338 9.53094 5.69286 9.92146C5.30233 10.312 5.30233 10.9452 5.69286 11.3357L7.97857 13.6214C8.3691 14.0119 9.00226 14.0119 9.39279 13.6214L15.1071 7.9071Z"
                    fill="white"
                  />
                </svg>
              </div>
              <div className="button-copy pl-2 leading-none uppercase">
                SAVE
              </div>
            </div>
          </button>
        </form>
      </div>
    </div>
  );
};

export default UserDetails;
