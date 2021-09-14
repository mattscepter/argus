import axios from "axios";
import { useFormik } from "formik";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Alert from "../Components/Alert";
import { API } from "../../api";
import { getContact } from "../../helpers/contact";
import callus_logo from "./../../argus website/SVG/Call us now.svg";

const validate = (values) => {
  const errors = {};
  if (!values.name) {
    errors.name = "Required";
  }
  if (!values.phoneNumber) {
    errors.phoneNumber = "Required";
  } else if (values.phoneNumber.length < 4) {
    errors.phoneNumber = "Must be greater 4 numbers";
  } else if (values.phoneNumber.length > 14) {
    errors.phoneNumber = "Must be less than 14 numbers";
  }
  if (!values.message) {
    errors.message = "Required";
  }

  return errors;
};

const SideBar = () => {
  const [showAlert, setShowAlert] = useState({
    show: false,
    message: "",
    success: false,
  });

  const [contact, setContact] = useState({
    email: "",
    phoneNumber: "",
    address: "",
  });
  useEffect(() => {
    getContact().then((data) => {
      setContact({
        email: data?.email,
        phoneNumber: data?.phoneNumber,
        address: data?.address,
      });
    });
  }, []);

  const { getFieldProps, handleSubmit, errors } = useFormik({
    initialValues: {
      phoneNumber: "",
      name: "",
      message: "",
    },
    validate,
    onSubmit: (values, { resetForm }) => {
      axios
        .post(`${API}/contact-user/save`, values, {
          headers: {
            Accept: "application/JSON",
            "Content-Type": "application/JSON",
          },
        })
        .then((response) => {
          setShowAlert({
            show: true,
            message: "Message sent successfully",
            success: true,
          });
          resetForm();
        })
        .catch((err) => {
          setShowAlert({
            show: true,
            message: "Problem sending message",
            success: false,
          });
          resetForm();
        });
    },
  });

  return (
    <div className=" lg:w-1/3 md:w-1/2 px-6 lg:px-0 lg:pl-8 xl:pl-12 flex flex-col md:ml-auto w-full md:mt-0">
      <div className="text-gray-2 text-xl font-bold bg-gray-200 mb-8">
        <h1 className="font-bold bg-gray-3 text-white text-xl p-5"><span className="ml-8">Services</span></h1>
        <Link to="/services">
          <h1 className="rounded-lg py-5 pl-8 hover:bg-red-1 hover:text-white hover:rounded-md hover:shadow-button-inner">
            <span className="mx-4">➔</span> Residential Security
          </h1>
        </Link>
        <Link to="/services">
          <h1 className="rounded-lg py-5 pl-8 hover:bg-red-1 hover:text-white hover:rounded-md hover:shadow-button-inner">
            <span className="mx-4">➔</span> Commercial Security
          </h1>
        </Link>
        <Link to="/services">
          <h1 className="rounded-lg py-5 pl-8 hover:bg-red-1 hover:text-white hover:rounded-md hover:shadow-button-inner">
            <span className="mx-4">➔</span> Event Security
          </h1>
        </Link>
        <Link to="/training">
          <h1 className="rounded-lg py-5 pl-8 hover:bg-red-1 hover:text-white hover:rounded-md hover:shadow-button-inner">
            <span className="mx-4">➔</span> Security Guard License
          </h1>
        </Link>
        <Link to="/jobs">
          <h1 className="rounded-lg py-5 pl-8 hover:bg-red-1 hover:text-white hover:rounded-md hover:shadow-button-inner">
            <span className="mx-4">➔</span> Employment
          </h1>
        </Link>
      </div>
      <div className="w-full flex flex-col items-center text-center mx-auto px-10 py-10 bg-gray-200 mt-24 mb-8">
        <img src={callus_logo} alt="" className="w-56 -mt-32 mb-2 "/>
        <h1 className="text-2xl leading-relaxed font-bold text-gray-2 p-2 mb-4">
          Professional Help to get back your peace of mind
        </h1>
        <a
          className="w-full text-3xl p-4 text-white font-bold hover:bg-white border-3 bg-red-1 border-red-1 hover:text-red-1 rounded-lg mt-10 sm:mt-0 shadow-button-shadow-2"
          href={`tel:${contact.phoneNumber}`}
        >
          {contact.phoneNumber}
        </a>
      </div>
      <form className="bg-gray-200 px-10 py-10" onSubmit={handleSubmit}>
        {showAlert.show ? (
          <Alert alert={showAlert} rmAlert={setShowAlert} />
        ) : null}
        <input
          className="w-full mb-3 py-5 px-4 focus:outline-none focus:ring-1 ring-red-700"
          type="name"
          placeholder="Your Name"
          {...getFieldProps("name")}
        />
        {errors.name ? <div>{errors.name}</div> : null}
        <input
          className="w-full mb-3 py-5 px-4 focus:outline-none focus:ring-1 ring-red-700"
          type="telephone"
          placeholder="Phone Number"
          {...getFieldProps("phoneNumber")}
        />
        {errors.phoneNumber ? <div>{errors.phoneNumber}</div> : null}
        <textarea
          className="w-full h-56 mb-3 py-5 px-4 focus:outline-none focus:ring-1 ring-red-700"
          type="text"
          placeholder="Write Message"
          {...getFieldProps("message")}
        />
        {errors.message ? <div>{errors.message}</div> : null}
        <button
          type="submit"
          className="w-full text-xl px-4 py-5 text-white font-bold hover:bg-white border-3 bg-red-1 border-red-1 hover:text-red-1 rounded-lg mt-10 sm:mt-0 shadow-button-shadow-2"
        >
          SEND MESSAGE
        </button>
      </form>
    </div>
  );
};

export default SideBar;