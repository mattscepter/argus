import React, { Component } from "react";
import about_image from "./../../argus website/PNG/Video.png";
import SideBar from "./../Components/SideBar.jsx";
import Header from "./../Partials/Header";
import Header2 from "./../Partials/Header2";
import Stickynav from "./../Partials/Stickynav";
import MobileHeader from "../Partials/MobileHeader";
import SideLine from "./../Components/SideLine";

class About extends Component {
  render() {
    return (
      <div className="font-for-para">
        <div className="text-gray-600 body-font bg-no-repeat bg-cover bg-servicesbg">
          <div className="container mx-auto flex px-5 py-40 items-center justify-center flex-col">
            <div className="text-center lg:w-2/3 w-full">
              <h1 className="title-font sm:text-6xl text-3xl mb-4 font-bold text-white font-for-para">
                JOBS
              </h1>
            </div>
          </div>
        </div>

        <div className="px-4 sm:px-8 lg:px-12 xl:px-0 max-w-1366 mx-auto bg-no-repeat bg-mapbg">
          <div className="flex flex-wrap my-12">
            <div className=" md:w-1/2 lg:w-2/3 flex flex-col items-start">
              <img src={about_image} alt="Jobs page" className="w-full" />
              <div className="flex flex-row items-stretch w-full mt-10 mb-6">
                <SideLine />
                <h1 className="leading-tight text-3xl sm:text-4xl font-bold text-gray-3">
                  Scope of Service
                </h1>
              </div>
              <p className="leading-normal text-lg font-medium text-gray-2 mb-6">
                Call or visit a Argus Career Centre today. There is no
                appointment required during regular business hours. We have a
                wide variety of available roles and jobsites
              </p>

              <ul className="text-gray-2 font-medium text-lg flex flex-col md:flex-row">
                <div className="">
                  <li className="my-0.5">
                    <span className="text-red-1 font-bold mr-2">✓</span> Retail
                    Malls
                  </li>
                  <li className="my-0.5">
                    <span className="text-red-1 font-bold mr-2">✓</span>{" "}
                    Commercial Properties{" "}
                  </li>
                  <li className="my-0.5">
                    <span className="text-red-1 font-bold mr-2">✓</span>{" "}
                    Condominiums{" "}
                  </li>
                </div>
                <div className="md:ml-10">
                  <li className="my-0.5">
                    <span className="text-red-1 font-bold mr-2">✓</span>{" "}
                    Industrial Sites
                  </li>
                  <li className="my-0.5">
                    <span className="text-red-1 font-bold mr-2">✓</span>{" "}
                    Healthcare Facilities
                  </li>
                  <li className="my-0.5">
                    <span className="text-red-1 font-bold mr-2">✓</span> Mobile
                    Guard{" "}
                  </li>
                </div>
              </ul>

              <div className="flex flex-row items-stretch w-full mt-10 mb-6">
                <SideLine />
                <h1 className="leading-tight text-3xl sm:text-4xl font-bold text-gray-3">
                  Employment Requirements
                </h1>
              </div>
              <p className="leading-normal text-lg font-medium text-gray-2 mb-6">
                Call or visit a Argus Career Centre today. There is no
                appointment required during regular business hours. We have a
                wide variety of available roles and jobsites
              </p>
              <ul className="text-gray-2 font-medium text-lg mb-6">
                <li className="my-0.5">
                  <span className="text-red-1 font-bold mr-2">✓</span> A valid
                  Ontario Security Licence{" "}
                </li>
                <li className="my-0.5">
                  <span className="text-red-1 font-bold mr-2">✓</span> Previous
                  experience
                </li>
                <li className="my-0.5">
                  <span className="text-red-1 font-bold mr-2">✓</span> Education
                  (Ontario Grade 12 or equivalent)
                </li>
                <li className="my-0.5">
                  <span className="text-red-1 font-bold mr-2">✓</span>{" "}
                  Availability to work required shifts{" "}
                </li>
                <li className="my-0.5">
                  <span className="text-red-1 font-bold mr-2">✓</span> No
                  criminal record
                </li>
                <li className="my-0.5">
                  <span className="text-red-1 font-bold mr-2">✓</span> Canadian
                  citizen or landed immigrant status
                </li>
                <li className="my-0.5">
                  <span className="text-red-1 font-bold mr-2">✓</span> Available
                  transportation to get to work{" "}
                </li>
                <li className="my-0.5">
                  <span className="text-red-1 font-bold mr-2">✓</span> A clean
                  and professional appearance with good hygiene
                </li>
              </ul>
              <p className="leading-loose text-lg font-medium text-gray-2 mb-4 sm:mb-8">
                If you do not have a valid Ontario Security Licence, we can help
                you train and apply for one.
              </p>
              <button className="mx-auto md:mx-0 font-bold text-white bg-red-1 py-4 px-8 md:px-16 hover:bg-white border-4 border-double  border-red-1 hover:text-red-1 rounded-lg text-2xl mt-10 sm:mt-0 hover:shadow-button-inner">
                APPLY NOW
              </button>
            </div>
            <SideBar />
          </div>
        </div>
      </div>
    );
  }
}

export default About;
