import Item from "./Item";
import { ADDRESS, COMPANY, CONTACT } from "./Menus";
const ItemsContainer = () => {
  // grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:px-8 px-5 py-16 justify-around  align-middle
  return (
    <div className=" flex flex-col gap-y-10 p-5 sm:flex-row sm:justify-between sm:p-8">
       <div className="pe-10 flex flex-col gap-3 justify-center align-middle">
          <h1 className="mb-1 font-semibold text-[20px]"> Free to give your suggestion</h1>
          <div className="flex flex-col gap-3">
            <input
              type="text"
              placeholder="Enter Your E-mail"
              className=" bg-slate-600 dark:text-white
           sm:w-72 !w-full sm:mr-5 mr-1 lg:mb-0 mb-4 py-2.5 rounded px-2 focus:ring-blue-500 focus:border-blue-500"
            />
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium "
            >
               Your Suggestion
            </label>
            <textarea
              id="message"
              rows="3"
              className="block p-2.5 w-full text-sm text-black-900 bg-white-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 bg-slate-600 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 "
              placeholder="Write your suggestion here..."
            ></textarea>
            <button
              className="bg-teal-300  hover:bg-teal-500 duration-300 px-5 py-2.5 font-[Poppins]
           rounded-md text-white md:w-auto "
            >
              Submit
            </button>
          </div>
          </div>
      <Item Links={COMPANY} title="OUR PARTNERS" />
      <Item Links={ADDRESS} title="ADDRESS" />
      <Item Links={CONTACT} title="CONTACT" />
    </div>
  );
};
export default ItemsContainer;