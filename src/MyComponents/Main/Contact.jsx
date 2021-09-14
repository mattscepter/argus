import React, { useEffect, useState } from "react";
import Header from "./../Partials/Header";
import Header2 from "./../Partials/Header2";
import Stickynav from "./../Partials/Stickynav";
import MobileHeader from "../Partials/MobileHeader";
import fleet from "./../../argus website/PNG/use copy 2.jpg";
import CompanyContact from "./../Components/CompanyContact";
import Alert from "../Components/Alert";
import { API } from "../../api";
import { useFormik } from "formik";
import axios from "axios";

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

const Contact = () => {
  const [showAlert, setShowAlert] = useState({
    show: false,
    message: "",
    success: false,
  });

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
    <div>
      <Header />
      <Header2 />
      <Stickynav />
      <MobileHeader />

      <div className="text-gray-600 body-font bg-no-repeat bg-cover bg-jobsbg">
        <div className="container mx-auto flex px-5 py-40 items-center justify-center flex-col">
          <div className="text-center lg:w-2/3 w-full">
            <h1 className="title-font sm:text-6xl text-3xl mb-4 font-medium text-white">
              CONTACT
            </h1>
          </div>
        </div>
      </div>

      <div className="overflow-hidden bg-no-repeat bg-mapbg">
        <div className="container px-4 py-20 mx-auto sm:px-20 mb:px-26 lg:px-40 xl:px-48">
          <img src={fleet} alt="Security Cars" className="w-full"/>
          <div className="flex items-start my-12 ">
            <div className="p-2 md:w-1/4 flex flex-col items-start text-lg font-medium text-gray-2">
              <div className="flex flex-row items-stretch w-full mb-6">
                <span className="h-auto w-2 bg-red-1 mr-6"></span>
                <h1 className="leading-tight text-4xl title-font font-bold text-gray-3">
                  How can we help?
                </h1>
              </div>
              <p className="leading-normal text-lg font-medium text-gray-2 mb-6">
                We are experiencing longer than usual response times due to
                Covid-19. We appreciate your patience and apologize in advance
                for any delays in responding to your message.{" "}
              </p>
              <hr class="border-1 border-gray-600 w-11/12 my-3" />

              <CompanyContact />
            </div>
            <form className="bg-gray-200 p-6 w-3/4" onSubmit={handleSubmit}>
              {showAlert.show ? (
                <Alert alert={showAlert} rmAlert={setShowAlert} />
              ) : null}
              <input
                className="w-full mb-1.5 mt-1.5 py-5 px-4 focus:outline-none focus:ring-1 ring-red-1"
                type="name"
                placeholder="Your Name"
                {...getFieldProps("name")}
              />
              {errors.name ? <div>{errors.name}</div> : null}
              <input
                className="w-full mb-1.5 mt-1.5 py-5 px-4 focus:outline-none focus:ring-1 ring-red-1"
                type="telephone"
                placeholder="Phone Number"
                {...getFieldProps("phoneNumber")}
              />
              {errors.phoneNumber ? <div>{errors.phoneNumber}</div> : null}
              <textarea
                className="w-full h-56 mb-1.5 mt-1.5 py-5 px-4 focus:outline-none focus:ring-1 ring-red-1"
                type="text"
                placeholder="Write Message"
                {...getFieldProps("message")}
              />
              {errors.message ? <div>{errors.message}</div> : null}
              <button
                type="submit"
                className="w-full p-4 mt-1.5 rounded-lg border text-white bg-red-1 hover:bg-white hover:text-red-1 hover:border-red-1"
              >
                SEND MESSAGE
              </button>
            </form>
          </div>
        </div>
      </div>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2885.38568994079!2d-79.71944568499285!3d43.681744458603305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b3f742bd5dfaf%3A0x4e85dd4aa00d79f1!2sArgus%20Security%20Services%20Corp.!5e0!3m2!1sen!2sin!4v1628009453160!5m2!1sen!2sin"
        className="w-full h-80 bg-gray-200"
        allowfullscreen=""
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default Contact;
