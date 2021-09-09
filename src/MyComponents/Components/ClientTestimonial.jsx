import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import quotes from "../../argus website/PNG/quotes.PNG";
import testimonial from "./../../argus website/PNG/IMG_0118.png";

const ClientTestimonial = () => {
    
  var settings = {  
    dots: true,  
    infinite: true,  
    speed: 500,
    centerMode: true,  
    slidesToShow: 2,  
    slidesToScroll: 5  
    };
    
    return (
    <div className="px-4 sm:px-8 md:px-16 lg:px-28 xl:px-48 py-24 bg-gray-1 font-for-para">
        <div className="flex flex-col lg:flex-row lg:justify-center items-center mb-24">
          <span className="h-1 w-10 bg-red-1 mb-10 md:m-0 md:mr-4"></span>
          <h1 className="text-4xl font-bold text-gray-3 ">
            Client Testimonials
          </h1>
        </div>
        <div className="flex flex-wrap mb-16">
          
        <Slider {...settings} className="w-full">
          <div className="p-8 md:w-1/2 w-full">
            <div className="h-full bg-white shadow-lg flex flex-col">
              <div className="bg-gray-1 px-6 py-10 ml-auto">
                <img
                  src={quotes}
                  alt=""
                  className="w-12 text-red-1 ml-auto -mt-16"
                />
              </div>
              <div className ="px-6 sm:px-16 pb-10 pt-4">
              <p className="leading-loose mb-6">
                Argus helped me find my child in a crowded mall. I would be
                eternally thankful.
              </p>
              <div className="inline-flex items-center">
                <img
                  alt="testimonial"
                  src={testimonial}
                  className="w-20 h-20 p-1 border-2 border-red-1 flex-shrink-0 object-cover object-center"
                />
                <span className="flex-grow flex flex-col pl-4">
                  <span className="title-font font-medium text-red-1">
                    Tanbir Singh
                  </span>
                  <span className="text-black text-sm">The Sidhu Estates</span>
                </span>
              </div>
              </div>
            </div>
          </div>
          <div className="p-8 md:w-1/2 w-full">
            <div className="h-full bg-white shadow-lg flex flex-col">
              <div className="bg-gray-1 px-6 py-10 ml-auto">
                <img
                  src={quotes}
                  alt=""
                  className="w-12 text-red-1 ml-auto -mt-16"
                />
              </div>
              <div className ="px-6 sm:px-16 pb-10 pt-4">
              <p className="leading-loose mb-6">
                Argus helped me find my child in a crowded mall. I would be
                eternally thankful.
              </p>
              <div className="inline-flex items-center">
                <img
                  alt="testimonial"
                  src={testimonial}
                  className="w-20 h-20 p-1 border-2 border-red-1 flex-shrink-0 object-cover object-center"
                />
                <span className="flex-grow flex flex-col pl-4">
                  <span className="title-font font-medium text-red-1">
                    Tanbir Singh
                  </span>
                  <span className="text-black text-sm">The Sidhu Estates</span>
                </span>
              </div>
              </div>
            </div>
          </div>
          <div className="p-8 md:w-1/2 w-full">
            <div className="h-full bg-white shadow-lg flex flex-col">
              <div className="bg-gray-1 px-6 py-10 ml-auto">
                <img
                  src={quotes}
                  alt=""
                  className="w-12 text-red-1 ml-auto -mt-16"
                />
              </div>
              <div className ="px-6 sm:px-16 pb-10 pt-4">
              <p className="leading-loose mb-6">
                Argus helped me find my child in a crowded mall. I would be
                eternally thankful.
              </p>
              <div className="inline-flex items-center">
                <img
                  alt="testimonial"
                  src={testimonial}
                  className="w-20 h-20 p-1 border-2 border-red-1 flex-shrink-0 object-cover object-center"
                />
                <span className="flex-grow flex flex-col pl-4">
                  <span className="title-font font-medium text-red-1">
                    Tanbir Singh
                  </span>
                  <span className="text-black text-sm">The Sidhu Estates</span>
                </span>
              </div>
              </div>
            </div>
          </div>
          <div className="p-8 md:w-1/2 w-full">
            <div className="h-full bg-white shadow-lg flex flex-col">
              <div className="bg-gray-1 px-6 py-10 ml-auto">
                <img
                  src={quotes}
                  alt=""
                  className="w-12 text-red-1 ml-auto -mt-16"
                />
              </div>
              <div className ="px-6 sm:px-16 pb-10 pt-4">
              <p className="leading-loose mb-6">
                Argus helped me find my child in a crowded mall. I would be
                eternally thankful.
              </p>
              <div className="inline-flex items-center">
                <img
                  alt="testimonial"
                  src={testimonial}
                  className="w-20 h-20 p-1 border-2 border-red-1 flex-shrink-0 object-cover object-center"
                />
                <span className="flex-grow flex flex-col pl-4">
                  <span className="title-font font-medium text-red-1">
                    Tanbir Singh
                  </span>
                  <span className="text-black text-sm">The Sidhu Estates</span>
                </span>
              </div>
              </div>
            </div>
          </div>
          <div className="p-8 md:w-1/2 w-full">
            <div className="h-full bg-white shadow-lg flex flex-col">
              <div className="bg-gray-1 px-6 py-10 ml-auto">
                <img
                  src={quotes}
                  alt=""
                  className="w-12 text-red-1 ml-auto -mt-16"
                />
              </div>
              <div className ="px-6 sm:px-16 pb-10 pt-4">
              <p className="leading-loose mb-6">
                Argus helped me find my child in a crowded mall. I would be
                eternally thankful.
              </p>
              <div className="inline-flex items-center">
                <img
                  alt="testimonial"
                  src={testimonial}
                  className="w-20 h-20 p-1 border-2 border-red-1 flex-shrink-0 object-cover object-center"
                />
                <span className="flex-grow flex flex-col pl-4">
                  <span className="title-font font-medium text-red-1">
                    Tanbir Singh
                  </span>
                  <span className="text-black text-sm">The Sidhu Estates</span>
                </span>
              </div>
              </div>
            </div>
          </div>
          </Slider>

         
        </div>
    </div>

    )
}


export default ClientTestimonial;