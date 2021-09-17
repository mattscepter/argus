import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useSelector } from "react-redux";
import { API } from "../../api";

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
    speed: 2000,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    pauseOnHover: true,
    dots: true,
    slidesToShow: 5,
    arrows: false,
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
          slidesToShow: 4,
        },
      },

      {
        breakpoint: 850,
        settings: {
          centerPadding: "180px",
          slidesToShow: 4,
        },
      },

      {
        breakpoint: 750,
        settings: {
          centerPadding: "160px",
          slidesToShow: 4,
        },
      },

      {
        breakpoint: 650,
        settings: {
          centerPadding: "140px",
          slidesToShow: 3,
        },
      },

      {
        breakpoint: 600,
        settings: {
          centerPadding: "120px",
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 550,
        settings: {
          centerPadding: "90px",
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          centerPadding: "70px",
          slidesToShow: 3,
        },
      },
    ],
  };

  return (
    <div className="px-0 sm:px-8 xl:px-32 py-12 mx-auto bg-gray-1">
      <div className="flex flex-col lg:flex-row items-center lg:justify-center mb-4">
        <span className="h-1 w-10 bg-red-1 m-6 md:m-0 md:mr-4"></span>
        <h1 className="leading-tight text-4xl font-bold text-gray-3 mb-4">
          Clients
        </h1>
      </div>
      <Slider {...settings}>
        {clients.map((client) => {
          return (
            <div key={client._id}>
              <img
                src={`${API}/client/get-photo/${client._id}`}
                alt=""
                className="w-44 h-40 mx-auto object-contain pt-10"
              />
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default ClientCorousal;
