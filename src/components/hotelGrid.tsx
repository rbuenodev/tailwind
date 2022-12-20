import React from "react";
import hotel from "../assets/img/hotel-1.jpg";
import imgShadow from "../assets/img/image-shadow.png";

const HotelGrid: React.FC = () => {
  return (
    <div className="container max-w-6xl mx-auto px-4">
      <div>
        <h3 className="text-2xl text-gray-500 font-semibold mb-8">
          Conheça mais resorts
        </h3>
        <div className="md:grid md:grid-cols-4 md:grid-rows-2 md:gap-6 h-40 space-y-6 ">
          <div className="relative md:col-span-2 row-span-2 rounded-md overflow-hidden">
            <div className="absolute bottom-0 pl-4 pb-4 text-white font-bold z-20">
              Beach Park Resort
            </div>
            <img
              src={imgShadow}
              className="absolute bottom-0 left-0 right-0 h-20 z-10"
            />
            <img src={hotel} className="w-full h-full object-cover" />
          </div>
          <div className="relative md:col-span-2 rounded-md overflow-hidden">
            <div className="absolute bottom-0 pl-4 pb-4 text-white font-bold z-20">
              Beach Park Resort
            </div>
            <img
              src={imgShadow}
              className="absolute bottom-0 left-0 right-0 h-20 z-10"
            />
            <img src={hotel} className="w-full h-full object-cover" />
          </div>
          <div className="relative rounded-md overflow-hidden">
            <div className="absolute bottom-0 pl-4 pb-4 text-white font-bold z-20">
              Beach Park Resort
            </div>
            <img
              src={imgShadow}
              className="absolute bottom-0 left-0 right-0 h-20 z-10"
            />
            <img src={hotel} className="w-full h-full object-cover" />
          </div>
          <div className="relative rounded-md overflow-hidden">
            <div className="absolute bottom-0 pl-4 pb-4 text-white font-bold z-20">
              Beach Park Resort
            </div>
            <img
              src={imgShadow}
              className="absolute bottom-0 left-0 right-0 h-20 z-10"
            />
            <img src={hotel} className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelGrid;
