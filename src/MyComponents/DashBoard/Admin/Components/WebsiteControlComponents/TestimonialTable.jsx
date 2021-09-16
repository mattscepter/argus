import React from "react";
import { API } from "../../../../../api";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { deleteTestimonial } from "../../../../../context/actions/testimonialAction";

export const TestimonialTable = () => {
  const testimonial = useSelector((state) => state.testimonial.testimonial);
  const dispatch = useDispatch();

  return (
    <div className="mx-8 my-8 p-4 bg-white shadow-lg rounded-xl">
      {/* Card of table */}
      {testimonial.map((testimonial) => {
        const arr = new Uint8Array(testimonial?.photo?.data?.data);
        const b64 = btoa(
          arr.reduce((data, byte) => data + String.fromCharCode(byte), "")
        );

        return (
          <div className="flex flex-col md:flex-row border-2 text-lg items-center">
            <div className="flex flex-col items-center text-center w-full md:w-2/12">
              <h1 className="px-3 py-1 text-red-1 font-bold">
                {testimonial?.name}
              </h1>
              <h1 className="px-3 py-1 leading-tight">{testimonial?.role}</h1>
            </div>
            <h1 className="px-3 py-1 border-b-2 border-t-2 md:border-0 md:border-r-2 md:border-l-2 w-full md:w-8/12">
              {testimonial?.description}
            </h1>
            <div className="flex flex-col items-center mx-auto">
              <img
                src={`${API}/testimonal/get-photo/${testimonial._id}`}
                alt=""
                className="w-24 h-24 rounded-full p-2 "
              />
              <button
                onClick={() => {
                  dispatch(deleteTestimonial(testimonial._id));
                }}
                className="px-3 py-1 m-2 border-2 border-dashed border-red-1 bg-red-1 text-white rounded-lg hover:text-red-1 hover:bg-opacity-20"
              >
                Delete
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};
