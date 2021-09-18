import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import image1 from "./../../argus website/PNG/raw-2_edited.png";
import Header from "./../Partials/Header";
import Header2 from "./../Partials/Header2";
import Stickynav from "./../Partials/Stickynav";
import MobileHeader from "../Partials/MobileHeader";
import SideLine from "../Components/SideLine";

const Services = () => {
  const [row, setRow] = useState(0);

  return (
    <div>
      <div className="text-gray-600 body-font bg-no-repeat bg-cover bg-servicesbg">
        <div className="container mx-auto flex px-5 py-40 items-center justify-center flex-col">
          <div className="text-center lg:w-2/3 w-full">
            <h1 className="title-font sm:text-6xl text-3xl mb-4 font-bold text-white font-for-para">
              SERVICES
            </h1>
          </div>
        </div>
      </div>

      <div class="px-4 sm:px-8 lg:px-12 xl:px-0 mx-auto max-w-1366 bg-no-repeat bg-contain bg-mapbg2">
        <div className="flex flex-wrap py-12">
          <div className="flex flex-wrap w-full items-baseline">
            <div className="w-full flex flex-col md:flex-row items-center pb-5">
              <div className="flex flex-row items-stretch pr-24">
                <SideLine />
                <h1 className="leading-tight text-3xl sm:text-4xl font-bold text-gray-3">
                  Firsthand information to our operations
                </h1>
              </div>
              <p className="leading-relaxed font-medium text-lg text-gray-2 pb-10 md:pb-0 ">
                As a client you will gain first hand access to day-today
                operations and daily occurrence reposts.
              </p>
            </div>
          </div>
        </div>

        <div class="flex flex-wrap text-center mb-8">
          <div className="p-4 md:w-1/3">
            <div className="h-full overflow-hidden ">
              <img
                className="lg:h-72 md:h-36 w-full object-cover object-center rounded-2xl mb-10"
                src={image1}
                alt="blog"
              />
              <div className="bg-white border-4 rounded-2xl hover:bg-gray-200 duration-300 mx-2.5 z-auto">
                <h1 className="title-font text-lg font-medium text-white p-3 mb-3 bg-center bg-no-repeat bg-shape1 bg-contain md:bg-cover lg:bg-contain z-auto -mt-7">
                  GATED COMMUNITY
                </h1>
                <p className="leading-loose text-gray-2 px-6 py-6">
                  NFS marked vehicles, communication between residents &
                  security staff and efficient use of technology
                </p>
                <button
                  className="w-full p-4 text-black rounded-xl bg-gray-200 hover:bg-red-1 hover:text-white"
                  onClick={() => setRow(1)}
                >
                  Read More
                </button>
              </div>
            </div>
          </div>

          <div className="p-4 md:w-1/3">
            <div className="h-full overflow-hidden ">
              <img
                className="lg:h-72 md:h-36 w-full object-cover object-center rounded-2xl mb-10"
                src={image1}
                alt="blog"
              />
              <div className="bg-white border-4 rounded-2xl hover:bg-gray-200 duration-300 mx-2.5 z-auto">
                <h1 className="title-font text-lg font-medium text-white p-3 mb-3 bg-center bg-no-repeat bg-shape1 bg-contain md:bg-cover lg:bg-contain z-auto -mt-7">
                  GATED COMMUNITY
                </h1>
                <p className="leading-loose text-gray-2 px-6 py-6">
                  NFS marked vehicles, communication between residents &
                  security staff and efficient use of technology
                </p>
                <button
                  className="w-full p-4 text-black rounded-xl bg-gray-200 hover:bg-red-1 hover:text-white"
                  onClick={() => setRow(2)}
                >
                  Read More
                </button>
              </div>
            </div>
          </div>

          <div className="p-4 md:w-1/3">
            <div className="h-full overflow-hidden ">
              <img
                className="lg:h-72 md:h-36 w-full object-cover object-center rounded-2xl mb-10"
                src={image1}
                alt="blog"
              />
              <div className="bg-white border-4 rounded-2xl hover:bg-gray-200 duration-300 mx-2.5 z-auto">
                <h1 className="title-font text-lg font-medium text-white p-3 mb-3 bg-center bg-no-repeat bg-shape1 bg-contain md:bg-cover lg:bg-contain z-auto -mt-7">
                  GATED COMMUNITY
                </h1>
                <p className="leading-loose text-gray-2 px-6 py-6">
                  NFS marked vehicles, communication between residents &
                  security staff and efficient use of technology
                </p>
                <button
                  className="w-full p-4 text-black rounded-xl bg-gray-200 hover:bg-red-1 hover:text-white"
                  onClick={() => setRow(3)}
                >
                  Read More
                </button>
              </div>
            </div>
          </div>

          <div className={row === 1 ? "block" : "hidden"}>
            <div className="p-2 rounded-3xl border-3 border-client mb-12 m-6">
              <div className="rounded-2xl bg-client">
                <div className="flex flex-col md:flex-row items-center justify-around">
                  <div className=" w-full md:w-1/2 lg:w-8/12 text-left px-3 sm:px-8 py-4">
                    <h2 className="leading-tight text-2xl lg:text-3xl title-font font-bold text-gray-3 mt-8 mb-6">
                      EVENT SECURITY SERVICES 1
                    </h2>
                    <p className="leading-relaxed text-lg font-medium text-gray-2 mb-6">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </p>
                    <p className="leading-relaxed text-lg font-medium text-gray-2 mb-2">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur.
                    </p>
                  </div>
                  <div className="w-full md:w-1/2 lg:w-4/12 p-8">
                    <video
                      className="rounded-2xl shadow-button-shadow-2 w-72 mx-auto"
                      poster={image1}
                    ></video>
                  </div>
                </div>
              </div>
            </div>

            <div className={row == 2 ? "block" : "hidden"}>
              <div className="px-8 py-6 rounded-lg border border-gray-2 mb-12">
                <button
                  className="px-4 py-1 float-right bg-gray-200 border shadow-lg rounded-lg hover:bg-white hover:shadow-none hover:border-gray-200"
                  onClick={() => setRow(0)}
                >
                  Close
                </button>
                <h2 className="leading-tight text-4xl title-font font-bold text-gray-900 mt-8 mb-8">
                  EVENT SECURITY SERVICES 2
                </h2>
                <p className="leading-loose text-lg font-medium text-gray-2 mb-8">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit, sed do eiusmod tempor incididunt
                  ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                  quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                  ea commodo consequat.{" "}
                </p>
                <p className="leading-relaxed. text-l font-medium text-gray-2 mb-8">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum
                  dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                  minim veniam, quis nostrud exercitation ullamco laboris nisi
                  ut aliquip ex ea commodo consequat.
                </p>
              </div>
            </div>
          </div>

          <div className={row == 3 ? "block" : "hidden"}>
            <div className="px-8 py-6 rounded-lg border border-gray-2 mb-12">
              <button
                className="px-4 py-1 float-right bg-gray-200 border shadow-lg rounded-lg hover:bg-white hover:shadow-none hover:border-gray-200"
                onClick={() => setRow(0)}
              >
                Close
              </button>
              <h2 className="leading-tight text-4xl title-font font-bold text-gray-900 mt-8 mb-8">
                EVENT SECURITY SERVICES 3
              </h2>
              <p className="leading-loose text-lg font-medium text-gray-2 mb-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est
                laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi ut aliquip ex ea commodo consequat.{" "}
              </p>
              <p className="leading-relaxed. text-l font-medium text-gray-2 mb-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>

          <div className="p-4 md:w-1/3">
            <div className="h-full overflow-hidden ">
              <img
                className="lg:h-72 md:h-36 w-full object-cover object-center rounded-2xl mb-10"
                src={image1}
                alt="blog"
              />
              <div className="bg-white border-4 rounded-2xl hover:bg-gray-200 duration-300 mx-2.5 z-auto">
                <h1 className="title-font text-lg font-medium text-white p-3 mb-3 bg-center bg-no-repeat bg-shape1 bg-contain md:bg-cover lg:bg-contain z-auto -mt-7">
                  GATED COMMUNITY
                </h1>
                <p className="leading-loose text-gray-2 px-6 py-6">
                  NFS marked vehicles, communication between residents &
                  security staff and efficient use of technology
                </p>
                <button
                  className="w-full p-4 text-black rounded-xl bg-gray-200 hover:bg-red-1 hover:text-white"
                  onClick={() => setRow(4)}
                >
                  Read More
                </button>
              </div>
            </div>
          </div>

          <div className="p-4 md:w-1/3">
            <div className="h-full overflow-hidden ">
              <img
                className="lg:h-72 md:h-36 w-full object-cover object-center rounded-2xl mb-10"
                src={image1}
                alt="blog"
              />
              <div className="bg-white border-4 rounded-2xl hover:bg-gray-200 duration-300 mx-2.5 z-auto">
                <h1 className="title-font text-lg font-medium text-white p-3 mb-3 bg-center bg-no-repeat bg-shape1 bg-contain md:bg-cover lg:bg-contain z-auto -mt-7">
                  GATED COMMUNITY
                </h1>
                <p className="leading-loose text-gray-2 px-6 py-6">
                  NFS marked vehicles, communication between residents &
                  security staff and efficient use of technology
                </p>
                <button
                  className="w-full p-4 text-black rounded-xl bg-gray-200 hover:bg-red-1 hover:text-white"
                  onClick={() => setRow(5)}
                >
                  Read More
                </button>
              </div>
            </div>
          </div>

          <div className="p-4 md:w-1/3">
            <div className="h-full overflow-hidden ">
              <img
                className="lg:h-72 md:h-36 w-full object-cover object-center rounded-2xl mb-10"
                src={image1}
                alt="blog"
              />
              <div className="bg-white border-4 rounded-2xl hover:bg-gray-200 duration-300 mx-2.5 z-auto">
                <h1 className="title-font text-lg font-medium text-white p-3 mb-3 bg-center bg-no-repeat bg-shape1 bg-contain md:bg-cover lg:bg-contain z-auto -mt-7">
                  GATED COMMUNITY
                </h1>
                <p className="leading-loose text-gray-2 px-6 py-6">
                  NFS marked vehicles, communication between residents &
                  security staff and efficient use of technology
                </p>
                <button
                  className="w-full p-4 text-black rounded-xl bg-gray-200 hover:bg-red-1 hover:text-white"
                  onClick={() => setRow(6)}
                >
                  Read More
                </button>
              </div>
            </div>
          </div>

          <div className={row == 4 ? "block" : "hidden"}>
            <div className="px-8 py-6 rounded-lg border border-gray-2 mb-12">
              <button
                className="px-4 py-1 float-right bg-gray-200 border shadow-lg rounded-lg hover:bg-white hover:shadow-none hover:border-gray-200"
                onClick={() => setRow(0)}
              >
                Close
              </button>
              <h2 className="leading-tight text-4xl title-font font-bold text-gray-900 mt-8 mb-8">
                EVENT SECURITY SERVICES 4
              </h2>
              <p className="leading-loose text-lg font-medium text-gray-2 mb-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est
                laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi ut aliquip ex ea commodo consequat.{" "}
              </p>
              <p className="leading-relaxed. text-l font-medium text-gray-2 mb-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>

          <div className={row == 5 ? "block" : "hidden"}>
            <div className="px-8 py-6 rounded-lg border border-gray-2 mb-12">
              <button
                className="px-4 py-1 float-right bg-gray-200 border shadow-lg rounded-lg hover:bg-white hover:shadow-none hover:border-gray-200"
                onClick={() => setRow(0)}
              >
                Close
              </button>
              <h2 className="leading-tight text-4xl title-font font-bold text-gray-900 mt-8 mb-8">
                EVENT SECURITY SERVICES 5
              </h2>
              <p className="leading-loose text-lg font-medium text-gray-2 mb-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est
                laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi ut aliquip ex ea commodo consequat.{" "}
              </p>
              <p className="leading-relaxed. text-l font-medium text-gray-2 mb-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>

          <div className={row == 6 ? "block" : "hidden"}>
            <div className="px-8 py-6 rounded-lg border border-gray-2 mb-12">
              <button
                className="px-4 py-1 float-right bg-gray-200 border shadow-lg rounded-lg hover:bg-white hover:shadow-none hover:border-gray-200"
                onClick={() => setRow(0)}
              >
                Close
              </button>
              <h2 className="leading-tight text-4xl title-font font-bold text-gray-900 mt-8 mb-8">
                EVENT SECURITY SERVICES 6
              </h2>
              <p className="leading-loose text-lg font-medium text-gray-2 mb-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est
                laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi ut aliquip ex ea commodo consequat.{" "}
              </p>
              <p className="leading-relaxed. text-l font-medium text-gray-2 mb-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>

          <div className="p-4 md:w-1/3">
            <div className="h-full overflow-hidden ">
              <img
                className="lg:h-72 md:h-36 w-full object-cover object-center rounded-2xl mb-10"
                src={image1}
                alt="blog"
              />
              <div className="bg-white border-4 rounded-2xl hover:bg-gray-200 duration-300 mx-2.5 z-auto">
                <h1 className="title-font text-lg font-medium text-white p-3 mb-3 bg-center bg-no-repeat bg-shape1 bg-contain md:bg-cover lg:bg-contain z-auto -mt-7">
                  GATED COMMUNITY
                </h1>
                <p className="leading-loose text-gray-2 px-6 py-6">
                  NFS marked vehicles, communication between residents &
                  security staff and efficient use of technology
                </p>
                <button
                  className="w-full p-4 text-black rounded-xl bg-gray-200 hover:bg-red-1 hover:text-white"
                  onClick={() => setRow(7)}
                >
                  Read More
                </button>
              </div>
            </div>
          </div>

          <div className="p-4 md:w-1/3">
            <div className="h-full overflow-hidden ">
              <img
                className="lg:h-72 md:h-36 w-full object-cover object-center rounded-2xl mb-10"
                src={image1}
                alt="blog"
              />
              <div className="bg-white border-4 rounded-2xl hover:bg-gray-200 duration-300 mx-2.5 z-auto">
                <h1 className="title-font text-lg font-medium text-white p-3 mb-3 bg-center bg-no-repeat bg-shape1 bg-contain md:bg-cover lg:bg-contain z-auto -mt-7">
                  GATED COMMUNITY
                </h1>
                <p className="leading-loose text-gray-2 px-6 py-6">
                  NFS marked vehicles, communication between residents &
                  security staff and efficient use of technology
                </p>
                <button
                  className="w-full p-4 text-black rounded-xl bg-gray-200 hover:bg-red-1 hover:text-white"
                  onClick={() => setRow(8)}
                >
                  Read More
                </button>
              </div>
            </div>
          </div>

          <div className="p-4 md:w-1/3">
            <div className="h-full overflow-hidden ">
              <img
                className="lg:h-72 md:h-36 w-full object-cover object-center rounded-2xl mb-10"
                src={image1}
                alt="blog"
              />
              <div className="bg-white border-4 rounded-2xl hover:bg-gray-200 duration-300 mx-2.5 z-auto">
                <h1 className="title-font text-lg font-medium text-white p-3 mb-3 bg-center bg-no-repeat bg-shape1 bg-contain md:bg-cover lg:bg-contain z-auto -mt-7">
                  GATED COMMUNITY
                </h1>
                <p className="leading-loose text-gray-2 px-6 py-6">
                  NFS marked vehicles, communication between residents &
                  security staff and efficient use of technology
                </p>
                <button
                  className="w-full p-4 text-black rounded-xl bg-gray-200 hover:bg-red-1 hover:text-white"
                  onClick={() => setRow(9)}
                >
                  Read More
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className={row == 7 ? "block" : "hidden"}>
          <div className="px-8 py-6 rounded-lg border border-gray-2 mb-12">
            <button
              className="px-4 py-1 float-right bg-gray-200 border shadow-lg rounded-lg hover:bg-white hover:shadow-none hover:border-gray-200"
              onClick={() => setRow(0)}
            >
              Close
            </button>
            <h2 className="leading-tight text-4xl title-font font-bold text-gray-900 mt-8 mb-8">
              EVENT SECURITY SERVICES 7
            </h2>
            <p className="leading-loose text-lg font-medium text-gray-2 mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est
              laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.{" "}
            </p>
            <p className="leading-relaxed. text-l font-medium text-gray-2 mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
              ex ea commodo consequat.
            </p>
          </div>
        </div>

        <div className={row == 8 ? "block" : "hidden"}>
          <div className="px-8 py-6 rounded-lg border border-gray-2 mb-12">
            <button
              className="px-4 py-1 float-right bg-gray-200 border shadow-lg rounded-lg hover:bg-white hover:shadow-none hover:border-gray-200"
              onClick={() => setRow(0)}
            >
              Close
            </button>
            <h2 className="leading-tight text-4xl title-font font-bold text-gray-900 mt-8 mb-8">
              EVENT SECURITY SERVICES 8
            </h2>
            <p className="leading-loose text-lg font-medium text-gray-2 mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est
              laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.{" "}
            </p>
            <p className="leading-relaxed. text-l font-medium text-gray-2 mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
              ex ea commodo consequat.
            </p>
          </div>
        </div>

        <div className={row == 9 ? "block" : "hidden"}>
          <div className="px-8 py-6 rounded-lg border border-gray-2 mb-12">
            <button
              className="px-4 py-1 float-right bg-gray-200 border shadow-lg rounded-lg hover:bg-white hover:shadow-none hover:border-gray-200"
              onClick={() => setRow(0)}
            >
              Close
            </button>
            <h2 className="leading-tight text-4xl title-font font-bold text-gray-900 mt-8 mb-8">
              EVENT SECURITY SERVICES 9
            </h2>
            <p className="leading-loose text-lg font-medium text-gray-2 mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est
              laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <p className="leading-relaxed. text-l font-medium text-gray-2 mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
              ex ea commodo consequat.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
