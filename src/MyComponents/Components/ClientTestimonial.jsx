import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import quotes from "../../argus website/PNG/quotes.PNG";
import { API } from "../../api";
import "./carousel.css";
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        paddingLeft: "50px",
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
        display: "block",
        paddingRight: "150px",
        transform: "scale(1.5)",
      }}
      onClick={onClick}
    />
  );
}

const ClientTestimonial = ({ testimonial }) => {
  const settings = {
    centerMode: true,
    infinite: true,
    slidesToShow: 1,
    speed: 600,
    centerPadding: "450px",
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    dots: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div className="px-4 sm:px-8 md:px-16 lg:px-28 xl:px-48 py-24 bg-gray-1 font-for-para">
      <div className="flex flex-col lg:flex-row lg:justify-center items-center mb-24">
        <span className="h-1 w-10 bg-red-1 mb-10 md:m-0 md:mr-4"></span>
        <h1 className="text-4xl font-bold text-gray-3 ">Client Testimonials</h1>
      </div>
      <div className="flex flex-wrap mb-16">
        <Slider {...settings} className="w-full">
          {testimonial.map((data) => {
            return (
              <div className="py-8 px-2 ">
                <div className="h-full bg-white shadow-lg flex flex-col">
                  <div className="bg-gray-1 px-6 py-10 ml-auto">
                    <img
                      src={quotes}
                      alt=""
                      className="w-12 text-red-1 ml-auto -mt-16"
                    />
                  </div>
                  <div className="px-4 sm:px-16 pb-10 pt-2 w-full h-56">
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
                        <span className="text-black text-sm">{data?.role}</span>
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
  );
};

export default ClientTestimonial;