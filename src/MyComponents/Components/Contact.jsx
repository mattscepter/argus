import { useFormik } from "formik";
import React, { useState } from "react";
import axiosInstance from "../../helpers/axiosInstance";
import Alert from "./Alert";

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

function ContactForm({ width = "w-full" }) {
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
      axiosInstance
        .post(`/contact-user/save`, values, {
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
    <form className={`bg-gray-200 p-6 ${width}`} onSubmit={handleSubmit}>
      {showAlert.show ? (
        <Alert alert={showAlert} rmAlert={setShowAlert} />
      ) : null}
      <input
        className="w-full mb-3 py-5 px-4 focus:outline-none focus:ring-1 ring-red-1"
        type="name"
        placeholder="Your Name"
        {...getFieldProps("name")}
      />
      {errors.name ? <div>{errors.name}</div> : null}
      <input
        className="w-full mb-3 py-5 px-4 focus:outline-none focus:ring-1 ring-red-1"
        type="telephone"
        placeholder="Phone Number"
        {...getFieldProps("phoneNumber")}
      />
      {errors.phoneNumber ? <div>{errors.phoneNumber}</div> : null}
      <textarea
        className="w-full h-56 mb-3 py-5 px-4 focus:outline-none focus:ring-1 ring-red-1"
        type="text"
        placeholder="Write Message"
        {...getFieldProps("message")}
      />
      {errors.message ? <div>{errors.message}</div> : null}
      <button
        type="submit"
        className="w-full p-4 rounded-lg border text-white bg-red-1 hover:bg-white hover:text-red-1 hover:border-red-1"
      >
        SEND MESSAGE
      </button>
    </form>
  );
}

export default ContactForm;
