import React, { Component } from "react";
import about_image from "./../../argus website/PNG/Video.png";
import SideBar from "./../Components/SideBar.jsx";
import AboutPageButtons from "../Components/AboutPageButtons";
import Header from "./../Partials/Header";
import Header2 from "./../Partials/Header2";
import Stickynav from "./../Partials/Stickynav";
import MobileHeader from "../Partials/MobileHeader";
import Teams from "../Components/TeamsSection";

class About extends Component {
  render() {
    return (
      <div className="font-for-para">
        <Header />
        <Header2 />
        <Stickynav />
        <MobileHeader />

        <div className="text-gray-600 body-font bg-no-repeat bg-cover bg-aboutbg">
          <div className="container mx-auto flex px-5 py-40 items-center justify-center flex-col">
            <div className="text-center lg:w-2/3 w-full">
              <h1 className="title-font sm:text-6xl text-3xl mb-4 font-bold font-for-para text-white">
                ABOUT US
              </h1>
            </div>
          </div>
        </div>

        <div className="px-4 py-6 mx-auto sm:px-20 mb:px-1 lg:px-40 xl:px-48 2xl:px-0 max-w-1366 bg-no-repeat bg-mapbg">
          <div className="flex flex-wrap my-12">
            <div className=" md:w-1/2 lg:w-2/3 flex flex-col items-start">
              <img src={about_image} alt="About page" className="w-full h-full"/>
              <div className="flex flex-row items-stretch w-full mt-8 mb-8">
                <span className="h-auto w-2 bg-red-1 mr-7"></span>
                <h1 className="leading-tight text-3xl sm:text-4xl font-bold text-gray-3">
                Objective
                </h1>
              </div>
              <p className="leading-relaxed text-lg font-medium text-gray-2 mb-6">
                Argus Security began as a team of protection specialists from
                different public and private backgrounds with the aim of
                delivering the highest quality of service at the most
                competitive rates. We are a growing security firm that operating
                in Ontario. Our team prioritizes its client satisfaction by
                rightfully addressing their security needs. Our well-trained
                security guards bring forth the professionalism that enables us
                to successfully serve and protect our clients.
              </p>
              <p className="leading-relaxed text-lg font-medium text-gray-2 mb-6">
                In an environment with growing rules and regulations, Argus
                understands the importance of ensuring the team is adherent to
                company rules and regulations. We ensure trust and integrity is
                embodied in all the business we conduct. As a team, we ensure
                our clients are the direct beneficiaries of our policies and
                procedures. With Argus, we promise you the finest experience,
                unmatched skills, and professionalism that will continuously set
                us apart in the security services industry. Argus Security has
                been successfully providing premium Security, Loss Prevention,
                and Investigation.
              </p>

              <AboutPageButtons />

              <div className="flex flex-row items-stretch w-full mt-8 mb-8">
                <span className="h-auto w-2 bg-red-1 mr-7"></span>
                <h1 className="leading-tight text-3xl sm:text-4xl font-bold text-gray-3">
                Why Us?
                </h1>
              </div>
              <p className="leading-relaxed text-lg font-medium text-gray-2 mb-6">
                Our mission is to provide great customer experience and superior
                protection service. Our values are to deliver our service with
                honor, integrity, and dignity. Argus Security is a
                well-established and technologically advanced security service
                provider
              </p>
              <p className="leading-relaxed text-lg font-medium text-gray-2 mb-6">
                Argus Security provides clients with superior security services
                for healthcare facilities, residential and commercial buildings,
                and retail loss prevention. Our services package delivery
                management, parking enforcement, access control, camera
                monitoring, and performing periodic patrols.
              </p>
              <ul className="text-gray-2 font-medium text-lg flex flex-col md:flex-row mb-8">
                <div className="">
                  <li className="my-0.5">
                    <span className="text-red-1 font-bold mr-2">✓</span> Optimized
                    Mobile Patrols
                  </li>
                  <li className="my-0.5">
                    <span className="text-red-1 font-bold mr-2">✓</span> Fool Proof
                    Checkpoints{" "}
                  </li>
                  <li className="my-0.5">
                    <span className="text-red-1 font-bold mr-2">✓</span> GPS Tracking
                  </li>
                </div>
                <div className="md:ml-10">
                  <li className="my-0.5">
                    <span className="text-red-1 font-bold mr-2">✓</span> Reliable
                    Fire Watch
                  </li>
                  <li className="my-0.5">
                    <span className="text-red-1 font-bold mr-2">✓</span> Tangible
                    Proof of Service{" "}
                  </li>
                  <li className="my-0.5">
                    <span className="text-red-1 font-bold mr-2">✓</span> Efficient
                    Dispatching System{" "}
                  </li>
                </div>
              </ul>
              <div></div>
            </div>
            <SideBar />
          </div>
        </div>
        <Teams />
      </div>
    );
  }
}

export default About;