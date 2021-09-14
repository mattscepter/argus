import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import sponsor1 from "./../../argus website/PNG/G.png";
import sponsor2 from "./../../argus website/PNG/G.png";
import sponsor3 from "./../../argus website/PNG/G2.png";


const ClientCorousal = () => {
    
  var settings = {  
    dots: true,  
    infinite: true,  
    speed: 500,
    centerMode: true,  
    slidesToShow: 3,  
    slidesToScroll: 3  
    };
    
    return (
        <div className="bg-client">
        <div className="px-4 sm:px-8 md:px-16 lg:px-28 xl:px-48 2xl:px-0 mx-auto max-w-1366 py-12">
            <div className="flex flex-col lg:flex-row items-center lg:justify-center mb-4">
            <span className="h-1 w-10 bg-red-1 m-6 md:m-0 md:mr-4"></span>
            <h1 className="leading-tight text-4xl font-bold text-gray-3 mb-4">
                Clients
            </h1>
            </div>
            <Slider {...settings} className="">
                <div className="mx-auto">
                    <img src={sponsor1} alt="" className="h-32"/>
                </div>
                <div className="mx-auto">
                    <img src={sponsor2} alt="" className="h-32"/>
                </div>
                <div className="mx-auto">
                    <img src={sponsor3} alt="" className="h-32" />
                </div>
                <div className="mx-auto">
                    <img src={sponsor1} alt="" className="h-32" />
                </div>
                <div className="mx-auto">
                    <img src={sponsor2} alt="" className="h-32" />
                </div>
                <div className="mx-auto">
                    <img src={sponsor3} alt="" className="h-32"/>
                </div>
                <div className="mx-auto">
                    <img src={sponsor1} alt="" className="h-32"/>
                </div>
                <div className="mx-auto">
                    <img src={sponsor2} alt="" className="h-32"/>
                </div>
                <div className="mx-auto" >
                    <img src={sponsor3} alt="" className="h-32 w-full"/>
                </div>
            </Slider>
      </div>
      </div>

    )
}


export default ClientCorousal;