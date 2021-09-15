import React, { Component } from "react";
import about_image from "./../../../argus website/PNG/Video.png";
import { Link } from "react-router-dom";
import TechPageButtons from "./../../Components/TechPageButtons.jsx";
import SideBar from "./../../Components/SideBar.jsx";
import Header from "./../../Partials/Header";
import Header2 from "./../../Partials/Header2";
import Stickynav from "./../../Partials/Stickynav";
import MobileHeader from "./../../Partials/MobileHeader";

class ReportsData extends Component {
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
                REPORTS & DATA
              </h1>
            </div>
          </div>
        </div>

        <div className="container px-4 py-6 mx-auto sm:px-20 mb:px-1 lg:px-40 xl:px-48 bg-no-repeat bg-mapbg">
          <div className="flex flex-wrap my-12">
            <div className=" md:w-1/2 lg:w-2/3 flex flex-col items-start">
              <img src={about_image} alt="About page" />

              <div className="flex flex-row items-stretch w-full mt-8 mb-8">
                <span className="h-auto w-2 bg-red-1 mr-7"></span>
                <h1 className="leading-tight text-3xl sm:text-4xl font-bold text-gray-3">
                Digital Reporting Made Easy
                </h1>
              </div>
              <p className="leading-relaxed text-lg font-medium text-gray-2 mb-6">
                Organizing information collected from the field into
                client-ready, valuable reports can be a difficult process.
                Traditional security reports like messy, handwritten Daily
                Activity Reports (DARs) and out-dated forms can make this
                process even harder. Silvertrac builds detailed reports
                automatically to reinforce the value that quality security
                services bring to a client’s operation.
              </p>

              <div className="flex flex-row items-stretch w-full mt-8 mb-8">
                <span className="h-auto w-2 bg-red-1 mr-7"></span>
                <h1 className="leading-tight text-3xl sm:text-4xl font-bold text-gray-3">
                Four-in-One Reporting
                </h1>
              </div>
              <p className="leading-relaxed text-lg font-medium text-gray-2 mb-6">
                Every time a guard completes an assigned task, updates a daily
                log, or hits a checkpoint. A small amount of information is sent
                to your dashboard and can be turned into branded company reports
                based on your criteria. Silvertac has four types of reporting
                available to help make better business decisions every day:{" "}
              </p>

              <ul className="text-gray-2 text-lg">
                <li className="my-0.5">
                  <span className="font-bold text-red-1 mr-2">✓</span> Daily
                  Activity Reports
                </li>
                <li className="my-0.5">
                  <span className="font-bold text-red-1 mr-2">✓</span> Shift
                  Reports{" "}
                </li>
                <li className="my-0.5">
                  <span className="font-bold text-red-1 mr-2">✓</span>{" "}
                  Checkpoint Reports{" "}
                </li>
                <li className="my-0.5">
                  <span className="font-bold text-red-1 mr-2">✓</span> Summary
                  Reports{" "}
                </li>
              </ul>

              <div className="flex flex-row items-stretch w-full mt-8 mb-8">
                <span className="h-auto w-2 bg-red-1 mr-7"></span>
                <h1 className="leading-tight text-3xl sm:text-4xl font-bold text-gray-3">
                Daily Activity Reports
                </h1>
              </div>
              <p className="leading-relaxed text-lg font-medium text-gray-2 mb-6">
                Daily Activity Reports (DARs) can pull activity that fits unique
                criteria on any property within user-identified timeframes. In
                any report pulled, each entry will have: the reporting guard,
                notes, photos and/or audio, GPS location, and a timestamp. Daily
                Activity Reports also automatically update during every shift
                and can be automatically sent at the end of every day, week, or
                month. Plus, everything is color coded, allowing owners and
                clients both to catch up on different types of{" "}
              </p>

              <div className="flex flex-row items-stretch w-full mt-8 mb-8">
                <span className="h-auto w-2 bg-red-1 mr-7"></span>
                <h1 className="leading-tight text-3xl sm:text-4xl font-bold text-gray-3">
                User Shift Reports
                </h1>
              </div>
              <p className="leading-relaxed text-lg font-medium text-gray-2 mb-6">
                Shift Reports are powerful rundowns that show officer activity
                as they move from property-to-property. Check arrival times,
                departures, and issues sent during any{" "}
              </p>

              <div className="flex flex-row items-stretch w-full mt-8 mb-8">
                <span className="h-auto w-2 bg-red-1 mr-7"></span>
                <h1 className="leading-tight text-3xl sm:text-4xl font-bold text-gray-3">
                Checkpoint Reports
                </h1>
              </div>
              <p className="leading-relaxed text-lg font-medium text-gray-2 mb-6">
                Checkpoint Reports show how a tour goes onsite and provide all
                the information needed to send better reports faster. Track
                where guards are with live GPS mapping and see what they are
                reporting in real time{" "}
              </p>

              <div className="flex flex-row items-stretch w-full mt-8 mb-8">
                <span className="h-auto w-2 bg-red-1 mr-7"></span>
                <h1 className="leading-tight text-3xl sm:text-4xl font-bold text-gray-3">
                Summary Reports
                </h1>
              </div>
              <p className="leading-relaxed text-lg font-medium text-gray-2 mb-6">
                Summary Reports give insights into issues in the field by
                showing every issue at a property and the number of times each
                issue or action has been reported during a certain time frame.
                Monthly, Quarterly and Annual Summaries provide a simple,
                comprehensive look at everything a team does on behalf of
                clients. We use these to justify costs, identify current
                challenges, and reinforce the difference services are making on
                site
              </p>

              <TechPageButtons />

              <div></div>
            </div>
            <SideBar />
          </div>
        </div>
      </div>
    );
  }
}

export default ReportsData;