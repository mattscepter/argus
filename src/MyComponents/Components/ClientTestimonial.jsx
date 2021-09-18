import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import quotes from "../../argus website/SVG/Appostrophies square.svg";
import { API } from "../../api";
import "./carousel.css";
import SideLine from "./SideLine";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        paddingLeft: "10px",
        transform: "scale(1.5)",
      }}
      onClick={onClick}
    />
  );
}
function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        paddingRight: "100px",
        transform: "scale(1.5)",
      }}
      onClick={onClick}
    />
  );
}

const ClientTestimonial = ({ testimonial }) => {
  const settings = {
    centerMode: true,
    focusOnSelect: true,
    speed: 600,
    autoplay: true,
    centerPadding: "350px",
    autoplaySpeed: 5000,
    pauseOnHover: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    dots: true,
    responsive: [
      {
        breakpoint: 1700,
        settings: {
          centerPadding: "350px",
          nextArrow: <SampleNextArrow />,
          prevArrow: <SamplePrevArrow />,
        },
      },
      {
        breakpoint: 1500,
        settings: {
          centerPadding: "300px",
          nextArrow: <SampleNextArrow />,
          prevArrow: <SamplePrevArrow />,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          centerPadding: "250px",
          arrows: false,
        },
      },
      {
        breakpoint: 950,
        settings: {
          centerPadding: "200px",
          arrows: false,
        },
      },

      {
        breakpoint: 850,
        settings: {
          centerPadding: "170px",
          arrows: false,
        },
      },

      {
        breakpoint: 700,
        settings: {
          centerPadding: "50px",
          arrows: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          centerPadding: "10px",
          arrows: false,
        },
      },
    ],
  };

  return (
    <div className="bg-client">
      <div className="px-0 sm:px-4 lg:px-12 2xl:px-0 mx-auto max-w-1366 py-24 font-for-para">
        <div className="flex flex-row items-stretch w-full mt-8 md:mt-0 mb-12 lg:justify-center">
          <SideLine />
          <h1 className="leading-tight text-3xl lg:text-4xl font-bold text-gray-3">
            Client Testimonials
          </h1>
        </div>
        <div className="flex flex-wrap mb-16 w-full">
          <Slider {...settings} className="w-full">
            {testimonial.map((data) => {
              return (
                <div key={data._id} className="pt-10 px-2 testimonialSlider">
                  <div className="h-full bg-white shadow-lg flex flex-col">
                    <div className="bg-gray-1 px-6 py-10 ml-auto">
                      <img
                        src={quotes}
                        alt=""
                        className="w-9 text-red-1 ml-auto -mt-14"
                      />
                    </div>
                    <div className="px-16 pb-6 pt-2 w-full h-56">
                      <p className="leading-loose mb-6">{data?.description}</p>
                      <div className="inline-flex items-center">
                        <img
                          src={`${API}/testimonal/get-photo/${data._id}`}
                          alt=""
                          className="w-20 h-20 p-1 border-2 border-red-1 flex-shrink-0 object-cover object-center"
                        />
                        <span className="flex-grow flex flex-col pl-4">
                          <span className="title-font font-medium text-red-1">
                            {data?.name}
                          </span>
                          <span className="text-black text-sm">
                            {data?.role}
                          </span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default ClientTestimonial;
