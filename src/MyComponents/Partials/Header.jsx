import React, { useState } from "react";
import Logo from "./../../argus website/SVG/logosvg.svg";
import { Link } from "react-router-dom";
import LogIn from "../User/LogIn";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <div className="shadow-lg sticky">
      <div className="bg-red-1 shadow-header-outer-shadow">
        <div className="bg-red-1 bg-no-repeat bg-header-bg bg-center bg-stretch-x bg-blend-multiply">
          <div className="hidden lg:block px-4 sm:px-8 lg:px-12 2xl:px-0 mx-auto max-w-1366 text-base">
            <div className="flex flex-row items-center mx-auto justify-between font-bold border-white font-for-para">
              <nav className="flex flex-row items-center">
                <Link
                  to="/technology"
                  className="text-white border-4 border-white rounded px-6 lg:px-5 2xl:px-10 py-3.5 mr-3.5 2xl:mr-8 hover:bg-white hover:text-red-1 hover:shadow-header-outer-shadow"
                >
                  Technology
                </Link>
                <Link
                  to="/Training"
                  className="text-white border-4 border-white rounded px-4 2xl:px-9  py-3.5 hover:bg-white hover:text-red-1 hover:shadow-header-outer-shadow"
                >
                  Get Your Security Guard License
                </Link>
              </nav>
              <Link to="/react">
                <img
                  src={Logo}
                  alt="Logo of Argus Security"
                  className="w-28 my-2"
                />
              </Link>
              <nav className="flex flex-row items-center">
                <button
                  open={open}
                  onClick={() => setOpen(true)}
                  className="text-white border-4 font-bold border-white rounded px-2 2xl:px-5 py-3.5 mr-3 2xl:mr-8 hover:bg-white hover:text-red-1 hover:shadow-header-outer-shadow"
                >
                  Student Portal
                </button>
                <Link
                  to="/dashboard/student/home"
                  className="text-white border-4 border-white rounded px-2 2xl:px-5 py-3.5 mr-3 2xl:mr-8 hover:bg-white hover:text-red-1 hover:shadow-header-outer-shadow"
                >
                  Client Portal
                </Link>
                <Link
                  to="/dashboard/admin/home"
                  className="text-white border-4 border-white rounded px-2 2xl:px-5 py-3.5 hover:bg-white hover:text-red-1 hover:shadow-header-outer-shadow"
                >
                  Employee Portal
                </Link>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <LogIn open={open} setOpen={setOpen} />
    </div>
  );
}
