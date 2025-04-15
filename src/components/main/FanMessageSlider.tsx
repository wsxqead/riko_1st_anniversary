"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

import { fanMessages } from "@/data/main/fanMessages";

export default function FanMessageSlider() {
  return (
    <section className="mt-16 w-full max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-6">
        💌 팬들의 축하 메시지
      </h2>

      <Swiper
        modules={[Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {fanMessages.map((msg, idx) => (
          <SwiperSlide key={idx}>
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg text-center h-full flex flex-col justify-between">
              <p className="text-lg text-gray-900 dark:text-gray-300 mb-2">
                {msg.message}
              </p>
              <span className="text-sm text-gray-600 dark:text-gray-400">
                - {msg.author}
              </span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
