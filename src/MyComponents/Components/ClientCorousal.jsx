import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import sponsor1 from "./../../argus website/PNG/7. Sponsor 2.png";


const ClientCorousal = () => {
    
  var settings = {  
    dots: true,  
    infinite: true,  
    speed: 500,
    centerMode: true,  
    slidesToShow: 4,  
    slidesToScroll: 3  
    };
    
    return (
        <div className="px-4 sm:px-8 md:px-16 lg:px-28 xl:px-48 py-12 mx-auto bg-gray-1">
            <div className="flex flex-col lg:flex-row items-center lg:justify-center mb-4">
            <span className="h-1 w-10 bg-red-1 m-6 md:m-0 md:mr-4"></span>
            <h1 className="leading-tight text-4xl font-bold text-gray-3 mb-4">
                Clients
            </h1>
            </div>
            <Slider {...settings} className="w-full">
                <div>
                    <img src={sponsor1} alt="" className="w-40 " />
                </div>
                <div>
                    <img src={sponsor1} alt="" className="w-40 " />
                </div>
                <div>
                    <img src={sponsor1} alt="" className="w-40 " />
                </div>
                <div>
                    <img src={sponsor1} alt="" className="w-40 " />
                </div>
                <div>
                    <img src={sponsor1} alt="" className="w-40 " />
                </div>
            </Slider>
      </div>

    )
}


export default ClientCorousal;