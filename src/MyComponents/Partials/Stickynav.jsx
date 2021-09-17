import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "./../../argus website/SVG/logosvg.svg";
import Scroll from "./../../argus website/SVG/Scroll up.svg";
import gsap from "gsap";

const Stickynav = () => {
  const [open, setOpen] = useState(false);

  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (
      document.body.scrollTop > 170 ||
      document.documentElement.scrollTop > 170
    ) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <div className="fixed top-0 w-full ">
        <div
          className={
            open
              ? "transition-all opacity-100 duration-700 transform translate-y-0"
              : "transition-all opacity-0 duration-700 transform -translate-y-40"
          }
        >
          <div
            className={
              open
                ? "transition-all opacity-100 duration-200"
                : "transition-all opacity-0 duration-200"
            }
          >
            <div className="bg-red-1 w-full">
              <div className="hidden lg:block w-full px-4 sm:px-8 md:px-16 lg:px-28 xl:px-48 text-l fixed top-0 bg-red-1 font-for-para shadow-lg z-50">
                <Link to="/react">
                  <img src={Logo} alt="" className="w-24 fixed top-1 left-2" />
                </Link>

                <nav class="flex flex-wrap items-center text-base font-for-para font-bold">
                  <Link
                    to="/about"
                    className="w-1/5 text-white py-4 text-center bg-hover bg-opacity-20 hover:bg-hover"
                  >
                    ABOUT
                  </Link>

                  <Link
                    to="/services"
                    className="w-1/5 text-white py-4 text-center bg-hover bg-opacity-20 hover:bg-hover"
                  >
                    SERVICES
                  </Link>

                  <Link
                    to="/jobs"
                    className="w-1/5 text-white py-4 text-center bg-hover bg-opacity-20 hover:bg-hover"
                  >
                    JOBS
                  </Link>

                  <Link
                    to="/training"
                    className="w-1/5 text-white py-4 text-center bg-hover bg-opacity-20 hover:bg-hover"
                  >
                    COURSE
                  </Link>

                  <Link
                    to="/contact"
                    className="w-1/5 text-white py-4 text-center bg-hover bg-opacity-20 hover:bg-hover"
                  >
                    CONTACT
                  </Link>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-12 fixed bottom-4 right-4">
        <div
          className={
            open
              ? "transition opacity-100 duration-500 transform translate-y-0"
              : "transition opacity-0 duration-500 transform -translate-y-full"
          }
        >
          <div
            className={
              open
                ? "transition-all opacity-100 duration-200"
                : "transition-all opacity-0 duration-200"
            }
          >
            <button onClick={scrollToTop}>
              <img src={Scroll} alt="" className="w-12 shadow-lg" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stickynav;
