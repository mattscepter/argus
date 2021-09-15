import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import sponsor1 from "./../../argus website/PNG/7. Sponsor 2.png";

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

const ClientCorousal = () => {
  const settings = {
    centerMode: true,
    speed: 600,
    centerPadding: "550px",
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    dots: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1700,
        settings: {
          centerPadding: "450px",
          infinite: true,
        },
      },
      {
        breakpoint: 1500,
        settings: {
          centerPadding: "350px",
          infinite: true,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          centerPadding: "300px",
          infinite: true,
        },
      },

      {
        breakpoint: 750,
        settings: {
          centerPadding: "200px",
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          centerPadding: "150px",
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          centerPadding: "80px",
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="px-4 sm:px-8 md:px-16 lg:px-28 xl:px-48 py-12 mx-auto bg-gray-1">
      <div className="flex flex-col lg:flex-row items-center lg:justify-center mb-4">
        <span className="h-1 w-10 bg-red-1 m-6 md:m-0 md:mr-4"></span>
        <h1 className="leading-tight text-4xl font-bold text-gray-3 mb-4">
          Clients
        </h1>
      </div>
      <Slider {...settings}>
        <div>
          <img src={sponsor1} alt="" className=" h-56 mx-auto object-fill" />
        </div>
        <div>
          <img src={sponsor1} alt="" className=" h-56 mx-auto object-fill" />
        </div>
        <div>
          <img src={sponsor1} alt="" className=" h-56 mx-auto object-fill" />
        </div>
        <div>
          <img src={sponsor1} alt="" className=" h-56 mx-auto object-fill" />
        </div>
        <div>
          <img src={sponsor1} alt="" className=" h-56 mx-auto object-fill" />
        </div>
      </Slider>
    </div>
  );
};

export default ClientCorousal;
