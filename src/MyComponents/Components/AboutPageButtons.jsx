import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function AboutPageButtons() {
  const [buttonState, setbuttonState] = useState({
    button1: false,
    button2: false,
    button3: false,
  });
  return (
    <div className="w-full my-6">
      <div
        onClick={() =>
          setbuttonState({
            button1: true,
            button2: false,
            button3: false,
          })
        }
        className={`w-full flex flex-col md:flex-row justify-start p-1 my-6 ${
          buttonState.button1
            ? "border rounded-lg bg-white border-gray-200"
            : "bg-gray-200 border shadow-button-shadow-2 rounded-lg hover:bg-opacity-50 hover:shadow-button-shadow-3 hover:border-opacity-0"
        }`}
      >
        <Link
          //   to="/organisationstructure"
          className="text-left text-xl font-bold text-gray-2 w-full pl-4 lg:pl-8 xl:pl-12 py-6 border hover:border-opacity-0"
        >
          <span className="text-red-1 mr-2 lg:mr-4 xl:mr-8">1.</span>{" "}
          ORGANISATION STRUCTURE
        </Link>
      </div>
      <div
        onClick={() =>
          setbuttonState({
            button1: false,
            button2: true,
            button3: false,
          })
        }
        className={`w-full flex flex-col md:flex-row justify-start p-1 my-10 ${
          buttonState.button2
            ? "border rounded-lg bg-white border-gray-200"
            : "bg-gray-200 border shadow-button-shadow-2 rounded-lg hover:bg-opacity-50 hover:shadow-button-shadow-3 hover:border-opacity-0"
        }`}
      >
        <Link
          //   to="/harassementpolicy"
          className="text-left text-xl font-bold text-gray-2 w-full pl-4 lg:pl-8 xl:pl-12 py-6 border hover:border-opacity-0"
        >
          <span className="text-red-1 mr-2 lg:mr-4 xl:mr-8">2.</span> HARASSMENT
          POLICY
        </Link>
      </div>
      <div
        onClick={() =>
          setbuttonState({
            button1: false,
            button2: false,
            button3: true,
          })
        }
        className={`w-full flex flex-col md:flex-row justify-start p-1 my-6 ${
          buttonState.button3
            ? "border rounded-lg bg-white border-gray-200"
            : "bg-gray-200 border shadow-button-shadow-2 rounded-lg hover:bg-opacity-50 hover:shadow-button-shadow-3 hover:border-opacity-0"
        }`}
      >
        <Link
          //   to="/personell"
          className="text-left text-xl font-bold text-gray-2 w-full pl-4 lg:pl-8 xl:pl-12 py-6 border border-gray-200"
        >
          <span className="text-red-1 mr-2 lg:mr-4 xl:mr-8">3.</span> PERSONELL
        </Link>
      </div>
    </div>
  );
}
