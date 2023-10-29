import Image from "next/image";
import myImage from "../../assest/star1.png";
import avtar from "../../assest/man.png";
const ReviewCard = ({ name, rating, review }) => {
  return (
    <>
      <div className=" m-3 w-[17rem] h-[10rem] md:w-[20rem] md:h-[9rem] lg:w-[30rem] lg:h-[9rem] sm:w-[18rem] sm:h-[9rem] flex flex-col justify-center items-center bg-slate-100 p-6 rounded-lg shadow-lg cursor-pointer hover:border-2 hover:border-slate-900 duration-300">
        <div className="flex flex-row justify-center items-center mb-3 ">
        <Image
              src={avtar}
              alt="My Image"
              className="h-[1.5rem] w-[1.5rem] mr-2" 
            />
            <h1 className=" border-2 border-stone-400 hover:border-stone-600 duration-300 rounded-lg shadow-lg p-1">example@gmail.com</h1>
        </div>
        <div className="flex flex-row gap-7">
        <div className="flex flex-col justify-center ">
          <h2 className=" font-semibold text-md text-center">{name}</h2>
          <div className="flex flex-row justify-center items-center px-3">
            <Image
              src={myImage}
              alt="My Image"
              className="h-[1rem] w-[1rem] "
            />
            <Image
              src={myImage}
              alt="My Image"
              className="h-[1rem] w-[1rem] "
            />
            <Image
              src={myImage}
              alt="My Image"
              className="h-[1rem] w-[1rem] "
            />
            <Image
              src={myImage}
              alt="My Image"
              className="h-[1rem] w-[1rem] "
            />
            <Image
              src={myImage}
              alt="My Image"
              className="h-[1rem] w-[1rem] "
            />
          </div>
        </div>
        <p className="text-gray-700 flex justify-center items-center hover:border-2 hover:border-gray-400 duration-300 hover:rounded-lg p-1">
          {review}
        </p>
      </div></div>
    </>
  );
};
export default ReviewCard;
