import React from "react";

import accountable from "./../../argus website/SVG/2. Accountable.svg";
import { Link } from "react-router-dom";
import section4_img1 from "./../../argus website/PNG/Video1.png";
import section4_img2 from "./../../argus website/PNG/3.Charlie.png";
import quotes from "../../argus website/SVG/Appostrophies square.svg";
import signature from "./../../argus website/SVG/01.svg";
import section6 from "./../../argus website/PNG/sdm.png";
import section4img from "./../../argus website/PNG/raw-2_edited.png";
import section5 from "./../../argus website/PNG/0000000.png";
import image1 from "./../../argus website/PNG/raw-2_edited.png";
import camera from "./../../argus website/SVG/3. camera.svg";
import Header from "./../Partials/Header";
import HeaderHome from "../Partials/HeaderHome";
import Stickynav from "./../Partials/Stickynav";
import MobileHeader from "../Partials/MobileHeader";
import EmployeeMonth from "../Components/EmployeeMonth";
import ClientTestimonial from "../Components/ClientTestimonial";
import ClientCorousal from "../Components/ClientCorousal";
import { useSelector } from "react-redux";
import SideLine from "../Components/SideLine";
import { useRef } from "react";
import useOnScreen from "../../helpers/onScreen";

export default function Home() {
  const contact = useSelector((state) => state.contact);
  const testimonial = useSelector((state) => state.testimonial.testimonial);

  const ref1 = useRef();
  const isWhiteLineVisible = useOnScreen(ref1);

  const ref2 = useRef();
  const isQouteVisible = useOnScreen(ref2);

  return (
    <div className="font-for-para">
      <Header />
      <HeaderHome />
      <Stickynav />
      <MobileHeader />

      {/* Section 1 */}
      <div className="">
        <div className="py-24 sm:py-64 px-4 sm:px-8 md:px-16 lg:px-32 xl:px-48 bg-center bg-no-repeat bg-hero bg-cover"></div>
      </div>

      {/* Section 2 CAll Us */}
      <div className="px-4 sm:px-8 md:px-12 2xl:px-0 mx-auto max-w-1366">
        <div className="flex flex-col sm:flex-row sm:items-end mx-auto">
          <h1 className="flex-grow sm:pr-16 text-4xl font-bold font-for-para text-gray-400">
            Call Us <br />
            <a className="text-red-1 text-4xl sm:text-6xl font-bold" href={`tel:${contact.phoneNumber}`}>
              {contact.phoneNumber}
            </a>
          </h1>
          <button className="flex-shrink-0 font-bold text-white bg-red-1 py-5 px-4 md:px-12 hover:bg-white border-4 border-double  border-red-1 hover:text-red-1 rounded-lg text-lg mt-10 sm:mt-0 hover:shadow-button-inner">
            DISCOVER MORE
          </button>
        </div>
      </div>

      {/* Section 3  Accountable */}
      <div className="text-gray-600 font-for-para overflow-hidden mx-auto">
        <div className="flex flex-col md:flex-row px-4 sm:px-8 lg:px-12 2xl:px-0 mx-auto max-w-1366 pt-4 pb-2 mt-8 text-white justify-center">
          <div className="bg-red-1 w-full md:w-6/12 px-3 py-5 flex flex-row items-center justify-start">
            <img src={accountable} alt="" className="w-16 p-1 mx-4 sm:mx-10" />
            <div className="text-lg">
              <p>100% Accountable</p>
              <h1 className="font-bold">Know the Truth for Peace of Mind</h1>
            </div>
          </div>
          <div className="bg-gray-3 w-full md:w-6/12 px-3 py-5 flex flex-row items-center justify-start">
            <img src={accountable} alt="" className="w-16 p-1 mx-4 sm:mx-10" />
            <div>
              <p>100% Accountable</p>
              <h1 className="font-bold">Direct Updates Regarding Incidents</h1>
            </div>
          </div>
        </div>
      </div>

      {/* Section 4 Introducing Argus Security */}
      <div className="bg-contain bg-no-repeat bg-mapbg2 font-for-para">
        <div className="px-4 sm:px-8 lg:px-12 2xl:px-0 mx-auto max-w-1366 pt-12 pb-28 font-for-para">
          <div className="flex flex-wrap items-center">
            <div className="items-end w-full md:w-1/2 flex flex-col md:pr-4 lg:pr-12">
              <img
                src={section4_img1}
                alt="Argus Security Services"
                className="w-full xl:w-11/12 pb-8 border-b-8 border-red-1 lg:mr-auto"
              />
              <img
                src={section4_img2}
                alt="Argus Security Services"
                className="bg-white w-8/12 pt-4 pl-4 -mt-36 md:-md-40 lg:-mt-52 xl:-mt-80"
              />
            </div>
            <div className="md:pl-3 w-full md:w-1/2 flex flex-col items-start">
              <div className="flex flex-row items-stretch w-full mt-8 md:mt-0 mb-8">
                <SideLine />
                <h1 className="leading-tight text-3xl lg:text-4xl font-bold text-gray-3">
                  Introducing Argus Security Services
                </h1>
              </div>
              <p className="leading-normal text-base lg:text-lg font-medium text-gray-2 mb-8">
                Argus Security ensures the team adherence to company rules and
                regulations. Our goal is to make our clients the direct
                beneficiaries of our policies and procedures.{" "}
              </p>
              <ul className="text-gray-2 font-medium text-base lg:text-lg flex flex-col md:flex-row mb-4">
                <div>
                  <li className="flex flex-row items-start my-0.5">
                    <span className="text-red-1 font-bold mr-2">✓</span>{" "}
                    Optimized Mobile Patrols
                  </li>
                  <li className="flex flex-row items-start my-0.5">
                    <span className="text-red-1 font-bold mr-2">✓</span> Fool
                    Proof Checkpoints
                  </li>
                  <li className="flex flex-row items-start my-0.5">
                    <span className="text-red-1 font-bold mr-2">✓</span> GPS
                    Tracking
                  </li>
                </div>
                <div className="md:ml-12">
                  <li className="flex flex-row items-start my-0.5">
                    <span className="text-red-1 font-bold mr-2">✓</span>{" "}
                    Reliable Fire Watch
                  </li>
                  <li className="flex flex-row items-start my-0.5">
                    <span className="text-red-1 font-bold mr-2">✓</span>{" "}
                    Tangible Proof of Service
                  </li>
                  <li className="flex flex-row items-start my-0.5">
                    <span className="text-red-1 font-bold mr-2">✓</span>{" "}
                    Efficient Dispatching System
                  </li>
                </div>
              </ul>
              <div>
                <div className="px-2 py-2 mx-auto">
                  <div className="w-full text-left">
                    <img
                      src={quotes}
                      alt=""
                     ref={ref2}
                      className={`w-8 inline-block text-red-1 ml-4 -mb-6 ${
                        isQouteVisible
                          ? "transition ease-out delay-300 duration-500 transform origin-top scale-100"
                          : "transition ease-out delay-750 duration-500 transform origin-top scale-0"
                      }  motion-safe:animate-scaleIn`}
                    />
                    <p className="leading-relaxed text-lg lg:text-xl font-medium text-gray-2 bg-gray-200 px-12 py-8 shadow-speech">
                      Success is not result of the amount of time we put in,
                      instead its the quality of time we put in.
                    </p>
                    <div class="w-11 overflow-hidden inline-block -mb-4">
                      <div class=" h-16 bg-gray-200 rotate-60 transform origin-top-right shadow-speech-2"></div>
                    </div>
                    <div className="pb-4 flex items-center ">
                      <img
                        src={section4img}
                        className="w-20 h-20 p-1 border-2 border-red-1"
                        alt=""
                      />
                      <div className="ml-8">
                        <img src={signature} alt="" className="w-60" />
                        <p className="text-gray-3 text-base lg:text-lg font-bold">
                          CEO & CO FOUNDER
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img src={camera} alt="" className="w-40 h-40 ml-auto -mt-36" />
      </div>

      {/* Section 5 Services */}
      <div className="bg-repeat-x bg-siren bg-top bg-contain">
        <div className="px-4 sm:px-8 lg:px-12 2xl:px-0 mx-auto max-w-1366 pt-24 pb-12 font-for-para">
          <div className="flex flex-wrap pb-8">
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

          <div className="flex flex-wrap justify-center text-center mb-16 ">
            <div className="group p-4 sm:w-96">
              <div className="h-full overflow-hidden ">
                <img
                  className="lg:h-72 md:h-36 w-full object-cover object-center rounded-2xl mb-10"
                  src={image1}
                  alt="blog"
                />
                <div className=" mx-2.5 -mt-10 z-10">
                  <Link to="/services">
                    <div className="bg-white border-4 rounded-xl group-hover:bg-gray-200 duration-300">
                      <h1 className="title-font text-lg font-medium text-white p-3 mb-3 bg-center bg-no-repeat bg-shape1 bg-contain md:bg-cover lg:bg-contain z-auto -mt-7">
                        GATED COMMUNITY
                      </h1>
                      <p className="leading-loose text-gray-2 px-6 py-6">
                        NFS marked vehicles, communication between residents &
                        security staff and efficient use of technology
                      </p>
                    </div>
                    <button className="w-full p-4 text-black rounded-xl bg-gray-200 group-hover:bg-red-1 group-hover:text-white">
                      Read More
                    </button>
                  </Link>
                </div>
              </div>
            </div>

            <div className="p-4 sm:w-96">
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
                  <Link to="/services">
                    <button className="w-full p-4 text-black rounded-xl bg-gray-200 hover:bg-red-1 hover:text-white">
                      Read More
                    </button>
                  </Link>
                </div>
              </div>
            </div>

            <div className="p-4 sm:w-96">
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
                  <Link to="/services">
                    <button className="w-full p-4 text-black rounded-xl bg-gray-200 hover:bg-red-1 hover:text-white">
                      Read More
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full sm:w-9/12 mx-auto flex items-center py-3">
            <img src={section5} className="w-24 h-24" alt="" />
            <div className="-mt-20 -ml-6">
              <svg
                className="w-14 h-14 bg-white rounded-xl"
                xmlns="http://www.w3.org/2000/svg"
                width="85.04"
                height="85.003"
                viewBox="0 0 85.04 85.003"
              >
                <g
                  id="Phone_logo"
                  data-name="Phone logo"
                  transform="translate(-36.779 -122.722)"
                >
                  <g
                    id="Group_7"
                    data-name="Group 7"
                    transform="translate(36.779 122.722)"
                  >
                    <path
                      id="Path_220"
                      data-name="Path 220"
                      d="M79.314,207.685c-9.468,0-18.936-.114-28.4.039A14.16,14.16,0,0,1,36.9,196.274a9.917,9.917,0,0,1-.072-1.8c0-19.279.081-38.557-.051-57.835a14,14,0,0,1,10.785-13.589,12.738,12.738,0,0,1,2.8-.316q28.778-.027,57.553-.012a13.774,13.774,0,0,1,13.6,11.835,25.224,25.224,0,0,1,.283,3.559q.027,27.564.012,55.131a14.357,14.357,0,0,1-11.7,14.357,8.32,8.32,0,0,1-1.646.075Q93.888,207.691,79.314,207.685ZM83,180.3c-.566-.361-1.185-.683-1.724-1.107A60.382,60.382,0,0,1,67.9,164.642c-1.1-1.685-.969-2.452.6-3.643,1.224-.927,2.44-1.871,3.664-2.8a1.574,1.574,0,0,0,.379-2.365,27.928,27.928,0,0,0-3.054-4.206,85.954,85.954,0,0,0-6.559-5.858,2.692,2.692,0,0,0-3.8.274c-3.761,3.634-5.355,8.042-4.242,13.207,2.184,10.163,7.1,18.683,15.545,24.956A37.953,37.953,0,0,0,92.9,192.191c3.288.054,7.287-2.72,8.267-5.6a3.33,3.33,0,0,0-.223-2.635,30.807,30.807,0,0,0-9.465-8.319,2.876,2.876,0,0,0-3.5.2C86.338,177.218,84.78,178.695,83,180.3Zm-4.134-37.973c2.323.3,4.407.445,6.441.848,7.867,1.552,13.24,6.2,16.384,13.5,2.5,5.794,3.18,11.932,3.264,18.159.018,1.282.692,1.938,1.781,1.91a1.6,1.6,0,0,0,1.643-1.892c-.129-2.034-.2-4.074-.3-6.11a38.941,38.941,0,0,0-3.075-13.406c-2.99-7.07-7.964-12.16-15.358-14.666a31.836,31.836,0,0,0-13.92-1.489c-1.965.22-3.923.539-5.861.939a1.577,1.577,0,0,0-1.258,1.925,1.476,1.476,0,0,0,1.622,1.4,9.98,9.98,0,0,0,1.342-.081C74.076,143.017,76.573,142.653,78.871,142.325Zm.4,8.273c-.563,0-1.462-.009-2.365.006a2.7,2.7,0,0,0-.575.15c-1.643.412-2.262,1.107-1.995,2.232.241,1.011,1.393,1.465,2.84,1.249A13.993,13.993,0,0,1,80.436,154a11.8,11.8,0,0,1,8.505,4.037c2.975,3.607,4.158,7.93,4.609,12.488a1.874,1.874,0,0,0,1.862,1.916,1.66,1.66,0,0,0,1.607-2.172,64.193,64.193,0,0,0-1.934-8.514C92.668,154.783,87.087,150.253,79.271,150.6Z"
                      transform="translate(-36.779 -122.722)"
                      fill="#ba0913"
                    />
                  </g>
                </g>
              </svg>
            </div>
            <div className="mx-auto px-4 py-4">
              <h2 className="leading-loose text-l font-medium text-gray-2">
                24 HOURS SERVICE AVAILABLE
              </h2>
              <p className="text-lg title-font font-bold text-gray-900">
                Have any questions? Feel free to contact our office today at{" "}
                <a className="text-red-1 text-2xl" href={`tel:${contact.phoneNumber}`}>{contact.phoneNumber}</a>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Section 6 Know you partners */}
      <div className="bg-cover bg-black-1 overflow-hidden">
        <div className="text-white body-font px-4 sm:px-8 lg:px-12 2xl:px-0 mx-auto max-w-1500 font-for-para pt-16 bg-triangles bg-no-repeat bg-left-top">
          <div className="px-5">
            <div className="flex flex-col-reverse md:flex-row items-stretch">
              <div className="bg-handcuffs bg-contain bg-center bg-opacity-10 bg-no-repeat flex items-end">
                <img
                  src={section6}
                  alt="Argus Security"
                  className="object-fill"
                />
              </div>
              <div className="w-full lg:w-1/2 p-4 flex flex-col items-start">
                <div className="flex flex-row items-stretch w-full mt-8 md:mt-0 mb-8">
                  <SideLine />
                  <h1 className="leading-tight text-3xl lg:text-4xl font-bold text-white">
                    Know your
                    <br />
                    Partners-in-Protection
                  </h1>
                </div>
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between">
                  <button className="px-6 py-4 text-sm font-bold bg-red-1 border border-black-1 bg-opacity-100 hover:bg-opacity-40 rounded-lg">
                    OUR TEAM
                  </button>
                  <button className="px-6 py-4 text-sm font-bold bg-red-1 border my-4 sm:m-4 border-black-1 bg-opacity-100 hover:bg-opacity-40 rounded-lg">
                    CONTACT US
                  </button>
                  <button className="px-6 py-4 text-sm font-bold bg-red-1 border border-black-1 bg-opacity-100 hover:bg-opacity-40 rounded-lg">
                    ARGUS HIERARCHY
                  </button>
                </div>
                <p className="leading-loose text-lg py-6 xl:pr-24 mb-2">
                  At Argus Security Services we maintain a prominent level of
                  training for our guards in response to our highly sensitive
                  sites. We offer 24/7 fast and reliable security services.
                  Qualifications of our Directors are as follows:
                </p>
                <div className="flex items-center flex-wrap pb-4 mb-4 mt-auto w-full">
                  <div>
                    <img
                      src={section4img}
                      className="w-44 lg:w-28 xl:w-40 mr-8"
                      alt=""
                    />
                  </div>
                  <div>
                    <ul className="py-4 text-sm font-bold">
                      <li className="flex flex-row items-start py-1">
                        <span className="text-red-1 font-bold mr-2">✓</span>{" "}
                        Member of Law society of Ontario
                      </li>
                      <li className="flex flex-row items-start py-1">
                        <span className="text-red-1 font-bold mr-2">✓</span>{" "}
                        Police Foundation Certified
                      </li>
                      <li className="flex flex-row items-start py-1">
                        <span className="text-red-1 font-bold mr-2">✓</span> 7
                        Years of Security Experience
                      </li>
                      <li className="flex flex-row items-start py-1">
                        <span className="text-red-1 font-bold mr-2">✓</span>{" "}
                        Sometimes buys me Coffee
                      </li>
                      <li className="flex flex-row items-start py-1">
                        <span className="text-red-1 font-bold mr-2">✓</span>{" "}
                        Good Taste in Movies
                      </li>
                      <li className="flex flex-row items-start py-1">
                        <span className="text-red-1 font-bold mr-2">✓</span>{" "}
                        Good Guy Though{" "}
                      </li>
                    </ul>
                  </div>
                </div>
                <img src={signature} alt="" className="w-96 lg:-ml-72" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section 7 Covid 19 CTA */}
      <div className="bg-red-1 bg-repeat-y bg-cta-bg bg-top bg-stretch-x bg bg-blend-multiply">
        <div className="px-4 sm:px-8 lg:px-12 2xl:px-0 mx-auto max-w-1366 py-4 md:py-12 flex flex-col md:flex-row justify-around items-stretch md:items-center font-for-para">
          <div className="flex flex-row items-stretch w-full mt-8 md:mt-0 mb-2 md:mb-0">
            <span
              ref={ref1}
              className={`h-auto min-w-8 w-8-px max-w-8 bg-white mr-7 ${
                isWhiteLineVisible
                  ? "transition ease-out delay-300 duration-500 transform origin-top scale-100"
                  : "transition ease-out delay-750 duration-500 transform origin-top scale-0"
              }  motion-safe:animate-scaleIn`}
            ></span>
            <h1 className="text-3xl lg:text-4xl lex-grow sm:pr-28 font-bold text-white leading-tight">
              Covid 19 Procedures and much more to safeguard your business.
            </h1>
          </div>
          <button className="flex-shrink-0 font-bold text-white py-5 px-12 focus:outline-none hover:bg-white border-4 border-double border-white hover:text-red-1 rounded-lg text-lg mt-6 mb-8 md:mt-0 md:mb-0 hover:shadow-button-inner">
            DISCOVER MORE
          </button>
        </div>
      </div>

      {/* Section 8 Client Testimonial */}
      <ClientTestimonial testimonial={testimonial} />

      {/* Section 9 Employee of the Month */}
      <EmployeeMonth />

      {/* Section 10 Sponsors */}
      <ClientCorousal />
    </div>
  );
}
