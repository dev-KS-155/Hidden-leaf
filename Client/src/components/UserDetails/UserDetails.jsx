import React from "react";
import Image from "next/image";
import UserProfile from "../UserProfile/UserProfile";
const UserDetails = () => {
  return (
    <>
      <UserProfile />
      <div
        className="flex justify-center h-screen bg-opacity-70 bg-blur-sm backdrop-blur-sm "
        style={{
          backgroundImage: "url('/images/BackGroundImg.jpg')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="flex items-center p-8 bg-cyan-900 bg-opacity-20 backdrop-blur-md rounded-lg h-4/5 mt-32 ml-80 shadow-2xl shadow-cyan-500/25">
          <div className="px-20">
            <Image
              src="/images/UserDetails.png"
              alt="Profile Image"
              width={250}
              height={50}
            />
          </div>
          <form className="w-full max-w-xl mr-20">
            <div className="grid gap-6 mb-6 md:grid-cols-2">
              <div>
                <label
                  htmlFor="first_name"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  First name
                </label>
                <input
                  type="text"
                  id="first_name"
                  className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="John"
                  value="Kimi no Namai wa"
                  required
                  readOnly
                />
              </div>
              <div>
                <label
                  htmlFor="last_name"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Last name
                </label>
                <input
                  type="text"
                  id="last_name"
                  className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="Doe"
                  required
                  readOnly
                />
              </div>
              <div>
                <label
                  htmlFor="company"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  IRCTC Id
                </label>
                <input
                  type="text"
                  id="company"
                  className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="Flowbite"
                  required
                  readOnly
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Phone number
                </label>
                <input
                  type="tel"
                  id="phone"
                  className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                  placeholder=""
                  pattern="[0-9]{10}}"
                  value="+91-"
                  required
                />
              </div>
            </div>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Email address
              </label>
              <input
                type="email"
                id="email"
                className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                placeholder=""
                required
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                New Password
              </label>
              <input
                type="password"
                id="password"
                className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                placeholder="Enter New password"
                required
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="confirm_password"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Confirm password
              </label>
              <input
                type="password"
                id="confirm_password"
                className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                placeholder="Confirm New Password "
                required
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default UserDetails;
