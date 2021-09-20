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
      <div className="text-gray-600 body-font bg-no-repeat bg-cover bg-servicesbg bg-center">
        <div className="container mx-auto flex px-5 py-12 sm:py-20 md:py-40 items-center justify-center flex-col">
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
            <div className="w-full flex flex-col md:flex-row items-center">
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
              <div className="lg:h-64 md:h-36 h-96 object-cover object-center rounded-2xl shadow-button-inner bg-callus bg-no-repeat bg-cover bg-center">
                <div className="shadow-services"></div>
              </div>
              <div className=" bg-white mx-3">
                <div className="border-r-4 border-l-4 border-client">
                  <h2 className="leading-tight text-base lg:text-lg title-font font-bold text-white mx-4 lg:mx-12 mb-3 bg-red-1 rounded-b-lg px-3 pt-2 pb-3">
                    GATED COMMUNITY
                  </h2>
                  <p className="leading-relaxed text-base text-gray-2 px-3 pt-3 pb-6">
                    NFS marked vehicles, communication between residents &
                    security staff and efficient use of technology
                  </p>
                </div>
                <div className="bg-client rounded-b-lg">
                  <button className="w-full p-4 text-gray-2 font-bold bg-client hover:bg-red-1 hover:text-white rounded-lg hover:shadow-button-inner"
                  onClick={() => setRow(1)}
                  >
                    Read More
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="p-4 md:w-1/3">
            <div className="h-full overflow-hidden ">
              <div className="lg:h-64 md:h-36 h-96 object-cover object-center rounded-2xl shadow-button-inner bg-callus bg-no-repeat bg-cover bg-center">
                <div className="shadow-services"></div>
              </div>
              <div className=" bg-white mx-3">
                <div className="border-r-4 border-l-4 border-client">
                  <h2 className="leading-tight text-base lg:text-lg title-font font-bold text-white mx-4 lg:mx-12 mb-3 bg-red-1 rounded-b-lg px-3 pt-2 pb-3">
                    GATED COMMUNITY
                  </h2>
                  <p className="leading-relaxed text-base text-gray-2 px-3 pt-3 pb-6">
                    NFS marked vehicles, communication between residents &
                    security staff and efficient use of technology
                  </p>
                </div>
                <div className="bg-client rounded-b-lg">
                  <button className="w-full p-4 text-gray-2 font-bold bg-client hover:bg-red-1 hover:text-white rounded-lg hover:shadow-button-inner"
                  onClick={() => setRow(2)}
                  >
                    Read More
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="p-4 md:w-1/3">
            <div className="h-full overflow-hidden ">
              <div className="lg:h-64 md:h-36 h-96 object-cover object-center rounded-2xl shadow-button-inner bg-callus bg-no-repeat bg-cover bg-center">
                <div className="shadow-services"></div>
              </div>
              <div className=" bg-white mx-3">
                <div className="border-r-4 border-l-4 border-client">
                  <h2 className="leading-tight text-base lg:text-lg title-font font-bold text-white mx-4 lg:mx-12 mb-3 bg-red-1 rounded-b-lg px-3 pt-2 pb-3">
                    GATED COMMUNITY
                  </h2>
                  <p className="leading-relaxed text-base text-gray-2 px-3 pt-3 pb-6">
                    NFS marked vehicles, communication between residents &
                    security staff and efficient use of technology
                  </p>
                </div>
                <div className="bg-client rounded-b-lg">
                  <button className="w-full p-4 text-gray-2 font-bold bg-client hover:bg-red-1 hover:text-white rounded-lg hover:shadow-button-inner"
                  onClick={() => setRow(3)}
                  >
                    Read More
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className={row === 1 ? "block" : "hidden"}>
            <div className="p-2 rounded-3xl border-3 border-client mb-12 md:m-6">
              <div className="rounded-2xl bg-client  px-3 sm:px-12 py-8">
                <h2 className="leading-tight text-2xl title-font font-bold text-gray-2 text-left mt-4 mb-6">
                  EVENT SECURITY SERVICES 1
                </h2>
                <div className="flex flex-col lg:flex-row items-center lg:items-start justify-around">
                  <div className=" w-full lg:w-8/12 text-left">
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
                  <div className="w-full md:w-1/2 lg:w-4/12 py-6 lg:py-0">
                    <video
                      className="rounded-2xl shadow-button-shadow-2 w-72 mx-auto lg:mx-0 lg:ml-auto"
                      poster={image1}
                    ></video>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={row === 2 ? "block" : "hidden"}>
          <div className="p-2 rounded-3xl border-3 border-client mb-12 md:m-6">
              <div className="rounded-2xl bg-client  px-3 sm:px-12 py-8">
                <h2 className="leading-tight text-2xl title-font font-bold text-gray-2 text-left mt-4 mb-6">
                  EVENT SECURITY SERVICES 2
                </h2>
                <div className="flex flex-col lg:flex-row items-center lg:items-start justify-around">
                  <div className=" w-full lg:w-8/12 text-left">
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
                  <div className="w-full md:w-1/2 lg:w-4/12 py-6 lg:py-0">
                    <video
                      className="rounded-2xl shadow-button-shadow-2 w-72 mx-auto lg:mx-0 lg:ml-auto"
                      poster={image1}
                    ></video>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={row === 3 ? "block" : "hidden"}>
          <div className="p-2 rounded-3xl border-3 border-client mb-12 md:m-6">
              <div className="rounded-2xl bg-client  px-3 sm:px-12 py-8">
                <h2 className="leading-tight text-2xl title-font font-bold text-gray-2 text-left mt-4 mb-6">
                  EVENT SECURITY SERVICES 3
                </h2>
                <div className="flex flex-col lg:flex-row items-center lg:items-start justify-around">
                  <div className=" w-full lg:w-8/12 text-left">
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
                  <div className="w-full md:w-1/2 lg:w-4/12 py-6 lg:py-0">
                    <video
                      className="rounded-2xl shadow-button-shadow-2 w-72 mx-auto lg:mx-0 lg:ml-auto"
                      poster={image1}
                    ></video>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="p-4 md:w-1/3">
            <div className="h-full overflow-hidden ">
              <div className="lg:h-64 md:h-36 h-96 object-cover object-center rounded-2xl shadow-button-inner bg-callus bg-no-repeat bg-cover bg-center">
                <div className="shadow-services"></div>
              </div>
              <div className=" bg-white mx-3">
                <div className="border-r-4 border-l-4 border-client">
                  <h2 className="leading-tight text-base lg:text-lg title-font font-bold text-white mx-4 lg:mx-12 mb-3 bg-red-1 rounded-b-lg px-3 pt-2 pb-3">
                    GATED COMMUNITY
                  </h2>
                  <p className="leading-relaxed text-base text-gray-2 px-3 pt-3 pb-6">
                    NFS marked vehicles, communication between residents &
                    security staff and efficient use of technology
                  </p>
                </div>
                <div className="bg-client rounded-b-lg">
                  <button className="w-full p-4 text-gray-2 font-bold bg-client hover:bg-red-1 hover:text-white rounded-lg hover:shadow-button-inner"
                  onClick={() => setRow(4)}
                  >
                    Read More
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="p-4 md:w-1/3">
            <div className="h-full overflow-hidden ">
              <div className="lg:h-64 md:h-36 h-96 object-cover object-center rounded-2xl shadow-button-inner bg-callus bg-no-repeat bg-cover bg-center">
                <div className="shadow-services"></div>
              </div>
              <div className=" bg-white mx-3">
                <div className="border-r-4 border-l-4 border-client">
                  <h2 className="leading-tight text-base lg:text-lg title-font font-bold text-white mx-4 lg:mx-12 mb-3 bg-red-1 rounded-b-lg px-3 pt-2 pb-3">
                    GATED COMMUNITY
                  </h2>
                  <p className="leading-relaxed text-base text-gray-2 px-3 pt-3 pb-6">
                    NFS marked vehicles, communication between residents &
                    security staff and efficient use of technology
                  </p>
                </div>
                <div className="bg-client rounded-b-lg">
                  <button className="w-full p-4 text-gray-2 font-bold bg-client hover:bg-red-1 hover:text-white rounded-lg hover:shadow-button-inner"
                  onClick={() => setRow(5)}
                  >
                    Read More
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="p-4 md:w-1/3">
            <div className="h-full overflow-hidden ">
              <div className="lg:h-64 md:h-36 h-96 object-cover object-center rounded-2xl shadow-button-inner bg-callus bg-no-repeat bg-cover bg-center">
                <div className="shadow-services"></div>
              </div>
              <div className=" bg-white mx-3">
                <div className="border-r-4 border-l-4 border-client">
                  <h2 className="leading-tight text-base lg:text-lg title-font font-bold text-white mx-4 lg:mx-12 mb-3 bg-red-1 rounded-b-lg px-3 pt-2 pb-3">
                    GATED COMMUNITY
                  </h2>
                  <p className="leading-relaxed text-base text-gray-2 px-3 pt-3 pb-6">
                    NFS marked vehicles, communication between residents &
                    security staff and efficient use of technology
                  </p>
                </div>
                <div className="bg-client rounded-b-lg">
                  <button className="w-full p-4 text-gray-2 font-bold bg-client hover:bg-red-1 hover:text-white rounded-lg hover:shadow-button-inner"
                  onClick={() => setRow(6)}
                  >
                    Read More
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className={row === 4 ? "block" : "hidden"}>
          <div className="p-2 rounded-3xl border-3 border-client mb-12 md:m-6">
              <div className="rounded-2xl bg-client  px-3 sm:px-12 py-8">
                <h2 className="leading-tight text-2xl title-font font-bold text-gray-2 text-left mt-4 mb-6">
                  EVENT SECURITY SERVICES 4
                </h2>
                <div className="flex flex-col lg:flex-row items-center lg:items-start justify-around">
                  <div className=" w-full lg:w-8/12 text-left">
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
                  <div className="w-full md:w-1/2 lg:w-4/12 py-6 lg:py-0">
                    <video
                      className="rounded-2xl shadow-button-shadow-2 w-72 mx-auto lg:mx-0 lg:ml-auto"
                      poster={image1}
                    ></video>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={row === 5 ? "block" : "hidden"}>
          <div className="p-2 rounded-3xl border-3 border-client mb-12 md:m-6">
              <div className="rounded-2xl bg-client  px-3 sm:px-12 py-8">
                <h2 className="leading-tight text-2xl title-font font-bold text-gray-2 text-left mt-4 mb-6">
                  EVENT SECURITY SERVICES 5
                </h2>
                <div className="flex flex-col lg:flex-row items-center lg:items-start justify-around">
                  <div className=" w-full lg:w-8/12 text-left">
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
                  <div className="w-full md:w-1/2 lg:w-4/12 py-6 lg:py-0">
                    <video
                      className="rounded-2xl shadow-button-shadow-2 w-72 mx-auto lg:mx-0 lg:ml-auto"
                      poster={image1}
                    ></video>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={row === 6 ? "block" : "hidden"}>
          <div className="p-2 rounded-3xl border-3 border-client mb-12 md:m-6">
              <div className="rounded-2xl bg-client  px-3 sm:px-12 py-8">
                <h2 className="leading-tight text-2xl title-font font-bold text-gray-2 text-left mt-4 mb-6">
                  EVENT SECURITY SERVICES 6
                </h2>
                <div className="flex flex-col lg:flex-row items-center lg:items-start justify-around">
                  <div className=" w-full lg:w-8/12 text-left">
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
                  <div className="w-full md:w-1/2 lg:w-4/12 py-6 lg:py-0">
                    <video
                      className="rounded-2xl shadow-button-shadow-2 w-72 mx-auto lg:mx-0 lg:ml-auto"
                      poster={image1}
                    ></video>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="p-4 md:w-1/3">
            <div className="h-full overflow-hidden ">
              <div className="lg:h-64 md:h-36 h-96 object-cover object-center rounded-2xl shadow-button-inner bg-callus bg-no-repeat bg-cover bg-center">
                <div className="shadow-services"></div>
              </div>
              <div className=" bg-white mx-3">
                <div className="border-r-4 border-l-4 border-client">
                  <h2 className="leading-tight text-base lg:text-lg title-font font-bold text-white mx-4 lg:mx-12 mb-3 bg-red-1 rounded-b-lg px-3 pt-2 pb-3">
                    GATED COMMUNITY
                  </h2>
                  <p className="leading-relaxed text-base text-gray-2 px-3 pt-3 pb-6">
                    NFS marked vehicles, communication between residents &
                    security staff and efficient use of technology
                  </p>
                </div>
                <div className="bg-client rounded-b-lg">
                  <button className="w-full p-4 text-gray-2 font-bold bg-client hover:bg-red-1 hover:text-white rounded-lg hover:shadow-button-inner"
                  onClick={() => setRow(7)}
                  >
                    Read More
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="p-4 md:w-1/3">
            <div className="h-full overflow-hidden ">
              <div className="lg:h-64 md:h-36 h-96 object-cover object-center rounded-2xl shadow-button-inner bg-callus bg-no-repeat bg-cover bg-center">
                <div className="shadow-services"></div>
              </div>
              <div className=" bg-white mx-3">
                <div className="border-r-4 border-l-4 border-client">
                  <h2 className="leading-tight text-base lg:text-lg title-font font-bold text-white mx-4 lg:mx-12 mb-3 bg-red-1 rounded-b-lg px-3 pt-2 pb-3">
                    GATED COMMUNITY
                  </h2>
                  <p className="leading-relaxed text-base text-gray-2 px-3 pt-3 pb-6">
                    NFS marked vehicles, communication between residents &
                    security staff and efficient use of technology
                  </p>
                </div>
                <div className="bg-client rounded-b-lg">
                  <button className="w-full p-4 text-gray-2 font-bold bg-client hover:bg-red-1 hover:text-white rounded-lg hover:shadow-button-inner"
                  onClick={() => setRow(8)}
                  >
                    Read More
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="p-4 md:w-1/3">
            <div className="h-full overflow-hidden ">
              <div className="lg:h-64 md:h-36 h-96 object-cover object-center rounded-2xl shadow-button-inner bg-callus bg-no-repeat bg-cover bg-center">
                <div className="shadow-services"></div>
              </div>
              <div className=" bg-white mx-3">
                <div className="border-r-4 border-l-4 border-client">
                  <h2 className="leading-tight text-base lg:text-lg title-font font-bold text-white mx-4 lg:mx-12 mb-3 bg-red-1 rounded-b-lg px-3 pt-2 pb-3">
                    GATED COMMUNITY
                  </h2>
                  <p className="leading-relaxed text-base text-gray-2 px-3 pt-3 pb-6">
                    NFS marked vehicles, communication between residents &
                    security staff and efficient use of technology
                  </p>
                </div>
                <div className="bg-client rounded-b-lg">
                  <button className="w-full p-4 text-gray-2 font-bold bg-client hover:bg-red-1 hover:text-white rounded-lg hover:shadow-button-inner"
                  onClick={() => setRow(9)}
                  >
                    Read More
                  </button>
                </div>
              </div>
            </div>
          </div>

        </div>

        <div className={row === 7 ? "block" : "hidden"}>
        <div className="p-2 rounded-3xl border-3 border-client mb-12 md:m-6">
              <div className="rounded-2xl bg-client  px-3 sm:px-12 py-8">
                <h2 className="leading-tight text-2xl title-font font-bold text-gray-2 text-left mt-4 mb-6">
                  EVENT SECURITY SERVICES 7
                </h2>
                <div className="flex flex-col lg:flex-row items-center lg:items-start justify-around">
                  <div className=" w-full lg:w-8/12 text-left">
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
                  <div className="w-full md:w-1/2 lg:w-4/12 py-6 lg:py-0">
                    <video
                      className="rounded-2xl shadow-button-shadow-2 w-72 mx-auto lg:mx-0 lg:ml-auto"
                      poster={image1}
                    ></video>
                  </div>
                </div>
              </div>
            </div>
        </div>

        <div className={row === 8 ? "block" : "hidden"}>
        <div className="p-2 rounded-3xl border-3 border-client mb-12 md:m-6">
              <div className="rounded-2xl bg-client  px-3 sm:px-12 py-8">
                <h2 className="leading-tight text-2xl title-font font-bold text-gray-2 text-left mt-4 mb-6">
                  EVENT SECURITY SERVICES 8
                </h2>
                <div className="flex flex-col lg:flex-row items-center lg:items-start justify-around">
                  <div className=" w-full lg:w-8/12 text-left">
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
                  <div className="w-full md:w-1/2 lg:w-4/12 py-6 lg:py-0">
                    <video
                      className="rounded-2xl shadow-button-shadow-2 w-72 mx-auto lg:mx-0 lg:ml-auto"
                      poster={image1}
                    ></video>
                  </div>
                </div>
              </div>
            </div>
        </div>

        <div className={row === 9 ? "block" : "hidden"}>
        <div className="p-2 rounded-3xl border-3 border-client mb-12 md:m-6">
              <div className="rounded-2xl bg-client  px-3 sm:px-12 py-8">
                <h2 className="leading-tight text-2xl title-font font-bold text-gray-2 text-left mt-4 mb-6">
                  EVENT SECURITY SERVICES 9
                </h2>
                <div className="flex flex-col lg:flex-row items-center lg:items-start justify-around">
                  <div className=" w-full lg:w-8/12 text-left">
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
                  <div className="w-full md:w-1/2 lg:w-4/12 py-6 lg:py-0">
                    <video
                      className="rounded-2xl shadow-button-shadow-2 w-72 mx-auto lg:mx-0 lg:ml-auto"
                      poster={image1}
                    ></video>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
