import React from "react";
import { useSelector } from "react-redux";
import Imagehelper from "../../helpers/ImageHelper";
import quotes from "./../../argus website/SVG/Appostrophies square.svg";
import medal from "./../../argus website/SVG/Medal.svg";
import SideLine from "./SideLine";

const EmployeeMonth = () => {
  const emp = useSelector((state) => state.eom.eom);
  return (
    <div>
      <img src={medal} alt="" className="w-52 h-52 mr-auto -mb-52" />
      <div className="px-4 sm:px-8 md:px-20 lg:px-32 xl:px-48 py-16 bg-cover bg-no-repeat bg-empofmon font-for-para">
        <div className="flex flex-wrap items-center">
          <div className="md:px-12 w-full md:w-1/2 flex flex-col items-start">
            <div className="flex flex-row items-stretch w-full mt-8 md:mt-0 mb-8">
              <SideLine />
              <h1 className="leading-tight text-3xl lg:text-4xl font-bold text-gray-3">
                Employee of the <br />
                Month
              </h1>
            </div>
            <p className="leading-loose text-l text-gray-2 mb-8">
              <span className="text-red-1 text-2xl font-semibold">
                {emp?.empName}{" "}
              </span>
              {emp?.empDesc}
            </p>
            <ul className="text-gray-2 font-medium text-lg">
              <li className="py-1">
                <span className="text-red-1 font-bold mr-2">✓ </span>
                {emp?.skills[0].split(",")[0]}
              </li>
              <li className="py-1">
                <span className="text-red-1 font-bold mr-2">✓</span>
                {emp?.skills[0].split(",")[1]}
              </li>
              <li className="py-1">
                <span className="text-red-1 font-bold mr-2">✓</span>
                {emp?.skills[0].split(",")[2]}
              </li>
            </ul>
            <div>
              {emp?._id ? (
                <>
                  <div className="px-2 py-2 mx-auto">
                    <div className="w-full text-left">
                      <img
                        src={quotes}
                        alt=""
                        className="w-8 inline-block text-red-1 ml-4 -mb-4"
                      />
                      <p className="leading-normal text-xl font-medium text-gray-2 bg-gray-200 px-12 py-6 shadow-lg mb-8 min-h-full">
                        {emp.description}
                      </p>
                      <div className="pt-6 flex items-center ">
                        <div className="w-20 h-20 p-1 border-2 border-red-1">
                          <Imagehelper
                            param="eom"
                            id={`instructorImage-${emp._id}`}
                          />
                        </div>

                        <div className="ml-8">
                          <div className="w-60">
                            <Imagehelper
                              param="eom"
                              id={`instructorSign-${emp._id}`}
                            />
                          </div>
                          <p className="text-gray-3 font-medium text-xl py-0.5">
                            {emp.instructorName}
                          </p>
                          <p className="text-gray-2 font-medium">
                            {emp.instructorRole}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              ) : null}
            </div>
          </div>
          <div className="items-end w-full md:w-1/2 lg:pl-12">
            <div className="w-full h-full">
              {emp?._id !== undefined ? (
                <>
                  <Imagehelper
                    param="eom"
                    id={`empImage-${emp._id}`}
                    className=""
                  />
                </>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeMonth;
