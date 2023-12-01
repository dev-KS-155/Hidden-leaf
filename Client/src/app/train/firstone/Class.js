 "use client";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export const Class=({selectedClass, setSelectedClass})=> {

  const classOptions = ["All Class", "Sleeper Class", "Third AC", "Second AC", "First AC"];
  const handleClassSelection = (className) => {
    setSelectedClass(className);
  };
  return (
    <Menu as="div" className="relative inline-block">
      <div>
        <Menu.Button className="flex md:flex-col sm:flex-row flex-col mr-2 ">
          <div className="flex flex-row justify-center items-center pt-2 ">
            <h1 className="font-semibold mr-2">Class</h1>
            <ChevronDownIcon
              className="-mr-1 h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
          </div>
          <h1 className="text-2xl sm:text-1xl md:2xl font-semibold">
            {selectedClass}
          </h1>
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            {classOptions.map((className, index) => (
              <Menu.Item key={index}>
                {({ active }) => (
                  <h1
                    className={classNames(
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                      "block px-4 py-2 text-sm cursor-pointer"
                    )}
                    onClick={() => handleClassSelection(className)}
                  >
                    {className}
                  </h1>
                )}
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}