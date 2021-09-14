import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import placeholder from "./../../argus website/PNG/IMG_0118.png";


const Teams = ({ testimonial }) => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    centerMode: true,
    slidesToShow: 2,
    slidesToScroll: 5,
  };

  return (
    <div className="px-4 sm:px-8 md:px-16 lg:px-28 xl:px-48 2xl:px-0 mx-auto max-w-1366 py-24 font-for-para bg-empofmon bg-cover bg-center bg-no-repeat">
      <div className="flex flex-col lg:flex-row lg:justify-center items-center mb-24">
        <span className="h-1 w-10 bg-red-1 mb-10 md:m-0 md:mr-4"></span>
        <h1 className="text-4xl font-bold text-gray-3 ">Our Team</h1>
      </div>
      <Slider {...settings} className="w-full">
        <div className="w-full flex flex-row items-center">
            <div className="w-1/2">
                <img src={placeholder} alt="" className="w-56 h-56"/>
            </div>
            <div className="w-1/2">
                <h1 className="text-2xl title-font font-bold text-gray-900 mb-2">Name here</h1>
                <h2 className="text-xl title-font font-bold text-gray-900 mb-2">Title Here</h2>
                <p className="leading-loose text-lg font-medium text-gray-2 mb-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut ratione iste repellat sunt voluptas ex molestias placeat quibusdam quidem qui accusantium nihil, numquam magnam similique id eaque magni deserunt pariatur.</p>
            </div>
        </div>
        <div className="w-full flex flex-row items-center">
            <div className="w-1/2">
                <img src={placeholder} alt="" className="w-56 h-56"/>
            </div>
            <div className="w-1/2">
                <h1 className="text-2xl title-font font-bold text-gray-900 mb-2">Name here</h1>
                <h2 className="text-xl title-font font-bold text-gray-900 mb-2">Title Here</h2>
                <p className="leading-loose text-lg font-medium text-gray-2 mb-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut ratione iste repellat sunt voluptas ex molestias placeat quibusdam quidem qui accusantium nihil, numquam magnam similique id eaque magni deserunt pariatur.</p>
            </div>
        </div>
        <div className="w-full flex flex-row items-center">
            <div className="w-1/2">
                <img src={placeholder} alt="" className="w-56 h-56"/>
            </div>
            <div className="w-1/2">
                <h1 className="text-2xl title-font font-bold text-gray-900 mb-2">Name here</h1>
                <h2 className="text-xl title-font font-bold text-gray-900 mb-2">Title Here</h2>
                <p className="leading-loose text-lg font-medium text-gray-2 mb-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut ratione iste repellat sunt voluptas ex molestias placeat quibusdam quidem qui accusantium nihil, numquam magnam similique id eaque magni deserunt pariatur.</p>
            </div>
        </div>
        <div className="w-full flex flex-row items-center">
            <div className="w-1/2">
                <img src={placeholder} alt="" className="w-56 h-56"/>
            </div>
            <div className="w-1/2">
                <h1 className="text-2xl title-font font-bold text-gray-900 mb-2">Name here</h1>
                <h2 className="text-xl title-font font-bold text-gray-900 mb-2">Title Here</h2>
                <p className="leading-loose text-lg font-medium text-gray-2 mb-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut ratione iste repellat sunt voluptas ex molestias placeat quibusdam quidem qui accusantium nihil, numquam magnam similique id eaque magni deserunt pariatur.</p>
            </div>
        </div>
        <div className="w-full flex flex-row items-center">
            <div className="w-1/2">
                <img src={placeholder} alt="" className="w-56 h-56"/>
            </div>
            <div className="w-1/2">
                <h1 className="text-2xl title-font font-bold text-gray-900 mb-2">Name here</h1>
                <h2 className="text-xl title-font font-bold text-gray-900 mb-2">Title Here</h2>
                <p className="leading-loose text-lg font-medium text-gray-2 mb-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut ratione iste repellat sunt voluptas ex molestias placeat quibusdam quidem qui accusantium nihil, numquam magnam similique id eaque magni deserunt pariatur.</p>
            </div>
        </div>
        <div className="w-full flex flex-row items-center">
            <div className="w-1/2">
                <img src={placeholder} alt="" className="w-56 h-56"/>
            </div>
            <div className="w-1/2">
                <h1 className="text-2xl title-font font-bold text-gray-900 mb-2">Name here</h1>
                <h2 className="text-xl title-font font-bold text-gray-900 mb-2">Title Here</h2>
                <p className="leading-loose text-lg font-medium text-gray-2 mb-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut ratione iste repellat sunt voluptas ex molestias placeat quibusdam quidem qui accusantium nihil, numquam magnam similique id eaque magni deserunt pariatur.</p>
            </div>
        </div>
        <div className="w-full flex flex-row items-center">
            <div className="w-1/2">
                <img src={placeholder} alt="" className="w-56 h-56"/>
            </div>
            <div className="w-1/2">
                <h1 className="text-2xl title-font font-bold text-gray-900 mb-2">Name here</h1>
                <h2 className="text-xl title-font font-bold text-gray-900 mb-2">Title Here</h2>
                <p className="leading-loose text-lg font-medium text-gray-2 mb-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut ratione iste repellat sunt voluptas ex molestias placeat quibusdam quidem qui accusantium nihil, numquam magnam similique id eaque magni deserunt pariatur.</p>
            </div>
        </div>
    </Slider>
    </div>
  );
};

export default Teams;
