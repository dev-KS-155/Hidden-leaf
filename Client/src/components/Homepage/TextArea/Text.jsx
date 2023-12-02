"use client"

import { useRouter } from "next/navigation";

const Text = () => {
  const router = useRouter();

  const Login = () => {
    router.push("/Login");
  };
  return (
    <div className="flex flex-col items-center justify-center m-20">
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">
        Login to Enter Main Webpage
      </h1>
      <button
        type="button"
        onClick={Login}
        className="bg-blue-500 text-white font-semibold px-6 py-3 rounded-md mt-6 transition duration-300 hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
      >
        Login / Signup
      </button>
    </div>
  );
};

export default Text;
