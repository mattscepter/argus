import React, { useEffect, useState } from "react";
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

const Teams = () => {
  const team = useSelector((state) => state.team.team);

  const [nav, setnav] = useState({
    nav1: null,
    nav2: null,
  });
  let slider1, slider2;
  useEffect(() => {
    setnav({
      nav1: slider1,
      nav2: slider2,
    });
  }, [slider1, slider2]);
  var imgSliderSettings = {
    focusOnSelect: true,
    centerMode: true,
    speed: 600,
    autoplay: true,
    centerPadding: "450px",
    autoplaySpeed: 3000,
    pauseOnHover: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1500,
        settings: {
          centerPadding: "420px",
        },
      },
      {
        breakpoint: 1300,
        settings: {
          centerPadding: "400px",
        },
      },
      {
        breakpoint: 1200,
        settings: {
          centerPadding: "340px",
        },
      },
      {
        breakpoint: 1100,
        settings: {
          centerPadding: "310px",
        },
      },

      {
        breakpoint: 1000,
        settings: {
          centerPadding: "300px",
        },
      },

      {
        breakpoint: 900,
        settings: {
          centerPadding: "250px",
        },
      },
      {
        breakpoint: 800,
        settings: {
          centerPadding: "240px",
        },
      },

      {
        breakpoint: 700,
        settings: {
          centerPadding: "180px",
        },
      },
      {
        breakpoint: 600,
        settings: {
          centerPadding: "130px",
        },
      },

      {
        breakpoint: 480,
        settings: {
          centerPadding: "120px",
        },
      },
    ],
  };

  var descSettings = {
    focusOnSelect: true,
    centerMode: true,
    speed: 600,
    centerPadding: "120px",
    arrows: false,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          centerPadding: "70px",
        },
      },
      {
        breakpoint: 650,
        settings: {
          centerPadding: "50px",
        },
      },
      {
        breakpoint: 500,
        settings: {
          centerPadding: "20px",
        },
      },
    ],
  };

  return (
    <div className="px-0 lg:px-10   2xl:px-0 mx-auto max-w-1366 py-24 font-for-para bg-empofmon bg-cover bg-center bg-no-repeat">
      <div className="flex flex-col lg:flex-row lg:justify-center items-center mb-24">
        <span className="h-1 w-10 bg-red-1 mb-10 md:m-0 md:mr-4"></span>
        <h1 className="text-4xl font-bold text-gray-3 ">Our Team</h1>
      </div>

      <Slider
        asNavFor={nav.nav1}
        ref={(slider) => (slider2 = slider)}
        {...imgSliderSettings}
      >
        {team.map((teammember) => {
          return (
            <div>
              <img
                src={`${API}/team/get-photo/${teammember._id}`}
                alt=""
                className="max-h-96 mx-auto object-contain object-bottom pt-6"
              />
            </div>
          );
        })}
      </Slider>

      <Slider
        {...descSettings}
        asNavFor={nav.nav2}
        ref={(slider) => (slider1 = slider)}
      >
        {team.map((teammember) => {
          return (
            <div key={teammember._id}>
              <div className="w-full p-4 mt-6">
                <h1 className="text-3xl title-font font-bold text-gray-900 mb-2 border-b-6 p-2 pt-0 pl-0 border-red-500 inline-block">
                  {teammember.name}
                </h1>
                <h2 className="text-xl title-font font-bold text-gray-900 mb-2">
                  {teammember.role}
                </h2>
                <p className="leading-loose text-lg font-medium text-gray-2 mb-8">
                  {teammember.description}
                </p>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default Teams;
