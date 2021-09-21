import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useSelector } from "react-redux";
import { API } from "../../api";
import SideLine from "./SideLine";

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
  const clients = useSelector((state) => state.client.clients);
  const settings = {
    speed: 9000,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    arrows: false,
    centerMode: true,
    centerPadding: "400px",
    responsive: [
      {
        breakpoint: 1800,
        settings: {
          centerPadding: "500px",
        },
      },

      {
        breakpoint: 1700,
        settings: {
          centerPadding: "450px",
        },
      },

      {
        breakpoint: 1600,
        settings: {
          centerPadding: "350px",
        },
      },

      {
        breakpoint: 1500,
        settings: {
          centerPadding: "300px",
        },
      },
      {
        breakpoint: 1200,
        settings: {
          centerPadding: "260px",
        },
      },

      {
        breakpoint: 950,
        settings: {
          centerPadding: "220px",
        },
      },

      {
        breakpoint: 850,
        settings: {
          centerPadding: "180px",
        },
      },

      {
        breakpoint: 750,
        settings: {
          centerPadding: "160px",
        },
      },

      {
        breakpoint: 650,
        settings: {
          centerPadding: "140px",
        },
      },

      {
        breakpoint: 600,
        settings: {
          centerPadding: "120px",
        },
      },
      {
        breakpoint: 550,
        settings: {
          centerPadding: "90px",
        },
      },
      {
        breakpoint: 480,
        settings: {
          centerPadding: "0px",
        },
      },
    ],
  };

  return (
    <div className="bg-client">
      <div className="px-4 sm:px-8 lg:px-12 2xl:px-0 mx-auto max-w-1366 pt-14 pb-14">
        <div className="flex flex-row items-stretch w-full mt-8 md:mt-0 mb-8 lg:justify-center">
          <SideLine />
          <h1 className="leading-tight text-3xl lg:text-4xl font-bold text-gray-3">
            Clients
          </h1>
        </div>
        <Slider {...settings} className="pt-8 lg:pt-4 lg:pb-4">
          {clients.map((client) => {
            return (
              <div key={client._id} className="clientSlider">
                <img
                  src={`${API}/client/get-photo/${client._id}`}
                  alt=""
                  className="h-32 mx-auto object-contain pl-10 pr-10"
                />
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default ClientCorousal;
