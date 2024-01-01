import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { sliderData } from "../../../../public/data";
import { Link } from "react-router-dom";

const Slider = () => {
  return (
    <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
      {sliderData.map((slider) => (
        <SwiperSlide>
          <div
            style={{ backgroundImage: `url(${slider.image})` }}
            className="flex items-center py-14 md:py-0 md:h-[540px] bg-cover bg-center bg-no-repeat w-full"
          >
            <div className="container mx-auto">
              <div className="md:w-3/4 lg:w-1/2 space-y-3">
                <h4 className="text-2xl font-semibold text-blue-700">{slider.subTitle && slider.subTitle}</h4>
                <h2 className="text-4xl font-bold text-blue-900">
                  {slider.title}
                </h2>
                <h4 className="text-2xl">{slider.price}</h4>
                <p className="text-xl pb-10">{slider.descripiton}</p>
                <Link className="bg-blue-900 px-4 py-3 rounded-md text-white shadow-md">
                  Shop Now
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
