import React from "react";
import { Link } from "react-router-dom";

const Mobilenav = ({ open, setOpen }) => {
  return (
    <>
      <div
        className={`z-40 absolute ${
          open
            ? "transition-all opacity-100 duration-500 transform scale-x-100 origin-right"
            : "transition-all opacity-0 duration-500 transform scale-x-0 origin-right"
        }`}
      >
        <div className="h-screen w-screen flex flex-row">
          <div className="sm:w-1/2 md:w-2/3 h-auto bg-red-1 bg-opacity-50"></div>
          <div className="w-full sm:w-1/2 md:w-1/3 bg-gray-3">
            <nav className="list-none text-lg">
              <li className="border-b-2 border-gray-1 hover:border-white text-white">
                <div
                  onClick={() => setOpen(false)}
                  className="border-l-8 py-1.5 pl-6 border-opacity-0 hover:border-opacity-100 hover:bg-black"
                >
                  Services
                </div>
              </li>
              <li className="border-b-2 border-gray-1 hover:border-white text-white">
                <div
                  onClick={() => setOpen(false)}
                  className="border-l-8 py-1.5 pl-6 border-opacity-0 hover:border-opacity-100 hover:bg-black"
                >
                  Services
                </div>
              </li>
              <li className="border-b-2 border-gray-1 hover:border-white text-white">
                <div
                  onClick={() => setOpen(false)}
                  className="border-l-8 py-1.5 pl-6 border-opacity-0 hover:border-opacity-100 hover:bg-black"
                >
                  Services
                </div>
              </li>
              <li className="border-b-2 border-gray-1 hover:border-white text-white">
                <div
                  onClick={() => setOpen(false)}
                  className="border-l-8 py-1.5 pl-6 border-opacity-0 hover:border-opacity-100 hover:bg-black"
                >
                  Services
                </div>
              </li>
              <li className="border-b-2 border-gray-1 hover:border-white text-white">
                <div
                  onClick={() => setOpen(false)}
                  className="border-l-8 py-1.5 pl-6 border-opacity-0 hover:border-opacity-100 hover:bg-black"
                >
                  Services
                </div>
              </li>
              <li className="border-b-2 border-gray-1 hover:border-white text-white">
                <div
                  onClick={() => setOpen(false)}
                  className="border-l-8 py-1.5 pl-6 border-opacity-0 hover:border-opacity-100 hover:bg-black"
                >
                  Services
                </div>
              </li>
            </nav>

            <nav className="list-none text-lg mt-8">
              <li className="border-b-2 border-gray-1 text-white">
                <div
                  onClick={() => setOpen(false)}
                  className="border-l-8 py-1.5 pl-3 border-opacity-0"
                >
                  Portals
                </div>
              </li>
              <li className="border-b-2 border-gray-1 hover:border-white text-white">
                <div
                  onClick={() => setOpen(false)}
                  className="border-l-8 py-1.5 pl-6 border-opacity-0 hover:border-opacity-100 hover:bg-black"
                >
                  Services
                </div>
              </li>
              <li className="border-b-2 border-gray-1 hover:border-white text-white">
                <div
                  onClick={() => setOpen(false)}
                  className="border-l-8 py-1.5 pl-6 border-opacity-0 hover:border-opacity-100 hover:bg-black"
                >
                  Services
                </div>
              </li>
              <li className="border-b-2 border-gray-1 hover:border-white text-white">
                <div
                  onClick={() => setOpen(false)}
                  className="border-l-8 py-1.5 pl-6 border-opacity-0 hover:border-opacity-100 hover:bg-black"
                >
                  Services
                </div>
              </li>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};
export default Mobilenav;
