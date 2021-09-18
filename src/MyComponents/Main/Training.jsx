import React, { Component } from "react";
import about_image from "./../../argus website/PNG/Video.png";
import { Link } from "react-router-dom";
import SideBar from "./../Components/SideBar.jsx";
import Header from "./../Partials/Header";
import Header2 from "./../Partials/Header2";
import Stickynav from "./../Partials/Stickynav";
import MobileHeader from "../Partials/MobileHeader";
import SideLine from "./../Components/SideLine"

class Training extends Component {
  render() {
    return (
      <div className="font-for-para">
        <Header />
        <Header2 />
        <Stickynav />
        <MobileHeader />

        <div className="text-gray-600 body-font bg-no-repeat bg-cover bg-servicesbg">
          <div className="container mx-auto flex px-5 py-40 items-center justify-center flex-col">
            <div className="text-center lg:w-2/3 w-full">
              <h1 className="title-font sm:text-6xl text-3xl mb-4 font-bold font-for-para text-white">
                COURSES
              </h1>
            </div>
          </div>
        </div>

        <div className="px-4 sm:px-8 lg:px-12 xl:px-0 max-w-1366 mx-auto bg-no-repeat bg-mapbg">
          <div className="flex flex-wrap my-12">
            <div className=" md:w-1/2 lg:w-2/3 flex flex-col items-start">
              <img src={about_image} alt="Training Page" className="w-full" />
              <div className="flex flex-row items-stretch w-full mt-8 mb-8">
                <SideLine />
                <h1 className="leading-tight text-3xl sm:text-4xl font-bold text-gray-3">
                Road to Success
                </h1>
              </div>
              <p className="leading-relaxed text-lg font-medium text-gray-2 mb-6">
                Argus Institute‘s Basic Security Training Course gives you
                everything you need to prepare for your Ontario Security Guard
                Licence test. No appointment is required. You may stop by Monday
                to Friday from 10:00 A.M. until 6 P.M. to register.
              </p>
              <p className="leading-relaxed text-lg font-medium text-gray-2 mb-6">
                You can also take advantage of our Online Learning Platform that
                features SelfPaced Online Courses (SPOC), optional live
                instructor-led sessions within our Virtual Training Room (VTR),
                and 8 hours of in-classroom First Aid/CPR Level C certification
                training.
              </p>

              <div className="flex flex-row items-stretch w-full mt-8 mb-8">
                <SideLine />
                <h1 className="leading-tight text-3xl sm:text-4xl font-bold text-gray-3">
                Basic Security Traning Course (online) $149.99
                </h1>
              </div>
              <p className="leading-relaxed text-lg font-medium text-gray-2 mb-8">
                You can take advantage of our Online Learning Platform that
                features Self-Paced Online Courses (SPOC), optional live
                instructor-led sessions within our Virtual Training Room (VTR),
                and 8 hours of in-classroom First Aid/CPR Level C certification
                training.
              </p>
              <button className="py-4 px-12 text-3xl font-bold text-white hover:bg-white border-3 bg-red-1 border-red-1 hover:text-red-1 rounded-lg mt-10 sm:mt-0 shadow-button-shadow-2">
                REGISTER
              </button>

              <div className="flex flex-row items-stretch w-full mt-8 mb-8">
                <SideLine />
                <h1 className="leading-tight text-3xl sm:text-4xl font-bold text-gray-3">
                Basic Security Training Course – (In-class room) $199.99
                </h1>
              </div>
              <ul class="text-gray-2 font-medium text-lg mb-6">
                <li className="my-0.5">
                  <span className="text-red-1 font-bold mr-2">✓</span> Course is five
                  days (40 hours) Monday – Friday, 8:30am – 5:00pm
                </li>
                <li>
                  <span className="text-red-1 font-bold mr-2">✓</span> Comprehensive
                  Security Manual is included{" "}
                </li>
                <li className="my-0.5">
                  <span className="text-red-1 font-bold mr-2">✓</span> Exceeds
                  Ontario government standards
                </li>
                <li className="my-0.5">
                  <span className="text-red-1 font-bold mr-2">✓</span> Our guarantee
                  – if you fail the ministry test, you can retake the course for
                  free!
                </li>
                <li className="my-0.5">
                  <span className="text-red-1 font-bold mr-2">✓</span> Courses run
                  weekly in Brampton.{" "}
                </li>
              </ul>
              <button className="py-4 px-12 text-3xl font-bold text-white hover:bg-white border-3 bg-red-1 border-red-1 hover:text-red-1 rounded-lg mt-10 sm:mt-0 shadow-button-shadow-2">
                REGISTER
              </button>

              <div className="flex flex-row items-stretch w-full mt-8 mb-8">
                <SideLine />
                <h1 className="leading-tight text-3xl sm:text-4xl font-bold text-gray-3">
                Basic Security Training Course topics
                </h1>
              </div>
              <ul className="text-gray-2 font-medium text-lg flex flex-col md:flex-row mb-6">
                <div className="">
                  <li className="my-0.5">
                    <span className="text-red-1 font-bold mr-2">✓</span> Introduction
                    to the Security Industry
                  </li>
                  <li className="my-0.5">
                    <span className="text-red-1 font-bold mr-2">✓</span> Basic
                    Procedures{" "}
                  </li>
                  <li className="my-0.5">
                    <span className="text-red-1 font-bold mr-2">✓</span> Regulations{" "}
                  </li>
                  <li className="my-0.5">
                    <span className="text-red-1 font-bold mr-2">✓</span> Use of Force
                    Theory
                  </li>
                  <li className="my-0.5">
                    <span className="text-red-1 font-bold mr-2">✓</span> Emergencies{" "}
                  </li>
                </div>
                <div className="md:mx-10">
                  <li className="my-0.5">
                    <span className="text-red-1 font-bold mr-2">✓</span> Health &
                    Safety
                  </li>
                  <li className="my-0.5">
                    <span className="text-red-1 font-bold mr-2">✓</span> Canadian
                    Legal System & Authorities{" "}
                  </li>
                  <li className="my-0.5">
                    <span className="text-red-1 font-bold mr-2">✓</span>{" "}
                    Communication I & II{" "}
                  </li>
                  <li className="my-0.5">
                    <span className="text-red-1 font-bold mr-2">✓</span> Conflict
                    Resolution
                  </li>
                  <li className="my-0.5">
                    <span className="text-red-1 font-bold mr-2">✓</span> Diversity &
                    Sensitivity
                  </li>
                </div>
              </ul>
              <div className="flex flex-row items-stretch w-full mt-8 mb-8">
                <SideLine />
                <h1 className="leading-tight text-3xl sm:text-4xl font-bold text-gray-3">
                FAQ
                </h1>
              </div>
              <p className="p-4 mb-2 border-2 border-gray-200 text-gray-2  w-full">
                <span className="text-red-1 font-bold">1.</span> Where do I take
                the test?
              </p>
              <p className="p-4 mb-2 border-2 border-gray-200 text-gray-2  w-full">
                <span className="text-red-1 font-bold">2.</span> Is there a
                government website to answer my questions?
              </p>
              <p className="p-4 mb-2 border-2 border-gray-200 text-gray-2  w-full">
                <span className="text-red-1 font-bold">3.</span> How much does
                it cost?{" "}
              </p>
              <p className="p-4 mb-2 border-2 border-gray-200 text-gray-2  w-full">
                <span className="text-red-1 font-bold">4.</span> Does this fee
                include the cost of my license?
              </p>
              <p className="p-4 mb-2 border-2 border-gray-200 text-gray-2  w-full">
                <span className="text-red-1 font-bold">5.</span> Where do I take
                the training?
              </p>
              <p className="p-4 mb-2 border-2 border-gray-200 text-gray-2  w-full">
                <span className="text-red-1 font-bold">6.</span> Is everything
                included in the price of the course?{" "}
              </p>
              <p className="p-4 mb-2 border-2 border-gray-200 text-gray-2  w-full">
                <span className="text-red-1 font-bold">7.</span> What is the
                cost to the five days of training?
              </p>
              <p className="p-4 mb-2 border-2 border-gray-200 text-gray-2  w-full">
                <span className="text-red-1 font-bold">8.</span> Do I have to
                take the test each time my license is going to expire?
              </p>
              <p className="p-4 mb-2 border-2 border-gray-200 text-gray-2  w-full">
                <span className="text-red-1 font-bold">9.</span> How many
                questions are on the test?
              </p>
              <p className="p-4 mb-2 border-2 border-gray-200 text-gray-2  w-full">
                <span className="text-red-1 font-bold">10.</span> How much time
                is given to complete the test?
              </p>
              <p className="p-4 mb-2 border-2 border-gray-200 text-gray-2  w-full">
                <span className="text-red-1 font-bold">11.</span> When will I
                get back my test results?{" "}
              </p>
              <p className="p-4 mb-2 border-2 border-gray-200 text-gray-2  w-full">
                <span className="text-red-1 font-bold">12.</span> When is the
                expiry date on my license? What is the cost of the license?{" "}
              </p>
              <p className="p-4 mb-2 border-2 border-gray-200 text-gray-2  w-full">
                <span className="text-red-1 font-bold">13.</span> Do I need to
                attend the CPR training if I already have the certification?
              </p>
              <div></div>
            </div>
            <SideBar />
          </div>
        </div>
      </div>
    );
  }
}

export default Training;
