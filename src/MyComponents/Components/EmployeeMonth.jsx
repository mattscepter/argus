import React from "react";
import { useSelector } from "react-redux";
import Imagehelper from "../../helpers/ImageHelper";
import quotes from "./../../argus website/SVG/Appostrophies square.svg";
import medal from "./../../argus website/SVG/Medal.svg";
import SideLine from "./SideLine";

const EmployeeMonth = () => {
  const emp = useSelector((state) => state.eom.eom);
  return (
    <div className="bg-cover bg-no-repeat bg-empofmon font-for-para overflow-hidden">
      <img src={medal} alt="" className="w-52 h-52 mr-auto -mb-52" />
      <div className="px-4 sm:px-8 lg:px-12 2xl:px-0 mx-auto max-w-1366 pt-16">
        <div className="flex flex-row items-stretch w-full mt-8 md:mt-0 mb-8">
          <SideLine />
          <h1 className="leading-tight text-3xl lg:text-4xl font-bold text-gray-3">
            Employee of the <br />
            Month
          </h1>
        </div>
        <div className="flex flex-col-reverse md:flex-row items-center md:items-end md:justify-between">
          <div className="w-full md:w-1/2 flex flex-col items-start mt-6 md:mt-0">
            <p className="leading-loose text-lg text-gray-2 mb-8">
              <span className="text-red-1 text-2xl font-semibold">
                {emp?.empName}{" "}
              </span>
              {emp?.empDesc}
            </p>
            {emp?.skills[0].split(",")[0].length !== 0 ? (
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
            ) : null}
            <div>
              {emp?._id ? (
                <>
                  <div className="px-2 py-2">
                    <div className="w-full text-left">
                      {emp.description ? (
                        <>
                          {" "}
                          <img
                            src={quotes}
                            alt=""
                            className="w-8 inline-block text-red-1 ml-4 -mb-4"
                          />
                          <p className="leading-normal text-lg lg:text-xl font-medium text-gray-2 bg-gray-200 px-6 py-6 shadow-lg min-h-full">
                            {emp.description}
                          </p>
                          <div class="w-11 inline-block overflow-hidden">
                            <div class=" h-16 bg-gray-200 shadow-button-shadow-3 rotate-60 transform origin-top-right"></div>
                          </div>
                        </>
                      ) : null}
                      <div className="pt-6 flex items-center ">
                        <div className="w-20 h-20 p-1 border-2 border-red-1">
                          <Imagehelper
                            param="eom"
                            id={`instructorImage-${emp._id}`}
                          />
                        </div>

                        <div className="ml-8 mb-8">
                          <div className="w-40 sm:w-60">
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
          <div className="w-96 lg:pl-12">
            {emp?._id !== undefined ? (
              <>
                <Imagehelper
                  param="eom"
                  id={`empImage-${emp._id}`}
                  className="h-96"
                />
              </>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeMonth;
