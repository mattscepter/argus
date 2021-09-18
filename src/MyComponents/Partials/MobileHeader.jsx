import React from "react";
import { Link } from "react-router-dom";
import logo from "./../../argus website/PNG/Logo Vectors.png";
import Hamburger from "./Hamburger";

export default function MobileHeader({ open, setOpen }) {
  return (
    <div className="w-full shadow-xl sticky top-0 z-50 ">
      <div className=" h-16 lg:hidden bg-red-1 flex flex-row justify-between items-center">
        <Link to="/">
          <img
            src={logo}
            alt="Logo of Argus Security"
            className="w-24 mx-4 my-3 fixed top-2 left-2 z-50"
          />
        </Link>
      </div>
      <Hamburger open={open} setOpen={setOpen} />
    </div>
  );
}
