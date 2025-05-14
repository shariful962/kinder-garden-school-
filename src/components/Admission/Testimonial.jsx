'use client';

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const SwiperTestimonials = () => (
  <div className="max-w-4xl mx-auto">
    <Swiper
      spaceBetween={30}
      loop={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
        el: '.custom-pagination',
      }}
      breakpoints={{
        0: {
          slidesPerView: 1,
          slidesPerGroup: 1,
        },
        768: {
          slidesPerView: 2,
          slidesPerGroup: 1,
        },
      }}
      modules={[Pagination, Autoplay]}
      className="mySwiper"
    >
      <SwiperSlide>
        <div className="p-4 border rounded bg-gray-50">
          <p className="text-gray-800">“My child loves going to school every day...”</p>
          <p className="mt-2 font-semibold">– Mrs. Rahman</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="p-4 border rounded bg-gray-50">
          <p className="text-gray-800">“A wonderful school that really nurtures...”</p>
          <p className="mt-2 font-semibold">– Mr. Alam</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="p-4 border rounded bg-gray-50">
          <p className="text-gray-800">“Teachers are very caring and skilled...”</p>
          <p className="mt-2 font-semibold">– Mrs. Kabir</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="p-4 border rounded bg-gray-50">
          <p className="text-gray-800">“My child has grown so much here!”</p>
          <p className="mt-2 font-semibold">– Mr. Hossain</p>
        </div>
      </SwiperSlide>
    </Swiper>

    {/* Pagination under slider */}
    <div className="custom-pagination mt-6 text-center"></div>
  </div>
);

export default SwiperTestimonials;




